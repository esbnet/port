import Link from 'next/link';

export default function NavBar() {
  return (
    <div className='flex justify-center items-center h-8 mt-4 gap-4 bg-slate-400 '>
      <Link href="/" className='hover:border-b-4 hover:border-orange-300'>Home</Link>
      <Link href="/about" className='hover:border-b-4 hover:border-orange-300'>About</Link>
      <Link href="/skills" className='hover:border-b-4 hover:border-orange-300'>Skills</Link>
      <Link href="/work" className='hover:border-b-4 hover:border-orange-300'>Work</Link>
      <Link href="/posts" className='hover:border-b-4 hover:border-orange-300'>Blog</Link>
      {/* <Link href="/dashboard/settings" className='hover:border-b-4 hover:border-orange-300'>Settings</Link> */}
    </div>
  )
}