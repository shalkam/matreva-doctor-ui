import React from 'react';
import PropTypes from 'prop-types';
import { withHandlers } from 'recompose';
import Modal from './Modal';

const ModalWrapper = ({ modalRef, children, ...props }) => (
  <Modal ref={modalRef} {...props}>
    {children}
  </Modal>
);

ModalWrapper.propTypes = {
  modalRef: PropTypes.func.isRequired
};

const Enhanced = withHandlers(() => ({
  modalRef: () => ref => {
    Enhanced.ref = ref;
  }
}))(ModalWrapper);

export default Enhanced;
