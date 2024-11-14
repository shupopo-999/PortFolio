"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("./Login.css");
const Login = ({ onSubmit }) => {
    const [email, setEmail] = (0, react_1.useState)('');
    const [password, setPassword] = (0, react_1.useState)('');
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(email, password);
    };
    return ((0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit, children: [(0, jsx_runtime_1.jsx)("h1", { children: "\u30ED\u30B0\u30A4\u30F3" }), (0, jsx_runtime_1.jsxs)("label", { children: ["\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9", (0, jsx_runtime_1.jsx)("input", { type: "email", value: email, onChange: (e) => setEmail(e.target.value) })] }), (0, jsx_runtime_1.jsxs)("label", { children: ["\u30D1\u30B9\u30EF\u30FC\u30C9", (0, jsx_runtime_1.jsx)("input", { type: "password", value: password, onChange: (e) => setPassword(e.target.value) })] }), (0, jsx_runtime_1.jsx)("button", { type: "submit", children: "\u30ED\u30B0\u30A4\u30F3" })] }));
};
exports.default = Login;
