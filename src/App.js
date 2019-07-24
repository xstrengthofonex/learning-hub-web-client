import React from 'react';
import './App.css';

import Register from "./views/Register";
import {Route, Switch} from "react-router-dom";

function App() {
  return (
      <div>
          <header>
              <div>
                  <h1>Learning Hub</h1>
              </div>
          </header>
          <main>
            <Switch>
                <Route path="/register" component={Register}/>
            </Switch>
        </main>
      </div>
  );
}

export default App;
