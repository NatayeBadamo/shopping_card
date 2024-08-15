import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from "../App.jsx";
import Store from "../Store.jsx";
import About from "../About.jsx";
import Detail from "../Detail.jsx";

function RouteConfig() {
      return (
        <Router>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
            <Route path="/detail" element={<Detail />} />



            {/* Add more routes here */}
          </Routes>
        </Router>
      );
    }
    
    export default RouteConfig;