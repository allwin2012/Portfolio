import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Routes, Route as RouteV6 } from "react-router-dom";
import "./App.css"; // Make sure you have an App.css file for styling
import Home from "./components/Home";

class App extends Component {
  componentDidUpdate() {
    let header = document.querySelector("h1");
    let text = header.textContent.toLowerCase();
    let color;
    switch (text) {
      case 'about':
        color = "#16A085";
        break;
      case 'projects':
        color = "#E74C3C";
        break;
      case 'contacts':
        color = "#2980B9";
        break;
      default:
        color = "#F1C40F";
        break;
    }
    let root = document.querySelector(":root");
    root.style.setProperty("--color-home", color);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <nav className="Navbar">
            <h2>A-win</h2>
            <ul>
              <li>
                <Link to="/about">about</Link>
              </li>
              <li>
                <Link to="/projects">projects</Link>
              </li>
              <li>
                <Link to="/contacts">contacts</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <RouteV6 path="/" element={<Home/>} />
            <RouteV6 path="/about" element={<h1>About</h1>} />
            <RouteV6 path="/projects" element={<h1>Projects</h1>} />
            <RouteV6 path="/contacts" element={<h1>Contacts</h1>} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
