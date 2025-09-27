'use client'

import { useState } from 'react'

interface ApiResponse {
  message?: string
  error?: string
  domain?: string
  project?: string
  status?: number
  details?: unknown
}

export default function AdminPage() {
  const [subdomain, setSubdomain] = useState('')
  const [projectSlug, setProjectSlug] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState<ApiResponse | null>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setResult(null)

    try {
      const response = await fetch('/api/subdomains', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ subdomain, projectSlug })
      })

      const payload: ApiResponse = await response.json().catch(() => ({
        error: 'Unexpected response from server.'
      }))

      setResult(payload)
    } catch (error) {
      setResult({
        error: error instanceof Error ? error.message : 'Unknown client error.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-100 py-16">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-xl p-8 space-y-8">
        <header>
          <h1 className="text-3xl font-bold text-slate-900">url1234.com Subdomain Admin</h1>
          <p className="mt-2 text-slate-600">
            Define a new subdomain and attach it to a Vercel project. Make sure the environment variables
            <code className="ml-1">VERCEL_TOKEN</code>, <code>VERCEL_TEAM_ID</code>, and <code>BASE_DOMAIN</code> are set on the server before using this tool.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700" htmlFor="subdomain">
              Subdomain
            </label>
            <input
              id="subdomain"
              type="text"
              value={subdomain}
              onChange={(event) => setSubdomain(event.target.value)}
              placeholder="e.g. homebuilderai or full-domain.example.com"
              className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 text-base focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700" htmlFor="projectSlug">
              Vercel Project Slug or ID
            </label>
            <input
              id="projectSlug"
              type="text"
              value={projectSlug}
              onChange={(event) => setProjectSlug(event.target.value)}
              placeholder="e.g. homebuilder-ai"
              className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 text-base focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
              required
            />
            <p className="mt-2 text-sm text-slate-500">
              Use the project name from the Vercel dashboard. Each future production deployment of that project will
              automatically bind to the subdomain once added.
            </p>
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-md bg-green-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:cursor-not-allowed disabled:bg-green-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting…' : 'Add Subdomain'}
          </button>
        </form>

        {result && (
          <section className="rounded-lg border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-lg font-semibold text-slate-800">Result</h2>
            {result.error ? (
              <div className="mt-2 text-sm text-red-600">
                <p><strong>Error:</strong> {result.error}</p>
                {result.status && <p>Status: {result.status}</p>}
              </div>
            ) : (
              <div className="mt-2 text-sm text-slate-700">
                <p>{result.message}</p>
                {result.domain && <p>Domain: {result.domain}</p>}
                {result.project && <p>Project: {result.project}</p>}
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  )
}
