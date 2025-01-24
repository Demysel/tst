import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Calendar from './components/Calendar';
import TaskList from './components/TaskList';
import Notes from './components/Notes';

function App() {
  const [token, setToken] = useState('');

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login setToken={setToken} />
          </Route>
          <Route path="/calendar">
            <Calendar token={token} />
          </Route>
          <Route path="/tasks">
            <TaskList token={token} />
          </Route>
          <Route path="/notes">
            <Notes token={token} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
