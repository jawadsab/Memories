import React from 'react';
import './styles.css';

import moment from 'moment';

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="post-img">
        <img src={post.selectedFile} alt="..." className="img" />
        <div className="img-overlay">
          <div>
            <span className="post-creator">{post.creator}</span>
            <span className="post-createdAt">{moment(post.createdAt).fromNow()}</span>
          </div>
          <i className="fas fa-edit"></i>
        </div>
      </div>
      <div className="post-content">
        <div className="content">
          <h2 className="post-title">{post.title}</h2>
          <p className="post-message">{post.message}</p>
        </div>
        <div className="post-footer">
          <button className="post-likes">
            <i className="fas fa-thumbs-up"></i>LIKE <span className="like-count">9</span>
          </button>
          <button className="post-delete">
            <i class="fas fa-trash"></i> DELETE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
