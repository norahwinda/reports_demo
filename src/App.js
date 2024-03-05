import React from 'react'
import './App.css';
import ScalePage from './ScalePage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ReportView from './ReportView';

function App() {
  return (
    <>
    <Router  basename="/reports_demo">
      <Routes>
      <Route
        exact
        path="/reportView"
        element={<ReportView />}
        />
        <Route
        exact
        path="/"
        element={<ScalePage />}
        />
      </Routes>
    </Router>
    </>
  );
}

export default App;
