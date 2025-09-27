import { NextResponse } from 'next/server'

interface SubdomainRequestBody {
  subdomain: string
  projectSlug: string
}

const VERCEL_API_BASE = 'https://api.vercel.com'

export async function POST(request: Request) {
  const { subdomain, projectSlug }: SubdomainRequestBody = await request.json()

  if (!subdomain?.trim() || !projectSlug?.trim()) {
    return NextResponse.json(
      { error: 'Both subdomain and projectSlug are required.' },
      { status: 400 }
    )
  }

  const token = process.env.VERCEL_TOKEN
  const teamId = process.env.VERCEL_TEAM_ID
  const baseDomain = process.env.BASE_DOMAIN ?? 'url1234.com'

  if (!token) {
    return NextResponse.json(
      { error: 'VERCEL_TOKEN is not configured on the server.' },
      { status: 500 }
    )
  }

  if (!teamId) {
    return NextResponse.json(
      { error: 'VERCEL_TEAM_ID is not configured on the server.' },
      { status: 500 }
    )
  }

  const normalizedSubdomain = subdomain.trim().toLowerCase()
  const isFullDomain = normalizedSubdomain.includes('.')
  const fqdn = isFullDomain ? normalizedSubdomain : `${normalizedSubdomain}.${baseDomain}`

  try {
    const response = await fetch(
      `${VERCEL_API_BASE}/v9/projects/${encodeURIComponent(projectSlug.trim())}/domains?teamId=${encodeURIComponent(teamId)}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: fqdn })
      }
    )

    const payload = await response.json().catch(() => null)

    if (!response.ok) {
      const message = payload?.error?.message ?? payload?.message ?? 'Unknown Vercel API error.'
      return NextResponse.json(
        {
          error: message,
          status: response.status,
          details: payload ?? null
        },
        { status: response.status }
      )
    }

    return NextResponse.json(
      {
        message: 'Subdomain added to project successfully.',
        domain: fqdn,
        project: projectSlug.trim(),
        vercelResponse: payload
      },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      {
        error: 'Failed to communicate with Vercel API.',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 502 }
    )
  }
}
