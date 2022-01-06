import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
  try {
    const posts = await PostMessage.find();
    res.status(200).json({ posts });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;


  try {
    const tagString = post.tagString;
    const newPost = new PostMessage(post);
 
    tagString.split(",").forEach(tag => {
      newPost.tags.push(tag.trim());
    });
    await newPost.save();
    res.status(200).json({ post: newPost });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
