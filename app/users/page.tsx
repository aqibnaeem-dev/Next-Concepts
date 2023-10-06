'use client'
import React, { useState } from 'react'

/**
 *
 * This is the Client Component
 */

export default function ClientComponent({ children }: { children: React.ReactNode }) {
    const [buttonClicked, setButtonClicked] = useState(false)
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-4xl">Users List</h1>

            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setButtonClicked(!buttonClicked)}
            >
                Click the Button!!
            </button>
            <p>{buttonClicked ? 'Button Active' : 'Button Inactive'}</p>
            <br /><br />
            
            {children}
        </main>
    )
}
