import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="Enter a City"
              className="form-control"
            />
          </div>
          <div className="col-6">
            <input
              type="submit"
              value="search"
              className="btn btn-primary w-50"
            />
          </div>
        </div>
      </form>
      <h1>Minto</h1>
      <ul>
        <li>Saturday, 10:00pm</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="mostly cloudy"
              className="float-left"
            />

            <span className="temperature">12</span>
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 6%</li>
            <li>Humidity: 64%</li>
            <li>Wind: 14 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
