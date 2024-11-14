import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import  SignUp  from './accounts/signup';
import Login from './accounts/Login';

const App: React.FC = () => {
  const handleLogin = (email: string, password: string) => {
    console.log('ログインされたメールアドレス:', email, 'とパスワード:', password);
  };

  return (
    <div className="App">
      <BrowserRouter basename='/'>
          <Routes>
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/login" element={<Login />}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
};

export default App;
