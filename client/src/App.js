import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import TaskList from './components/TaskList';
import EditTask from './components/EditTask';
import './App.css';

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/' component={TaskList}/>
            <Route exact path='/task/:taskId' component={EditTask}/>
          </Switch>
        </Router>
      </Provider>
    </div>  
  );
}

export default App;