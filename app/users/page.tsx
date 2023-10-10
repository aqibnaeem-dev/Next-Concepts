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
        <div>
            <h1 className="text-4xl">Search for the specific post</h1>

            <br />
            <div className="flex justify-center align-center ">
                <form action={submit}>
                    <input
                        name="PostID"
                        className="shadow appearance-none border rounded  py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        value={searchPost}
                        onChange={(event) => setSearchPost(event.target.value)}
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded ml-5"
                    >
                        Submit
                    </button>
                </form>
            </div>
            <br />
            <br />
        </div>
    )
}
