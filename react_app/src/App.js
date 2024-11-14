"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
require("./App.css");
var signup_1 = require("./accounts/signup");
var Login_1 = require("./accounts/Login");
var App = function () {
    var handleLogin = function (email, password) {
        console.log('ログインされたメールアドレス:', email, 'とパスワード:', password);
    };
    return (<div className="App">
      <react_router_dom_1.BrowserRouter basename='/'>
          <react_router_dom_1.Routes>
            <react_router_dom_1.Route path="/signup" element={<signup_1.default />}/>
            <react_router_dom_1.Route path="/login" element={<Login_1.default />}/>
          </react_router_dom_1.Routes>
        </react_router_dom_1.BrowserRouter>
    </div>);
};

export default App;