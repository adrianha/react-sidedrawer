'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _index = require('./index.js');

var _index2 = _interopRequireDefault(_index);

require('./demo.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Demo = function (_Component) {
	_inherits(Demo, _Component);

	function Demo(props) {
		_classCallCheck(this, Demo);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Demo).call(this, props));

		_this.close = _this.close.bind(_this);
		_this.toggle = _this.toggle.bind(_this);

		_this.state = {
			isOpen: false
		};
		return _this;
	}

	_createClass(Demo, [{
		key: 'close',
		value: function close() {
			this.setState({
				isOpen: false
			});
		}
	}, {
		key: 'toggle',
		value: function toggle() {
			this.setState({
				isOpen: !this.state.isOpen
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var customClassNames = {
				overlay: 'custom-overlay',
				sidedrawer: 'custom-sidedrawer'
			};

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					_index2.default,
					{ customClassNames: customClassNames, open: this.state.isOpen, onClose: this.close },
					'This is child component of Sidedrawer'
				),
				_react2.default.createElement(
					'button',
					{ onClick: this.toggle },
					'Toggle Sidedrawer'
				)
			);
		}
	}]);

	return Demo;
}(_react.Component);

(0, _reactDom.render)(_react2.default.createElement(Demo, null), document.getElementById('app'));