import React, {Fragment} from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";

import Header from "./Component/Header/Header";
import ToDoList from "./Container/ToDoList/ToDoList";
import MovieBlock from "./Container/MovieBlock/MovieBlock";
import Personal from "./Container/Personal/Personal";

function App() {
  return (
    <Fragment>

      <div className='App'>
        <Header/>
        <Switch>
          <Route path='/' exact component={ToDoList}/>
          <Route path='/movie' exact component={MovieBlock}/>
          <Route path='/personal' exact component={Personal}/>
        </Switch>
      </div>
    </Fragment>
  );
}

export default App;
