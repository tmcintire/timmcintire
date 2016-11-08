import React from 'react';

export const Home = () => (
  <div>
    <div className="mobile-site-header">
      <h3 className="text-center">I build web applications for people and organizations.</h3>
    </div>
    <h3 className="stack-header text-center">My stack: </h3>
    <div className="circle-container">
      <div id="javascript-border" className="circle">
        Javascript
      </div>
      <div id="react-border" className="circle">
        React
      </div>
      <div id="firebase-border" className="circle">
        Firebase
      </div>
      <div id="html-border" className="circle">
        HTML
      </div>
      <div id="css-border" className="circle">
        CSS
      </div>
    </div>
  </div>
);
