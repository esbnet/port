import { use } from 'react'


interface Post {
  id: number,
  title: string,
  body: string,
  userId: number,
  tags: [],
  reactions: number
}

interface Posts {
  posts: Post[],
  total: number,
  skip: 0.
  limit: 3
}

async function getPosts() {
  let posts = await fetch("https://dummyjson.com/posts?limit=9")
  return posts.json()
}

export default function Page() {

  let { posts } = use(getPosts())

  return (
    <div>
      <ul>
        {posts.map((post: Post) => (
          <li key={post.id}>{post.title}
            <p>{post.body}</p>
            <span>({post.tags})</span>
          </li>
        ))}
      </ul>
    </div>

  )
}