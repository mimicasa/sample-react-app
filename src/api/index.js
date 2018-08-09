import connector from './connector'
import { normalize } from 'normalizr'

const API_ROOT = 'https://jsonplaceholder.typicode.com'

import { schema } from 'normalizr'

const postSchema = new schema.Entity('posts');
const postListSchema = new schema.Array(postSchema);


// Post
export const getPosts = async () => {
  const payload = await connector.request(`${API_ROOT}/posts`)
  
  return normalize(payload, postListSchema)
}