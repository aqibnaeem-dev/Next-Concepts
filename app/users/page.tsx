'use client'
import React, { useState } from 'react'
import ServerComponent from '../server/getUsers'

/**
 *
 * This is the Client Component
 */

export default function ClientComponent({ children }: { children: React.ReactNode }) {
    const [buttonClicked, setButtonClicked] = useState(0)
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-4xl">Users List</h1>

            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setButtonClicked(+buttonClicked + 1)}
            >
                Click the Button!!
            </button>
            <p>{buttonClicked ? 'Button Active' : 'Button Inactive'}</p>
            <br /><br />
            <ServerComponent />

            {children}
        </main>
    )
}
