var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _React = React,
    Component = _React.Component;
var _ReactRedux = ReactRedux,
    connect = _ReactRedux.connect,
    Provider = _ReactRedux.Provider;
var _Redux = Redux,
    createStore = _Redux.createStore,
    combineReducers = _Redux.combineReducers;


var emojiIDs = ['\uD83D\uDE03', '\uD83D\uDE04', '\uD83D\uDE01', '\uD83D\uDE06', '\uD83D\uDE05', '\uD83D\uDE02', '\uD83E\uDD23', '\u263A\uFE0F', '\uD83D\uDE0A', '\uD83D\uDE07', '\uD83D\uDE42', '\uD83D\uDE43', '\uD83D\uDE09', '\uD83D\uDE0C', '\uD83D\uDE0D', '\uD83D\uDE18', '\uD83D\uDE17', '\uD83D\uDE19', '\uD83D\uDE1A', '\uD83D\uDE0B', '\uD83D\uDE1C', '\uD83D\uDE1D', '\uD83D\uDE1B', '\uD83E\uDD11', '\uD83E\uDD17', '\uD83E\uDD13', '\uD83D\uDE0E', '\uD83E\uDD21', '\uD83E\uDD20', '\uD83D\uDE0F', '\uD83D\uDE12', '\uD83D\uDE1E', '\uD83D\uDE14', '\uD83D\uDE1F', '\uD83D\uDE15', '\uD83D\uDE41', '\u2639\uFE0F', '\uD83D\uDE23', '\uD83D\uDE16', '\uD83D\uDE2B', '\uD83D\uDE29', '\uD83D\uDE24', '\uD83D\uDE20', '\uD83D\uDE21', '\uD83D\uDE36', '\uD83D\uDE10', '\uD83D\uDE11', '\uD83D\uDE2F', '\uD83D\uDE26', '\uD83D\uDE27', '\uD83D\uDE2E', '\uD83D\uDE32', '\uD83D\uDE35', '\uD83D\uDE33', '\uD83D\uDE31', '\uD83D\uDE28', '\uD83D\uDE30', '\uD83D\uDE22', '\uD83D\uDE25', '\uD83E\uDD24', '\uD83D\uDE2D', '\uD83D\uDE13', '\uD83D\uDE2A', '\uD83D\uDE34', '\uD83D\uDE44', '\uD83E\uDD14', '\uD83E\uDD25', '\uD83D\uDE2C', '\uD83E\uDD10', '\uD83E\uDD22', '\uD83E\uDD27', '\uD83D\uDE37', '\uD83E\uDD12', '\uD83E\uDD15', '\uD83D\uDE08', '\uD83D\uDC7F', '\uD83D\uDC79', '\uD83D\uDC7A', '\uD83D\uDCA9', '\uD83D\uDC7B', '\uD83D\uDC80', '\u2620\uFE0F', '\uD83D\uDC7D', '\uD83D\uDC7E', '\uD83E\uDD16', '\uD83C\uDF83', '\uD83D\uDE3A', '\uD83D\uDE38', '\uD83D\uDE39', '\uD83D\uDE3B', '\uD83D\uDE3C', '\uD83D\uDE3D', '\uD83D\uDE40', '\uD83D\uDE3F', '\uD83D\uDE3E', '\uD83D\uDC50', '\uD83D\uDE4C', '\uD83D\uDC4F', '\uD83D\uDE4F', '\uD83E\uDD1D', '\uD83D\uDC4D', '\uD83D\uDC4E', '\uD83D\uDC4A', '\u270A', '\uD83E\uDD1B', '\uD83E\uDD1C', '\uD83E\uDD1E', '\u270C\uFE0F', '\uD83E\uDD18', '\uD83D\uDC4C', '\uD83D\uDC48', '\uD83D\uDC49', '\uD83D\uDC46', '\uD83D\uDC47', '\u261D\uFE0F', '\u270B', '\uD83E\uDD1A', '\uD83D\uDD90', '\uD83D\uDD96', '\uD83D\uDC4B', '\uD83E\uDD19', '\uD83D\uDCAA', '\uD83D\uDD95', '\u270D\uFE0F', '\uD83E\uDD33', '\uD83D\uDC85', '\uD83D\uDC8D', '\uD83D\uDC84', '\uD83D\uDC8B', '\uD83D\uDC44', '\uD83D\uDC45', '\uD83D\uDC42', '\uD83D\uDC43', '\uD83D\uDC63', '\uD83D\uDC41', '\uD83D\uDC40', '\uD83D\uDDE3', '\uD83D\uDC64', '\uD83D\uDC65', '\uD83D\uDC76', '\uD83D\uDC66', '\uD83D\uDC67', '\uD83D\uDC68', '\uD83D\uDC69', '\uD83D\uDC71\u200D\u2640', '\uD83D\uDC71', '\uD83D\uDC74', '\uD83D\uDC75', '\uD83D\uDC72', '\uD83D\uDC73\u200D\u2640', '\uD83D\uDC73', '\uD83D\uDC6E\u200D\u2640', '\uD83D\uDC6E', '\uD83D\uDC77\u200D\u2640', '\uD83D\uDC77', '\uD83D\uDC82\u200D\u2640', '\uD83D\uDC82', '\uD83D\uDD75\uFE0F\u200D\u2640\uFE0F', '\uD83D\uDD75', '\uD83D\uDC69\u200D\u2695', '\uD83D\uDC68\u200D\u2695', '\uD83D\uDC69\u200D\uD83C\uDF3E', '\uD83D\uDC68\u200D\uD83C\uDF3E', '\uD83D\uDC69\u200D\uD83C\uDF73', '\uD83D\uDC68\u200D\uD83C\uDF73', '\uD83D\uDC69\u200D\uD83C\uDF93', '\uD83D\uDC68\u200D\uD83C\uDF93', '\uD83D\uDC69\u200D\uD83C\uDFA4', '\uD83D\uDC68\u200D\uD83C\uDFA4', '\uD83D\uDC69\u200D\uD83C\uDFEB', '\uD83D\uDC68\u200D\uD83C\uDFEB', '\uD83D\uDC69\u200D\uD83C\uDFED', '\uD83D\uDC68\u200D\uD83C\uDFED', '\uD83D\uDC69\u200D\uD83D\uDCBB', '\uD83D\uDC68\u200D\uD83D\uDCBB', '\uD83D\uDC69\u200D\uD83D\uDCBC', '\uD83D\uDC68\u200D\uD83D\uDCBC', '\uD83D\uDC69\u200D\uD83D\uDD27', '\uD83D\uDC68\u200D\uD83D\uDD27', '\uD83D\uDC69\u200D\uD83D\uDD2C', '\uD83D\uDC68\u200D\uD83D\uDD2C', '\uD83D\uDC69\u200D\uD83C\uDFA8', '\uD83D\uDC68\u200D\uD83C\uDFA8', '\uD83D\uDC69\u200D\uD83D\uDE92', '\uD83D\uDC68\u200D\uD83D\uDE92', '\uD83D\uDC69\u200D\u2708', '\uD83D\uDC68\u200D\u2708', '\uD83D\uDC69\u200D\uD83D\uDE80', '\uD83D\uDC68\u200D\uD83D\uDE80', '\uD83D\uDC69\u200D\u2696', '\uD83D\uDC68\u200D\u2696', '\uD83E\uDD36', '\uD83C\uDF85', '\uD83D\uDC78', '\uD83E\uDD34', '\uD83D\uDC70', '\uD83E\uDD35', '\uD83D\uDC7C', '\uD83E\uDD30', '\uD83D\uDE47\u200D\u2640', '\uD83D\uDE47', '\uD83D\uDC81', '\uD83D\uDC81\u200D\u2642', '\uD83D\uDE45', '\uD83D\uDE45\u200D\u2642', '\uD83D\uDE46', '\uD83D\uDE46\u200D\u2642', '\uD83D\uDE4B', '\uD83D\uDE4B\u200D\u2642', '\uD83E\uDD26\u200D\u2640', '\uD83E\uDD26\u200D\u2642', '\uD83E\uDD37\u200D\u2640', '\uD83E\uDD37\u200D\u2642', '\uD83D\uDE4E', '\uD83D\uDE4E\u200D\u2642', '\uD83D\uDE4D', '\uD83D\uDE4D\u200D\u2642', '\uD83D\uDC87', '\uD83D\uDC87\u200D\u2642', '\uD83D\uDC86', '\uD83D\uDC86\u200D\u2642', '\uD83D\uDD74', '\uD83D\uDC83', '\uD83D\uDD7A', '\uD83D\uDC6F', '\uD83D\uDC6F\u200D\u2642', '\uD83D\uDEB6\u200D\u2640', '\uD83D\uDEB6', '\uD83C\uDFC3\u200D\u2640', '\uD83C\uDFC3', '\uD83D\uDC6B', '\uD83D\uDC6D', '\uD83D\uDC6C', '\uD83D\uDC91', '\uD83D\uDC69\u200D\u2764\uFE0F\u200D\uD83D\uDC69', '\uD83D\uDC68\u200D\u2764\uFE0F\u200D\uD83D\uDC68', '\uD83D\uDC8F', '\uD83D\uDC69\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69', '\uD83D\uDC68\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68', '\uD83D\uDC6A', '\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67', '\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66', '\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66', '\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC67', '\uD83D\uDC69\u200D\uD83D\uDC69\u200D\uD83D\uDC66', '\uD83D\uDC69\u200D\uD83D\uDC69\u200D\uD83D\uDC67', '\uD83D\uDC69\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66', '\uD83D\uDC69\u200D\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66', '\uD83D\uDC69\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC67', '\uD83D\uDC68\u200D\uD83D\uDC68\u200D\uD83D\uDC66', '\uD83D\uDC68\u200D\uD83D\uDC68\u200D\uD83D\uDC67', '\uD83D\uDC68\u200D\uD83D\uDC68\u200D\uD83D\uDC67\u200D\uD83D\uDC66', '\uD83D\uDC68\u200D\uD83D\uDC68\u200D\uD83D\uDC66\u200D\uD83D\uDC66', '\uD83D\uDC68\u200D\uD83D\uDC68\u200D\uD83D\uDC67\u200D\uD83D\uDC67', '\uD83D\uDC69\u200D\uD83D\uDC66', '\uD83D\uDC69\u200D\uD83D\uDC67', '\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66', '\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66', '\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC67', '\uD83D\uDC68\u200D\uD83D\uDC66', '\uD83D\uDC68\u200D\uD83D\uDC67', '\uD83D\uDC68\u200D\uD83D\uDC67\u200D\uD83D\uDC66', '\uD83D\uDC68\u200D\uD83D\uDC66\u200D\uD83D\uDC66', '\uD83D\uDC68\u200D\uD83D\uDC67\u200D\uD83D\uDC67', '\uD83D\uDC5A', '\uD83D\uDC55', '\uD83D\uDC56', '\uD83D\uDC54', '\uD83D\uDC57', '\uD83D\uDC59', '\uD83D\uDC58', '\uD83D\uDC60', '\uD83D\uDC61', '\uD83D\uDC62', '\uD83D\uDC5E', '\uD83D\uDC5F', '\uD83D\uDC52', '\uD83C\uDFA9', '\uD83C\uDF93', '\uD83D\uDC51', '\u26D1', '\uD83C\uDF92', '\uD83D\uDC5D', '\uD83D\uDC5B', '\uD83D\uDC5C', '\uD83D\uDCBC', '\uD83D\uDC53', '\uD83D\uDD76', '\uD83C\uDF02', '\u2602\uFE0F', '\uD83D\uDC36', '\uD83D\uDC31', '\uD83D\uDC2D', '\uD83D\uDC39', '\uD83D\uDC30', '\uD83E\uDD8A', '\uD83D\uDC3B', '\uD83D\uDC3C', '\uD83D\uDC28', '\uD83D\uDC2F', '\uD83E\uDD81', '\uD83D\uDC2E', '\uD83D\uDC37', '\uD83D\uDC3D', '\uD83D\uDC38', '\uD83D\uDC35', '\uD83D\uDE48', '\uD83D\uDE49', '\uD83D\uDE4A', '\uD83D\uDC12', '\uD83D\uDC14', '\uD83D\uDC27', '\uD83D\uDC26', '\uD83D\uDC24', '\uD83D\uDC23', '\uD83D\uDC25', '\uD83E\uDD86', '\uD83E\uDD85', '\uD83E\uDD89', '\uD83E\uDD87', '\uD83D\uDC3A', '\uD83D\uDC17', '\uD83D\uDC34', '\uD83E\uDD84', '\uD83D\uDC1D', '\uD83D\uDC1B', '\uD83E\uDD8B', '\uD83D\uDC0C', '\uD83D\uDC1A', '\uD83D\uDC1E', '\uD83D\uDC1C', '\uD83D\uDD77', '\uD83D\uDD78', '\uD83D\uDC22', '\uD83D\uDC0D', '\uD83E\uDD8E', '\uD83E\uDD82', '\uD83E\uDD80', '\uD83E\uDD91', '\uD83D\uDC19', '\uD83E\uDD90', '\uD83D\uDC20', '\uD83D\uDC1F', '\uD83D\uDC21', '\uD83D\uDC2C', '\uD83E\uDD88', '\uD83D\uDC33', '\uD83D\uDC0B', '\uD83D\uDC0A', '\uD83D\uDC06', '\uD83D\uDC05', '\uD83D\uDC03', '\uD83D\uDC02', '\uD83D\uDC04', '\uD83E\uDD8C', '\uD83D\uDC2A', '\uD83D\uDC2B', '\uD83D\uDC18', '\uD83E\uDD8F', '\uD83E\uDD8D', '\uD83D\uDC0E', '\uD83D\uDC16', '\uD83D\uDC10', '\uD83D\uDC0F', '\uD83D\uDC11', '\uD83D\uDC15', '\uD83D\uDC29', '\uD83D\uDC08', '\uD83D\uDC13', '\uD83E\uDD83', '\uD83D\uDD4A', '\uD83D\uDC07', '\uD83D\uDC01', '\uD83D\uDC00', '\uD83D\uDC3F', '\uD83D\uDC3E', '\uD83D\uDC09', '\uD83D\uDC32', '\uD83C\uDF35', '\uD83C\uDF84', '\uD83C\uDF32', '\uD83C\uDF33', '\uD83C\uDF34', '\uD83C\uDF31', '\uD83C\uDF3F', '\u2618\uFE0F', '\uD83C\uDF40', '\uD83C\uDF8D', '\uD83C\uDF8B', '\uD83C\uDF43', '\uD83C\uDF42', '\uD83C\uDF41', '\uD83C\uDF44', '\uD83C\uDF3E', '\uD83D\uDC90', '\uD83C\uDF37', '\uD83C\uDF39', '\uD83E\uDD40', '\uD83C\uDF3B', '\uD83C\uDF3C', '\uD83C\uDF38', '\uD83C\uDF3A', '\uD83C\uDF0E', '\uD83C\uDF0D', '\uD83C\uDF0F', '\uD83C\uDF15', '\uD83C\uDF16', '\uD83C\uDF17', '\uD83C\uDF18', '\uD83C\uDF11', '\uD83C\uDF12', '\uD83C\uDF13', '\uD83C\uDF14', '\uD83C\uDF1A', '\uD83C\uDF1D', '\uD83C\uDF1E', '\uD83C\uDF1B', '\uD83C\uDF1C', '\uD83C\uDF19', '\uD83D\uDCAB', '\u2B50\uFE0F', '\uD83C\uDF1F', '\u2728', '\u26A1\uFE0F', '\uD83D\uDD25', '\uD83D\uDCA5', '\u2604', '\u2600\uFE0F', '\uD83C\uDF24', '\u26C5\uFE0F', '\uD83C\uDF25', '\uD83C\uDF26', '\uD83C\uDF08', '\u2601\uFE0F', '\uD83C\uDF27', '\u26C8', '\uD83C\uDF29', '\uD83C\uDF28', '\u2603\uFE0F', '\u26C4\uFE0F', '\u2744\uFE0F', '\uD83C\uDF2C', '\uD83D\uDCA8', '\uD83C\uDF2A', '\uD83C\uDF2B', '\uD83C\uDF0A', '\uD83D\uDCA7', '\uD83D\uDCA6', '\u2614\uFE0F', '\uD83C\uDF4F', '\uD83C\uDF4E', '\uD83C\uDF50', '\uD83C\uDF4A', '\uD83C\uDF4B', '\uD83C\uDF4C', '\uD83C\uDF49', '\uD83C\uDF47', '\uD83C\uDF53', '\uD83C\uDF48', '\uD83C\uDF52', '\uD83C\uDF51', '\uD83C\uDF4D', '\uD83E\uDD5D', '\uD83E\uDD51', '\uD83C\uDF45', '\uD83C\uDF46', '\uD83E\uDD52', '\uD83E\uDD55', '\uD83C\uDF3D', '\uD83C\uDF36', '\uD83E\uDD54', '\uD83C\uDF60', '\uD83C\uDF30', '\uD83E\uDD5C', '\uD83C\uDF6F', '\uD83E\uDD50', '\uD83C\uDF5E', '\uD83E\uDD56', '\uD83E\uDDC0', '\uD83E\uDD5A', '\uD83C\uDF73', '\uD83E\uDD53', '\uD83E\uDD5E', '\uD83C\uDF64', '\uD83C\uDF57', '\uD83C\uDF56', '\uD83C\uDF55', '\uD83C\uDF2D', '\uD83C\uDF54', '\uD83C\uDF5F', '\uD83E\uDD59', '\uD83C\uDF2E', '\uD83C\uDF2F', '\uD83E\uDD57', '\uD83E\uDD58', '\uD83C\uDF5D', '\uD83C\uDF5C', '\uD83C\uDF72', '\uD83C\uDF65', '\uD83C\uDF63', '\uD83C\uDF71', '\uD83C\uDF5B', '\uD83C\uDF5A', '\uD83C\uDF59', '\uD83C\uDF58', '\uD83C\uDF62', '\uD83C\uDF61', '\uD83C\uDF67', '\uD83C\uDF68', '\uD83C\uDF66', '\uD83C\uDF70', '\uD83C\uDF82', '\uD83C\uDF6E', '\uD83C\uDF6D', '\uD83C\uDF6C', '\uD83C\uDF6B', '\uD83C\uDF7F', '\uD83C\uDF69', '\uD83C\uDF6A', '\uD83E\uDD5B', '\uD83C\uDF7C', '\u2615\uFE0F', '\uD83C\uDF75', '\uD83C\uDF76', '\uD83C\uDF7A', '\uD83C\uDF7B', '\uD83E\uDD42', '\uD83C\uDF77', '\uD83E\uDD43', '\uD83C\uDF78', '\uD83C\uDF79', '\uD83C\uDF7E', '\uD83E\uDD44', '\uD83C\uDF74', '\uD83C\uDF7D', '\u26BD\uFE0F', '\uD83C\uDFC0', '\uD83C\uDFC8', '\u26BE\uFE0F', '\uD83C\uDFBE'];

var calcState = {
  value: "",
  btns: ["C", "1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", ".", "0", "/", "="],

  emojis: ["C", "🏀", "🐱", "🌴", "+", "🚘", "🍎", "🍔", "-", "🔥", "🌼", "🚀", "*", ".", "🌈", "/", "="]
};

var calcReducer = function calcReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : calcState;
  var action = arguments[1];

  switch (action.type) {
    case 'ADD_ELEM':
      return _extends({}, state, { value: state.value == 0 ? action.text : state.value + action.text });
    case 'CLEAR':
      return _extends({}, state, { value: 0 });
    case 'EQUAL':
      return _extends({}, state, { value: eval(action.value) });
    case 'RANDOMIZE':
      return _extends({}, state, { value: action.value });
    case 'TURN_OFF':
      return _extends({}, state, { value: "" });
    default:
      return state;
  }
};

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.toggleEmoji = function () {
      _this.setState({
        emojiMode: !_this.state.emojiMode
      });
      _this.props.clear();
    };

    _this.toggleOn = function () {

      _this.state.isOn ? _this.props.turnOff() : _this.props.clear();

      _this.setState({ isOn: !_this.state.isOn });

      console.log(_this.state.isOn);
    };

    _this.randomizeEmoji = function (min, max) {
      console.log(min, max);
      var math = Math.floor(Math.random() * (max - min + 1)) + min;
      console.log(math);
      var generatedEmoji = '' + emojiIDs[math];
      console.log(generatedEmoji);
      //dispatch emoji as a callback to the reducer?
      _this.props.randomize(generatedEmoji);
    };

    _this.state = {
      emojiMode: false,
      isOn: false
    };
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          value = _props.value,
          btns = _props.btns,
          emojis = _props.emojis,
          addElem = _props.addElem,
          clear = _props.clear,
          equal = _props.equal,
          randomize = _props.randomize;
      var emojiMode = this.state.emojiMode;

      return React.createElement(
        'div',
        { className: 'App' },
        React.createElement('div', { className: 'panel' }),
        React.createElement(
          'div',
          { className: 'input-container' },
          React.createElement('input', { type: 'text', value: value })
        ),
        React.createElement(
          'div',
          { className: 'buttons-container' },
          React.createElement(
            'button',
            { onClick: function onClick() {
                return _this2.toggleOn();
              }, id: 'on-button' },
            ' ON/OFF'
          ),
          React.createElement(
            'button',
            { onClick: function onClick() {
                return _this2.toggleEmoji();
              }, id: 'emoji-button' },
            ' EMOJIFY'
          ),
          !emojiMode && btns.map(function (item, key) {

            if (item == "C") {
              return React.createElement(
                'button',
                { onClick: clear.bind(_this2), key: key },
                item
              );
            } else if (item == "=") {
              return React.createElement(
                'button',
                { onClick: equal.bind(_this2, value), key: key },
                item
              );
            } else {
              return React.createElement(
                'button',
                { onClick: addElem.bind(_this2, item), key: key },
                item
              );
            }
          }),
          emojiMode && emojis.map(function (emoji, key) {
            if (emoji == "C") {
              return React.createElement(
                'button',
                { onClick: clear.bind(_this2), key: key },
                emoji
              );
            } else if (emoji == "=") {
              return React.createElement(
                'button',
                { onClick: function onClick() {
                    return _this2.randomizeEmoji(0, emojiIDs.length);
                  } },
                emoji
              );
            } else {
              return React.createElement(
                'button',
                { onClick: addElem.bind(_this2, emoji), key: key },
                emoji
              );
            }
          })
        )
      );
    }
  }]);

  return App;
}(Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    value: state.value,
    btns: state.btns,
    emojis: state.emojis
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addElem: function addElem(text) {
      dispatch({
        type: 'ADD_ELEM',
        text: text
      });
    },
    clear: function clear() {
      dispatch({
        type: 'CLEAR'
      });
    },
    equal: function equal(value) {
      dispatch({
        type: 'EQUAL',
        value: value
      });
    },
    randomize: function randomize(generatedEmoji) {
      dispatch({
        type: 'RANDOMIZE',
        value: generatedEmoji
      });
    },
    turnOff: function turnOff() {
      dispatch({
        type: 'TURN_OFF'
      });
    }
  };
};

var Calc = connect(mapStateToProps, mapDispatchToProps)(App);

var store = createStore(calcReducer);

ReactDOM.render(React.createElement(
  Provider,
  { store: store },
  React.createElement(Calc, null)
), document.getElementById('root'));