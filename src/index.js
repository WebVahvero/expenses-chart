import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/style.css';
import Header from './Header';
import Chart from './Chart';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Chart />
    <Footer />
  </React.StrictMode>
);