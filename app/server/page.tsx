import React from 'react'
import ClientComponent from '../users/page'
import { cookies } from 'next/headers'

/**
 *
 * This is the Server Component
 */

const ServerComponent = async ({ searchParams }: any) => {
    const id = searchParams ? searchParams.postId : 1
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const posts = await res.json()
    const cookieStore = cookies()
    const myCookieValue = cookieStore.get('postId')
    console.log('Cookie is set here ,', myCookieValue)

    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-24">
            <ClientComponent />
            <h3 className="post-title font-semibold">{posts ? posts?.title : 'Loading'}</h3>
            <p className="post-body">{posts.body}</p>
        </div>
    )
}

export default ServerComponent
