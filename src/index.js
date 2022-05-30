import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from './App';
import VideoUpload from './components/VideoUpload';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/upload" component={VideoUpload} />
      </Switch>
    </Router>,
  </React.StrictMode>
);

