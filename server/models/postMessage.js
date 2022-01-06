import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: {
    type:String,
    required: true
  },
  message: String,
  creator: {
    type: String,
    required: true
  },
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model('PostMessage', postSchema);
export default PostMessage;
