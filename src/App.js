import React from "react";
// 라우팅 처리
import { NavLink, Routes, Route } from 'react-router-dom';
// 모든 페이지 공용 컴포넌트
import Header from "./common/Header";
import Footer from "./common/Footer";
import Navbar from "./common/Navbar";
// 페이지 -> import 대상 경로가 폴더명일 경우 해당 폴더의 index.js를 가져온다.
import Main from './pages/Main';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' exact={true} element={<Main />}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
