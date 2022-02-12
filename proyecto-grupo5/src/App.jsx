import React from 'react';
import './App.css';
import HeaderPagina from './componets/HeaderPagina';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MenuItems } from './data/MenuItems';

export function App() {
  return (
    <Router>
      <HeaderPagina />
      {MenuItems.map((item) => {
        return (
          <Route
            key={item.id}
            path={item.path}
            exact
            component={item.component}
          />
        );
      })}

    </Router>
  );
}
