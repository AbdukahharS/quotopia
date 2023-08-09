import { Schema, model, models } from 'mongoose'

const PostSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  quote: {
    type: String,
    required: [true, 'Quote is required.'],
  },
  tag: {
    type: String,
    required: [true, 'Tag is required.'],
  },
  source: {
    type: String,
    required: [true, 'Source is required.'],
  },
})

const Post = models.Post || model('Post', PostSchema)

export default Post
