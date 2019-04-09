import mongoose, { Schema } from 'mongoose'

import { FRIENDS } from '../constants/models'

const FriendSchema = new Schema({
  _id: { type: Number, required: true },
  name: { type: String, required: true },
  nickname: { type: String, default: '' },
})

export default mongoose.model(FRIENDS, FriendSchema)