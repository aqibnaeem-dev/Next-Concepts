'use server'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

export default async function submit(formData: FormData) {
    const postId = formData.get('PostID')
    if (postId) {
        cookies().set('postId', postId.toString())
    }
    redirect(`/server?postId=${postId}`)
}
