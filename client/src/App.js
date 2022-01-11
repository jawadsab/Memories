import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from './actions/posts';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';

import './index.css';

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <div className="app">
      <div className="grid-layout">
        <div className="item-left">
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </div>
        <div className="item-right">
          <Posts posts={data} setCurrentId={setCurrentId} />
        </div>
      </div>
    </div>
  );
};

export default App;
