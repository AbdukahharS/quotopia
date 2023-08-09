import Post from '@models/post'
import { connectToDB } from '@utils/database'

export const POST = async (request) => {
  const { userId, quote, tag, source } = await request.json()

  try {
    await connectToDB()
    const newPost = new Post({ creator: userId, quote, tag, source })

    await newPost.save()
    return new Response(JSON.stringify(newPost), { status: 201 })
  } catch (error) {
    return new Response(error._message, { status: 400 })
  }
}
