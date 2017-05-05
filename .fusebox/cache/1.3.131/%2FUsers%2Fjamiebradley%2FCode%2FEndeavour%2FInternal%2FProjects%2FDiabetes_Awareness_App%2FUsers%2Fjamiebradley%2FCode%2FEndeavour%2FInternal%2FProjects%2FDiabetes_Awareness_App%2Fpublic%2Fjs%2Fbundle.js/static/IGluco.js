module.exports = { contents: "'use strict';\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Login = require('./Containers/Login');\n\nvar _Login2 = _interopRequireDefault(_Login);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n/* Import Login Container */\n\n\nvar IGluco = function (_React$Component) {\n  _inherits(IGluco, _React$Component);\n\n  function IGluco() {\n    _classCallCheck(this, IGluco);\n\n    return _possibleConstructorReturn(this, (IGluco.__proto__ || Object.getPrototypeOf(IGluco)).apply(this, arguments));\n  }\n\n  _createClass(IGluco, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement('div', null);\n    }\n  }]);\n\n  return IGluco;\n}(_react2.default.Component);\n\nmodule.exports = IGluco;",
dependencies: ["react","./Containers/Login"],
sourceMap: "{\"version\":3,\"sources\":[\"IGluco.js\"],\"names\":[\"IGluco\",\"Component\",\"module\",\"exports\"],\"mappings\":\";;;;AAAA;;;;AAGA;;;;;;;;;;;;AADA;;;IAGMA,M;;;;;;;;;;;6BACK;AACP,aACE,0CADF;AAKD;;;;EAPkB,gBAAMC,S;;AAU3BC,OAAOC,OAAP,GAAiBH,MAAjB\",\"file\":\"IGluco.js\",\"sourcesContent\":[\"import React from 'react'\\n\\n/* Import Login Container */\\nimport Login from './Containers/Login'\\n\\nclass IGluco extends React.Component {\\n  render() {\\n    return (\\n      <div>\\n        {/*<Login />*/}\\n      </div>\\n    )\\n  }\\n}\\n\\nmodule.exports = IGluco\\n\"]}",
headerContent: undefined,
mtime: 1493669033000
};