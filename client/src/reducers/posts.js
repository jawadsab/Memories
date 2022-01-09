const postReducer = (posts = [], action) => {
  switch (action.type) {
    case 'DELETE':
      return posts.filter((post) => post._id !== action.payload);
    case 'UPDATE':
    case 'LIKE':
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case 'GET_POSTS':
      return action.payload;
    case 'CREATE_POST':
      return [...posts, action.payload];
    default:
      return posts;
  }
};

export default postReducer;
