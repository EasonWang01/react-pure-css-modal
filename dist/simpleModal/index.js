'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Modal = function Modal(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement('input', { className: 'yicheng-modal-state', id: props.id, type: 'checkbox' }),
    _react2.default.createElement(
      'div',
      { className: 'yicheng-modalbg', style: { width: '100%', height: '100%', background: 'rgba(0,0,0, .6)', position: 'fixed', top: '0', left: '0', zIndex: 10000 } },
      _react2.default.createElement(
        'div',
        { className: 'yicheng-modalWhite', style: Object.assign(_defineProperty({ zIndex: '100', width: '50%', height: '50%', background: 'white', position: 'fixed', top: '25%', left: '25%' }, 'zIndex', 10000), props.scrollY ? { overflowY: 'scroll' } : '', props.scrollX ? { overflowX: 'scroll' } : '', props.style) },
        props.children
      ),
      _react2.default.createElement('label', { onClick: function onClick() {
          return props.onClose ? props.onClose() : '';
        }, className: 'yicheng-modal__bg', htmlFor: props.id })
    )
  );
};

exports.default = Modal;