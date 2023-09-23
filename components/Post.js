import { FcLike } from 'react-icons/fc'
import Link from 'next/link'

export default async function Post(props) {
  
  const post = await props.postPromise 

  return (
    <div className='flex min-h-screen flex-col items-center justify-evenly sm:px-16 px-6'>
        <div>
            <h1 className='text-xl p-3'>{post.title}</h1>
            <p className='text-md pb-3'>{post.body}</p>
            <div className='flex justify-between items-center w-28'>
                <span>Reactions: </span>
                <div className='flex items-center'>  
                    <span>{post.reactions}</span>
                    <FcLike />
                </div>
            </div>
        </div>
        <Link className='hover:bg-slate-800 hover:text-slate-300 bg-slate-900 p-3 rounded-xl' href='/'>Return</Link>
    </div>
  )
}
