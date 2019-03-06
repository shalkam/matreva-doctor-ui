import React from 'react';
import classNames from 'classnames';

import facebook from 'images/facebook-logo.svg';
import youtube from 'images/youtube-logo.svg';
import instagram from 'images/instagram-logo.svg';
import twitter from 'images/twitter-logo.svg';

import socialFacebook from 'images/social-facebook.svg';
import socialYoutube from 'images/social-youtube.svg';
import socialInstagram from 'images/social-instagram.svg';
import socialTwitter from 'images/social-twitter.svg';

import createStep from 'images/createstep.svg';
import createStepFill from 'images/createstep-fill.svg';

import attach from 'images/attach.svg';
import photo from 'images/photo.svg';
import edit from 'images/edit.svg';
import editProfile from 'images/edit2.svg';
import dollar from 'images/dollar.svg';

import adminControl from 'images/admin-control.svg';
import linkedAccounts from 'images/linked-accounts.svg';
import logout from 'images/logout.svg';
import paymentSettings from 'images/paymentsettings.svg';
import settings from 'images/settings.svg';

import caretDown from 'images/caret-down.svg';
import check from 'images/check.svg';
import remove from 'images/remove.svg';
import undo from 'images/undo.svg';
import offer from 'images/offer.svg';
import coin from 'images/coin.svg';
import informationBubble from 'images/information-bubble.svg';

import mascot from 'images/mascot.png';

import styles from './Icon.module.scss';

class Icon extends React.PureComponent {
  render() {
    const { type, active, ...iconProps } = this.props;

    let image;
    switch (type) {
      case 'facebook':
        image = facebook;
        break;
      case 'twitter':
        image = twitter;
        break;
      case 'youtube':
        image = youtube;
        break;
      case 'instagram':
        image = instagram;
        break;
      case 'social-facebook':
        image = socialFacebook;
        break;
      case 'social-twitter':
        image = socialTwitter;
        break;
      case 'social-youtube':
        image = socialYoutube;
        break;
      case 'social-instagram':
        image = socialInstagram;
        break;
      case 'attach':
        image = attach;
        break;
      case 'photo':
        image = photo;
        break;
      case 'edit':
        image = edit;
        break;
      case 'dollar':
        image = dollar;
        break;
      case 'editProfile':
        image = editProfile;
        break;
      case 'createStep':
        image = createStep;
        break;
      case 'createStepFill':
        image = createStepFill;
        break;
      case 'mascot':
        image = mascot;
        break;
      case 'adminControl':
        image = adminControl;
        break;
      case 'linkedAccounts':
        image = linkedAccounts;
        break;
      case 'logout':
        image = logout;
        break;
      case 'paymentSettings':
        image = paymentSettings;
        break;
      case 'settings':
        image = settings;
        break;
      case 'caretDown':
        image = caretDown;
        break;
      case 'check':
        image = check;
        break;
      case 'remove':
        image = remove;
        break;
      case 'undo':
        image = undo;
        break;
      case 'offer':
        image = offer;
        break;
      case 'coin':
        image = coin;
        break;
      case 'information-bubble':
        image = informationBubble;
        break;
      default:
        image = null;
    }

    const logoStyle = classNames(styles['icon-logo'], {
      [styles.active]: active,
      [styles.noState]: active === 'none'
    });

    return (
      <img className={logoStyle} src={image} {...iconProps} alt="amplfi logo" />
    );
  }
}

Icon.defaultProps = {
  active: 'none'
};

export default Icon;
