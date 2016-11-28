import firebase, { firebaseRef, firebaseStorage } from '../../../firebase';
import * as actions from '../data/actions';
import store from '../../store';


// fetch About Me page content
export function fetchAboutMe() {
  firebaseRef.child('about').on('value', (snapshot) => {
    const aboutData = snapshot.val();
    store.dispatch(actions.setAboutPage(aboutData));
  });
}

export function updateAbout(newAbout) {
  firebaseRef.child('about').set(newAbout);
}

export function fetchPortfolio() {
  firebaseRef.child('portfolio').on('value', (snapshot) => {
    const portfolioData = snapshot.val();
    store.dispatch(actions.setPortfolioPage(portfolioData));
  });
}

export function updatePortfolio(portfolioData) {
  firebaseRef.child('portfolio').child('work').child(portfolioData.id).update({
    content: portfolioData.content,
    description: portfolioData.description,
    imgUrl: portfolioData.imgUrl,
    tech: portfolioData.tech,
  });
  store.dispatch(actions.updatePortfolio(portfolioData));
}

export function updatePortfolioHeader(header) {
  firebaseRef.child('portfolio').update({
    header,
  });
  store.dispatch(actions.updatePortfolioHeader(header));
}

export function addPortfolioItem(portfolioData) {
  firebaseRef.child('portfolio').child('work').push().set(portfolioData);
}

export function createPost(postData) {
  firebaseRef.child('blog').push().set(postData);
}

/* Function to sort array in ascending order */
export function sortArrayAscending(a, b) {
  return new Date(a.date).getTime() - new Date(b.date).getTime();
}

/* Function to sort array in descending order */
export function sortArrayDescending(b, a) {
  return new Date(a.date).getTime() - new Date(b.date).getTime();
}

// Function order events given a direction
export function orderPosts(posts, direction) {
  // Create an array of the returned events
  const postsList = posts;
  const postsArray = [];
  Object.keys(postsList).map((post) => { //eslint-disable-line
    postsList[post].id = post;
    postsArray.push(postsList[post]);
  });


  // Sort the events
  if (direction === 'ascending') {
    postsArray.sort(sortArrayAscending);
  } else {
    postsArray.sort(sortArrayDescending);
  }

  // Send the objects back into an object
  const postsObject = {};
  postsArray.map((post) => { //eslint-disable-line
    postsObject[post.id] = post;
  });

  return postsObject;
}

export function fetchBlogPosts() {
  firebaseRef.child('blog').on('value', (snapshot) => {
    const blogData = snapshot.val();
    const postsObject = orderPosts(blogData, 'descending');
    store.dispatch(actions.startFetchingBlogPost());

    store.dispatch(actions.fetchBlogPost(postsObject));
  });
}

export function fetchPost(id) {
  firebaseRef.child('blog').child(id).on('value', (snapshot) => {
    const postData = snapshot.val();
    postData.id = id;
    store.dispatch(actions.startFetchingBlogPost());
    store.dispatch(actions.fetchBlogPost(postData));
  });
}

// Send a message through the contact form
export function sendMessage(message) {
  firebaseRef.child('messages').push().set(message);
}

// update a messages status to read
export function changeStatusToRead(message) {
  firebaseRef.child('messages').child(message).update({
    read: 'read',
  });
}

// Get Messages
export function fetchMessages() {
  store.dispatch(actions.startFetchingMessages());
  firebaseRef.child('messages').orderByChild('date').on('value', (snapshot) => {
    const messages = snapshot.val() || {};
    store.dispatch(actions.fetchMessages(messages));
  });
}

export function login(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password).catch((err) => {
    if (err) {
      this.props.dispatch(actions.loginError());
    }
  }).then((success) => {
    if (success) {
      window.location = '#/edit';
    }
  });
}
