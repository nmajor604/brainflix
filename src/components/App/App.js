import Header from '../Header/Header';
import VideoUpload from '../VideoUpload';
import Main from '../Main';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends React.Component {
  
  render() {
    return (
      <BrowserRouter>
        <Header />

          <Switch>
            <Route path='/' exact component={Main} />
            <Route path='/upload' component={VideoUpload} />
            <Route path='/videos/:id' component={Main} />
          </Switch>
      
      </BrowserRouter>
    );
  }
}

export default App;
