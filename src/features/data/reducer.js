import { combineReducers } from 'redux';

const data = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVED_ABOUT_PAGE':
      return {
        ...state,
        about: action.aboutData,
        loading: false,
      };
    case 'RECEIVED_PORTFOLIO_DATA':
      return {
        ...state,
        loading: false,
        portfolio: action.portfolioData,
      };
    case 'RECEIVED_BLOG_POST':
      return {
        ...state,
        loading: false,
        blog: {
          ...state.blog,
          ...action.postData,
        },
      };
    case 'START_FETCHING_BLOG_POST':
      return {
        ...state,
        loading: true,
      };
    case 'UPDATED_PORTFOLIO_ENTRY':
      return {
        ...state,
        portfolio: {
          ...state.portfolio,
          work: {
            ...state.portfolio.work,
            [action.portfolioData.id]: action.portfolioData,
          },
        },
      };
    case 'UPDATED_PORTFOLIO_HEADER':
      return {
        ...state,
        portfolio: {
          ...state.portfolio,
          header: action.header,
        },
      };
    case 'START_FETCHING_DATA':
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

const messages = (state = [], action) => {
  switch (action.type) {
    case 'START_FETCHING_MESSAGES':
      return {
        ...state,
        loading: true,
      };
    case 'RECEIVED_MESSAGES':
      return {
        ...state,
        loading: false,
        messages: action.messages,
      };
    default:
      return state;
  }
};

export default combineReducers({
  data,
  messages,
});
