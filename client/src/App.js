import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from './actions/posts';
import Form from './components/Form/Form';
import Navbar from './components/Navbar/Navbar';
import Posts from "./components/Posts/Posts";

import './index.css';

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <div className="app">
      <Navbar />
      <div className="grid-layout">
        <div className="item-left">
          <Form />
        </div>
        <div className="item-center">
          <Posts posts={data.posts} />
        </div>
      </div>
    </div>
  );
};

export default App;
