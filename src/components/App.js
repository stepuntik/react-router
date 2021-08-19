import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import AboutPage from '../pages/About';
import ArticlesPage from '../pages/Articles';
import NotFoundPage from '../pages/NotFound';
import ArticlePage from '../pages/Article';
import Nav from './Nav';

const containerStyles = {
  maxWidth: 1170,
  marginLeft: 'auto',
  marginRight: 'auto',
  padding: 'padding: 0 16px',
};

const App = () => {
  return (
    <div style={containerStyles}>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/articles/:id" component={ArticlePage} />
        <Route path="/articles" component={ArticlesPage} />
        <Route path="/about" component={AboutPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default App;

// Не работает вложенный компонент в Articles.js
