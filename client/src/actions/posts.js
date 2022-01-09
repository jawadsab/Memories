import * as api from '../api';

export const getPosts = () => async (dispatch, getState) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({
      type: 'GET_POSTS',
      payload: data,
    });
  } catch (error) {
    console.log('eRROR', error.message);
  }
};

export const createPost = (post) => async (dispatch, getState) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: 'CREATE_POST', payload: data });
  } catch (error) {
    console.log('eRROR', error.message, error);
  }
};

export const updatePost = (_id, post) => async (dispatch) => {
  try {
    const { data } = await api.update(_id, post);
    dispatch({ type: 'UPDATE', payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (_id) => async (dispatch) => {
  try {
    await api.deletePost(_id);
    dispatch({ type: 'DELETE', payload: _id });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (_id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(_id);
    dispatch({ type: 'LIKE', payload: data });
  } catch (error) {
    console.log(error);
  }
};
