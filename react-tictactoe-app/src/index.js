import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 앱에서 성능 측정을 시작하려면 함수를 전달합니다.
// 결과를 기록합니다(예: ReportWebVitals(console.log))
// 또는 분석 엔드포인트로 보냅니다. 자세히 알아보기: https://bit.ly/CRA-vitals
reportWebVitals();

