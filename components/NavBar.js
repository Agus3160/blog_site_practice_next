import Link from "next/link"
import { SiGithub,  SiLinkedin } from "react-icons/si"

export default function NavBar() {
  return (
    <div className="flex items-center justify-between bg-slate-900 w-full p-4">
        <h1 className="text-xl">Blog Page</h1>
        <ul className="flex w-10 justify-between items-center">
            <Link className="hover:text-slate-300" href='#'>
                <SiGithub />
            </Link>
            <Link className="hover:text-slate-300" href='#'>
                <SiLinkedin />
            </Link>
        </ul>
    </div>
  )
}
