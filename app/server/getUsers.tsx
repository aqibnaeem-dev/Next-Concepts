import React from 'react'

/**
 * 
 * This is the Server Component
 */

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Get fake data from an API
async function loadPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/${2}");
  return res.json();
}

const ServerComponent = async () => {
  console.log("Server side post is rendered")
  const posts = await loadPosts();

  return (
    <div>
      {posts.map((post: Post) => (
        <div key={post.id} className="">
          <h3 className="post-title font-semibold">{post.title}</h3>
          <p className="post-body">{post.body}</p>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default ServerComponent
