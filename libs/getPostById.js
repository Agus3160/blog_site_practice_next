export default async function getPostById(postId){
    const res = await fetch(`https://dummyjson.com/posts/${postId}`)
    if(!res.ok) return undefined
    return res.json()
}