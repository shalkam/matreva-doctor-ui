import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import styles from './Modal.module.scss';

ReactModal.setAppElement('#root');
class Modal extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string
  };

  static defaultProps = {
    title: ''
  };

  state = {
    open: this.props.forceOpen, // eslint-disable-line
    title: this.props.title, // eslint-disable-line
    content: this.props.children // eslint-disable-line
  };

  open = ({ content, title }) => {
    this.setState({ open: true, content, title });
  };

  toggleModal = () => {
    const { onClose } = this.props;
    const { open } = this.state;
    if (open && onClose) onClose();
    this.setState({ open: !open });
  };

  render() {
    const { open, title, content } = this.state;
    return (
      <ReactModal
        isOpen={open}
        contentLabel={title}
        onRequestClose={this.toggleModal}
        style={{
          overlay: { zIndex: 5, background: 'none' },
          content: { border: 'none', background: 'none' }
        }}
      >
        <div className={styles.modalContainer}>
          <div className={styles.container}>
            <div className={styles.header}>
              <div className={styles.headerTitle}>{title}</div>
              <div className={styles.headerAction}>
                <div className={styles.headerClose} onClick={this.toggleModal}>
                  +
                </div>
              </div>
            </div>
            <div className={styles.content}>{content}</div>
          </div>
        </div>
      </ReactModal>
    );
  }
}

export default Modal;
