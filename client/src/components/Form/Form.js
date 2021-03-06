import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';
import './styles.css';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    title: '',
    creator: '',
    message: '',
    tagString: '',
    selectedFile: '',
  });
  const dispatch = useDispatch();
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );

  useEffect(() => {
    if (post) {
      setPostData({ ...post, tagString: post.tags.join(',') });
    }
  }, [post]);

  const { title, creator, message, tagString } = postData;

  const handleInputChange = (name) => (event) => {
    const value = event.target.value;
    setPostData({ ...postData, [name]: value });
  };

  const imageToString = (event) => {
    const file = event.target.files[0];
    console.log(file);
    const reader = new FileReader();
    reader.onloadend = function () {
      setPostData({ ...postData, selectedFile: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({
      ...postData,
      title: '',
      creator: '',
      message: '',
      tagString: '',
      selectedFile: '',
    });
  };
  return (
    <form autoComplete="off" className="form" onSubmit={handleOnSubmit}>
      <h4 className="title">{currentId ? 'Editing' : 'Creating'} a memory</h4>
      <div className="ip-group">
        <input
          value={creator}
          onChange={handleInputChange('creator')}
          type="text"
          placeholder=" "
          id="creator"
          className="ip"
        />
        <label className="ip-label" htmlFor="creator">
          Creator
        </label>
      </div>
      <div className="ip-group">
        <input
          value={title}
          onChange={handleInputChange('title')}
          type="text"
          placeholder=" "
          id="title"
          className="ip"
        />
        <label className="ip-label" htmlFor="title">
          Title
        </label>
      </div>
      <div className="ip-group">
        <textarea
          value={message}
          id="message"
          className="ip text-area"
          onChange={handleInputChange('message')}
          placeholder=" "
          rows="5"
          cols="10"
          maxLength="200"
        ></textarea>
        <label className="ip-label" htmlFor="message">
          message
        </label>
      </div>
      <div className="ip-group">
        <input
          value={tagString}
          onChange={handleInputChange('tagString')}
          type="text"
          placeholder=" "
          id="tags"
          className="ip"
        />
        <label className="ip-label" htmlFor="tags">
          Tags
        </label>
      </div>
      <div className="ip-group">
        <input
          type="file"
          id="file"
          accept="image/*"
          className="ip-file"
          onChange={imageToString}
        />
        <label className="file-label" htmlFor="file">
          <i className="fas fa-2x fa-image"></i>
          <span>Photo</span>
        </label>
      </div>
      <div className="ip-btns">
        <button type="submit" className="submit">
          Post
        </button>
        <button type="button" className="clear" onClick={clear}>
          Clear
        </button>
      </div>
    </form>
  );
};

export default Form;
