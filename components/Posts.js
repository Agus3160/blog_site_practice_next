import Link from "next/link"

export default async function Posts(props) {

    const posts = await props.postsPromise

  return (
    <div className="mb-4">
        <h2 className="text-xl">Posts</h2>
        <hr className="mb-4"></hr>
        {
            posts.posts.map((p, index)=>{
                return(
                    <Link 
                        key={index}
                        href={`/post/${p.id}`}
                    >
                        <div className='p-2 mb-6 bg-slate-900 hover:bg-slate-800 rounded-md'>
                            <h2 className="p-1 text-lg">{p.title}</h2>
                            <p className="p-1 line-clamp-1">{p.body}</p>
                            <div className="flex flex-wrap w-full p-1">
                                {p.tags.map((t, index)=>{
                                    return(
                                        <span 
                                        className="rounded-md m-1 p-1 bg-red-700 text-white"
                                        key={index}>
                                            {t}
                                        </span>
                                    )
                                })}
                            </div>
                        </div>
                    </Link>
                )
            })
        }
    </div>
  )
}
