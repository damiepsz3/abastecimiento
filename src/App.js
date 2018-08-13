import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import config from "./config"

class App extends Component {
  componentDidMount() {
    console.log(process.env.API_KEY);
    // 1. Load the JavaScript client library.
    window.gapi.load("client", () => {
      // 2. Initialize the JavaScript client library.
      window.gapi.client.init({
        apiKey: config.apiKey,
        // Your API key will be automatically added to the Discovery Document URLs.
        discoveryDocs: config.discoveryDocs
      }).then(() => {
        // 3. Initialize and make the API request.
        this.load(this.onLoad);
      });
    });
  }

  load = (callback) => {
    window.gapi.client.load("sheets", "v4", () => {
      window.gapi.client.sheets.spreadsheets.values.get({spreadsheetId: config.spreadsheetId, range: "Sheet1!A1:A25"}).then(console.log);
    });
  }

  render() {
    return (<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit
        <code>src/App.js</code>
        and save to reload.
      </p>
    </div>);
  }
}

export default App;
