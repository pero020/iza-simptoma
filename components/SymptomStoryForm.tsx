'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'

interface SymptomStoryFormProps {
  title?: string
}

const SymptomStoryForm = ({ title = 'Podijelite svoju ideju za priču' }: SymptomStoryFormProps) => {
  const [form, setForm] = useState({
    email: '',
    name: '',
    story: '',
  })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        'service_ntm112m', // Your EmailJS service ID
        'template_0qof45f', // Your EmailJS template ID
        {
          from_name: form.name,
          from_email: 'admin@izasimptoma.com',
          reply_to: form.email,
          message: form.story,
          to_email: 'kontakt@izasimptoma.com'
        },
        'rsoilx5I8dtXde3C5' // Replace with your actual EmailJS public key
      )

      if (response.status === 200) {
        setSuccess(true)
        setForm({ email: '', name: '', story: '' })
      } else {
        throw new Error('Došlo je do greške pri slanju.')
      }
    } catch (error) {
      console.error('EmailJS error:', error)
      setError(error.message || 'Došlo je do greške pri slanju.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center">
      <div className="w-full rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
        <h3 className="text-2xl font-bold leading-8 tracking-tight">{title}</h3>
        
        {success ? (
          <div className="mt-4 rounded-md bg-green-100 p-4 text-green-700 dark:bg-green-900 dark:text-green-200">
            <p>Hvala na vašoj priči! Uspješno smo je zaprimili.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-4">
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-100">
                Ime
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
                placeholder="Vaše ime (može biti pseudonim)"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-100">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
                placeholder="vas@email.com"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="story" className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-100">
                Vaša priča o simptomu
              </label>
              <textarea
                id="story"
                name="story"
                required
                value={form.story}
                onChange={handleChange}
                rows={5}
                className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
                placeholder="Opišite svoj simptom i iskustvo..."
              />
            </div>
            
            {error && (
              <div className="mb-4 rounded-md bg-red-100 p-3 text-sm text-red-700 dark:bg-red-900 dark:text-red-200">
                {error}
              </div>
            )}
            
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-md bg-primary-500 px-4 py-2 font-medium text-white hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:ring-offset-gray-800 disabled:opacity-50"
            >
              {loading ? 'Šaljem...' : 'Pošalji'}
            </button>
            
            <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">
              Slanjem svoje priče pristajete da može biti uređena i objavljena na našoj stranici.
            </p>
          </form>
        )}
      </div>
    </div>
  )
}

export default SymptomStoryForm