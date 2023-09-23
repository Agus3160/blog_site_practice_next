export default async function getUserPosts(userId){
    const res = await fetch(`https://dummyjson.com/users/${userId}/posts`)
    if(!res.ok) return undefined
    return res.json()
}