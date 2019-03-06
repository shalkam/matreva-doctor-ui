import React from 'react';
import classNames from 'classnames';
import { push } from 'react-router-redirect';
import CaretDown from 'images/caret-down.svg';

import styles from './HeaderDropdown.module.scss';

class HeaderDropdown extends React.Component {
  state = {
    isOpen: false
  };

  handleOutsideClick = e => {
    if (!this.dropdown.contains(e.target) && this.state.isOpen) {
      this.closeDropdown();
    }
  };

  openDropdown = () => {
    this.setState(
      {
        isOpen: true
      },
      () => {
        document.addEventListener('click', this.handleOutsideClick);
      }
    );
  };

  closeDropdown = () => {
    this.setState(
      {
        isOpen: false
      },
      () => {
        document.removeEventListener('click', this.handleOutsideClick);
      }
    );
  };

  toggleDropdown = () => {
    if (this.state.isOpen) {
      this.closeDropdown();
    } else {
      this.openDropdown();
    }
  };

  handleRoute = (route, disabled) => {
    if (disabled) {
      return null;
    }

    push(route);
    this.closeDropdown();
  };

  render() {
    const { image, links } = this.props;

    const dropdownStyle = classNames(styles.dropdown, {
      [styles.open]: this.state.isOpen
    });

    const caretStyle = classNames(styles.caret, {
      [styles.visible]: !this.state.isOpen
    });

    return (
      <div className={styles.container} onClick={this.toggleDropdown}>
        <div>
          {' '}
          <img src={image} className={styles['profile-picture']} />
        </div>

        <div className={dropdownStyle} ref={ref => (this.dropdown = ref)}>
          <ul>
            {links.map(({ text, icon: Icon, route, disabled }) => {
              const linkStyle = classNames(styles.link, {
                [styles.disabled]: disabled
              });

              return (
                <li
                  className={linkStyle}
                  key={text}
                  onClick={() => this.handleRoute(route, disabled)}
                >
                  <img src={Icon} className={styles.icon} />
                  <p>{text}</p>
                </li>
              );
            })}
          </ul>
        </div>

        <img src={CaretDown} className={caretStyle} />
      </div>
    );
  }
}

export default HeaderDropdown;
