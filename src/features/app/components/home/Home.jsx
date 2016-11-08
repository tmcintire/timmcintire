import React from 'react';

export const Home = () => (
  <div>
    <div className="mobile-site-header">
      <h3 className="text-center">Hello,</h3>
      <h3 className="text-center">I build awesome web applications.</h3>
      <h3 className="text-center">And I build them with: </h3>
    </div>
    <div className="circle-container">
      <div id="javascript-border" className="circle">
        Javascript
      </div>
      <div id="react-border" className="circle">
        React
      </div>
      <div id="django-border" className="circle">
        Django
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
