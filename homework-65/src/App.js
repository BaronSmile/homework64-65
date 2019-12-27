import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Layout from "./Component/Layout/Layout";
import Page from "./Component/Page/Page";
import AdminPage from "./Component/AdminPage/AdminPage";

function App() {
  return (
      <div className="App">
        <Layout>
          <Route path="/pages/home" exact  component={Page}/>
          <Route path="/pages/about" exact  component={Page}/>
          <Route path="/pages/contacts" exact component={Page}/>
          <Route path="/pages/catalog" exact component={Page}/>
          <Route path="/pages/admin" component={AdminPage}/>
        </Layout>
      </div>
  );
}

export default App;
