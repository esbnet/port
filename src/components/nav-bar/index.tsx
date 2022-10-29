import Link from 'next/link';

export default function NavBar() {
  return (
    <nav>
      <Link href="/">Home</Link>{'  '}
      <Link href="/posts">Posts</Link>{'  '}
      <Link href="/dashboard">Dashboard</Link>{'  '}
      <Link href="/dashboard/settings">Settings</Link>
    </nav>
  )
}