import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Sydney" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.shecodes.io/graduates/102970-karen-felipe"
            target="_blank"
            rel="noopener noreferrer"
          >
            Karen Felipe
          </a>
          , is open-sourced on{" "}
          <a
            href="https://github.com/KengMagee/week5-homework-searchengine"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://leafy-shortbread-87afe4.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
