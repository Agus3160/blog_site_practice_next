export default async function getUserData(userId){
    const res = await fetch(`https://dummyjson.com/users/${userId}`)
    if(!res.ok) return undefined
    return res.json()
}