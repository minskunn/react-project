import React from "react";
import Weather from "./Weather";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Singapore" />
        <footer>
          <p>
            This project was coded by
            <a
              href="https://github.com/minskunn"
              target="_blank"
              rel="noreferrer"
            >
              Minna K
            </a>{" "}
            and is
            <a
              href="https://github.com/minskunn/"
              target="_blank"
              rel="noreferrer"
            >
              is open-sourced on GitHub
            </a>
            and
            <a
              href="https://github.com/minskunn/"
              target="_blank"
              rel="noreferrer"
            >
              hosted on Netlify
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
