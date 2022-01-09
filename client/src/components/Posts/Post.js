import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../actions/posts';
import './styles.css';

import moment from 'moment';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  return (
    <div className="post">
      <div className="post-img">
        <img src={post.selectedFile} alt="..." className="img" />
        <div className="img-overlay">
          <div>
            <span className="post-creator">{post.creator}</span>
            <span className="post-createdAt">
              {moment(post.createdAt).fromNow()}
            </span>
          </div>
          <i className="fas fa-edit" onClick={() => setCurrentId(post._id)}></i>
        </div>
      </div>
      <div className="post-content">
        <p className="post-tags">{post.tags ? `#${post.tags.join('#')}` : ``}</p>
        <div className="content">
          <h2 className="post-title">{post.title}</h2>
          <p className="post-message">{post.message}</p>
        </div>
        <div className="post-footer">
          <button
            className="post-likes"
            onClick={() => dispatch(likePost(post._id))}
          >
            <i className="fas fa-thumbs-up"></i>LIKE{' '}
            <span className="like-count">{post.likeCount}</span>
          </button>
          <button
            className="post-delete"
            onClick={() => dispatch(deletePost(post._id))}
          >
            <i className="fas fa-trash"></i> DELETE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
