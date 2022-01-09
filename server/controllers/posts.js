import PostMessage from '../models/postMessage.js';
import mongoose from 'mongoose';

export const getPosts = async (req, res) => {
  try {
    const posts = await PostMessage.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;

  try {
    const tagString = post.tagString;
    const newPost = new PostMessage(post);

    tagString.split(',').forEach((tag) => {
      newPost.tags.push(tag.trim());
    });
    await newPost.save();
    res.status(200).json(newPost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    res.status(404).send('No post with that id');
  }

  const updatedPost = await PostMessage.findByIdAndUpdate(
    _id,
    { ...post, _id },
    { new: true }
  );
  return res.status(200).json(updatedPost);
};

export const deletePost = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    res.status(404).send('No post with that id');
  }

  await PostMessage.findByIdAndRemove(_id);

  return res.status(200).json({ message: 'Deleted' });
};

export const likePost = async (req, res) => {
  const { id: _id } = req.params;
  
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    res.status(404).send('No post with that id');
  }
  const post = await PostMessage.findById(_id);
  const updatedPost = await PostMessage.findByIdAndUpdate(
    _id,
    { likeCount: post.likeCount + 1 },
    { new: true }
  );
  return res.status(200).json(updatedPost);
};
