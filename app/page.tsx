import React from 'react'
import Link from 'next/link'

/**
 *
 * This is the main Server Component
 */

const Home = async () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-4xl">HomePage</h1>
            <Link href="/server">Goto Page</Link>
        </main>
    )
}

export default Home
