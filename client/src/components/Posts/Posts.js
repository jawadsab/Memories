import React from 'react';
import Post from './Post';
import './styles.css';

const Posts = ({ posts, setCurrentId }) => {
  return (
    <div className="posts">
      {posts &&
        posts.map((post, i) => {
          return (
            <Post key={post._id} post={post} setCurrentId={setCurrentId} />
          );
        })}
    </div>
  );
};

export default Posts;
