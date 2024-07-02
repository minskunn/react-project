import React from "react";
import Weather from "./Weather";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Oslo" />
        <footer>
          <p>
            This project was coded by &nbsp;
            <a
              href="https://github.com/minskunn"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              Minna K
            </a>{" "}
            and is open-sourced on
            <a
              href="https://github.com/minskunn/"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              &nbsp; GitHub
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
