import Post from "@/components/Post"
import getPostById from "@/libs/getPostById"


export default async function PostPage({params: {postId}}) {
    const postData = getPostById(postId)

  return (
    <Post postPromise={postData} />
  )
}
