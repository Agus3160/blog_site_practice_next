import Posts from "@/components/Posts"
import Profile from "@/components/Profile"
import getUserData from "@/libs/getUserData"
import getUserPosts from "@/libs/getUserPosts"

export default async function Home() {
  
  let randomNumber = Math.round(Math.random() * 29 + 1)

  const userData = getUserData(randomNumber)
  const user = await userData
  
  const postData = getUserPosts(randomNumber) 

  return (
    <main className="flex min-h-screen flex-col items-center sm:px-16 px-6">
      <div className="max-w-5xl w-full items-center justify-between ">
        <Profile user={user} />
        <Posts postsPromise ={postData}/>
      </div>
    </main>
  )
}
