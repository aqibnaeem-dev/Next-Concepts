import React from 'react'
import Link from 'next/link'
import ClientComponent from './users/page'
import ServerComponent from './server/getUsers'

/**
 * 
 * This is the main Server Component
 */

const Home = async () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-4xl">HomePage</h1>

            <ClientComponent>
                <ServerComponent />
            </ClientComponent>

            <Link href="/users">Goto Users Page</Link>
        </main>
    )
}

export default Home
