import React from 'react';
import { Modal as _Modal } from 'antd-mobile';
import Modal from './Modal.web'
import alert from './alert.web'
import prompt from './prompt.web'
import operation from './operation.web'

Modal.alert = alert;
Modal.prompt = prompt;
Modal.operation = operation;

export default Modal;
