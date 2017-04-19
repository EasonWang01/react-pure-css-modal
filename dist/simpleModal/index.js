'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modal = function Modal(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement('input', { className: 'yicheng-modal-state', id: props.id, type: 'checkbox' }),
    _react2.default.createElement(
      'div',
      { className: 'yicheng-modalbg', style: { width: '100%', height: '100%', background: 'rgba(0,0,0, .6)', position: 'fixed', top: '0', left: '0' } },
      _react2.default.createElement(
        'div',
        { className: 'yicheng-modalWhite', style: Object.assign({ zIndex: '100', width: '50%', height: '50%', background: 'white', position: 'fixed', top: '25%', left: '25%', overflowY: 'scroll' }, props.style) },
        props.children
      ),
      _react2.default.createElement('label', { onClick: function onClick() {
          return props.onClose();
        }, className: 'yicheng-modal__bg', htmlFor: props.id })
    )
  );
};

exports.default = Modal;