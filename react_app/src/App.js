"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Login_1 = __importDefault(require("./Login"));
const App = () => {
    const handleLogin = (email, password) => {
        console.log('ログインされたメールアドレス:', email, 'とパスワード:', password);
    };
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(Login_1.default, { onSubmit: handleLogin }) }));
};
exports.default = App;
