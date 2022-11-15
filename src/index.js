import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 라우팅 범위 설정
import { BrowserRouter } from 'react-router-dom';
// SEO 구현
import Meta from './pages/Main/Meta';
// 전역 스타일 정의
import Globalstyles from './Globalstyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Meta />
    <Globalstyles />
    <BrowserRouter><App /></BrowserRouter>
  </React.StrictMode>
);

