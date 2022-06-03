import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import App from './components/App/App';
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

