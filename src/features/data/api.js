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

export function fetchBlogPosts() {
  firebaseRef.child('blog').on('value', (snapshot) => {
    const blogData = snapshot.val();
    if (blogData) {
      Object.keys(blogData).forEach((post) => {
        firebaseRef.child('blog').child(post).on('value', (newSnapshot) => {
          const postData = newSnapshot.val();
          postData.id = post;
          store.dispatch(actions.startFetchingBlogPost());
          store.dispatch(actions.fetchBlogPost(postData));
        });
      });
    }
    // store.dispatch(actions.setPortfolioPage(portfolioData));
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

// Get Messages
export function fetchMessages() {
  firebaseRef.child('messages').on('value', (snapshot) => {
    const messages = snapshot.val();
    if (messages) {
      Object.keys(messages).forEach((message) => {
        firebaseRef.child('messages').child(message).on('value', (newSnapshot) => {
          const messageData = newSnapshot.val();
          messageData.id = message;
          store.dispatch(actions.startFetchingMessages());
          store.dispatch(actions.fetchMessages(messageData));
        });
      });
    }
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
