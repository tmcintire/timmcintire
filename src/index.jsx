import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import firebase from '../firebase';
import app from './features/app';
import * as api from './features/data/api';

api.fetchAboutMe();
api.fetchPortfolio();
api.fetchBlogPosts();

const requireLogin = (nextState, replace, next) => {
  if (!firebase.auth().currentUser) {
    replace('/login');
  }
  next();
};

const redirectIfLoggedIn = (nextState, replace, next) => {
  if (firebase.auth().currentUser) {
    replace('/edit');
  }
  next();
};

const {
  App,
  Home,
  About,
  Login,
  Edit,
  Work,
  Contact,
  Blog,
  PostDetails,
  CreatePost,
  EditAbout,
  EditPortfolio,
  EditPortfolioEntry,
  EditPortfolioHeader,
  AddPortfolioItem,
  Messages } = app.components;

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/about" component={About} />
        <Route path="/work" component={Work} />
        <Route path="/contact" component={Contact} />
        <Route path="/messages" component={Messages} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:id" component={PostDetails} />
        <Route path="/login" component={Login} onEnter={redirectIfLoggedIn} />
        <Route path="/edit" component={Edit} onEnter={requireLogin} />
        <Route path="/edit/about" component={EditAbout} onEnter={requireLogin} />
        <Route path="/edit/portfolio" component={EditPortfolio} onEnter={requireLogin} />
        <Route path="/edit/portfolio/header" component={EditPortfolioHeader} onEnter={requireLogin} />
        <Route path="/edit/portfolio/add" component={AddPortfolioItem} onEnter={requireLogin} />
        <Route path="/edit/portfolio/:id" component={EditPortfolioEntry} onEnter={requireLogin} />
        <Route path="/createpost" component={CreatePost} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
