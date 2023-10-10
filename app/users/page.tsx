'use client'
import React, { useState } from 'react'
import submit from '../actions'

/**
 *
 * This is the Client Component
 */

export default function ClientComponent() {
    const [searchPost, setSearchPost] = useState('1')

    return (
        <main>
            <h1 className="text-4xl">Search for the specific post</h1>

            <form action={submit}>
                <input
                    name="PostID"
                    className="outline"
                    type="number"
                    value={searchPost}
                    onChange={(event) => setSearchPost(event.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            <br />
            <br />
        </main>
    )
}
