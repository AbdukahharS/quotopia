'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import Form from '@components/Form'

const CreateQuote = () => {
  const router = useRouter()
  const { data: session } = useSession()

  const [submitting, setIsSubmitting] = useState(false)
  const [post, setPost] = useState({ quote: '', tag: '', source: '' })

  const createQuote = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/quote/new', {
        method: 'POST',
        body: JSON.stringify({
          quote: post.quote,
          userId: session?.user.id,
          tag: post.tag,
          source: post.source,
        }),
      })

      if (response.ok) {
        router.push('/')
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form
      type='Create'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createQuote}
    />
  )
}

export default CreateQuote
