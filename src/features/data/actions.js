export const setAboutPage = aboutData => ({
  type: 'RECEIVED_ABOUT_PAGE',
  aboutData,
});

export const setPortfolioPage = (portfolioData) => {
  return function (dispatch) {
    dispatch({ type: 'START_FETCHING_DATA' });
    dispatch({
      type: 'RECEIVED_PORTFOLIO_DATA',
      portfolioData,
    });
  };
};

export const updatePortfolio = portfolioData => ({
  type: 'UPDATED_PORTFOLIO_ENTRY',
  portfolioData,
});

export const updatePortfolioHeader = header => ({
  type: 'UPDATED_PORTFOLIO_HEADER',
  header,
});


export const fetchBlogPost = postData => ({
  type: 'RECEIVED_BLOG_POST',
  postData,
});

export const startFetchingBlogPost = () => ({
  type: 'START_FETCHING_BLOG_POST',
});

export const fetchMessages = messageData => ({
  type: 'RECEIVED_MESSAGES',
  messageData,
});

export const startFetchingMessages = () => ({
  type: 'START_FETCHING_MESSAGES',
});


// Sign into firebase
export const loginError = () => ({
  type: 'LOGIN_ERROR',
});
