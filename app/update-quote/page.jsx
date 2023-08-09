'use client'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import Form from '@components/Form'

const UpdateQuote = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const quoteId = searchParams.get('id')

  const [post, setPost] = useState({ quote: '', tag: '', source: '' })
  const [submitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const getQuoteDetails = async () => {
      const response = await fetch(`/api/quote/${quoteId}`)
      const data = await response.json()

      setPost({
        quote: data.quote,
        tag: data.tag,
        source: data.source,
      })
    }

    if (quoteId) getQuoteDetails()
  }, [quoteId])

  const updateQuote = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    if (!quoteId) return alert('Missing quoteId!')

    try {
      const response = await fetch(`/api/quote/${quoteId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          quote: post.quote,
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
      type='Edit'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updateQuote}
    />
  )
}

export default UpdateQuote
