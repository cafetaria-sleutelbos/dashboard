import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
//pages
import Home from "./views/Home";
import Items from "./views/Items";
import Statistics from "./views/Statistics";
//other
import Layout from "./containers/Layout";
import './index.css';
import reportWebVitals from './reportWebVitals';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/statistics' element={<Statistics />} />
          <Route path='/items' element={<Items />} />
        </Routes>
      </Layout>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
