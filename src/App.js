import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">
          React PWA
        </h1>
        <div className="App-content">
        <p>A progressive web application (PWA) is a type of application software delivered through the web, built using common web technologies including HTML, CSS and JavaScript. It is intended to work on any platform that uses a standards-compliant browser, including both desktop and mobile devices.</p>
        <p>While web applications have been available for mobile devices from the start, they have generally been slower, have had fewer features, and have been less used than native apps. PWA features allow to close the gap to native applications and create similar user experiences.</p> <span>Features include:</span>
        <ul className="App-list">
        <li>Work offline</li>
        <li>High performance</li>
        <li>Background processing in service workers in a separate thread</li>
        <li>Access to the phone's sensors</li>
        <li>Support for push notifications</li>
        <li>An icon on the phone‘s home screen</li>
        </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
