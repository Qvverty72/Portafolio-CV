import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID

    if (!formspreeId) {
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (response.ok) {
      return NextResponse.json(
        { message: 'Email sent successfully!' },
        { status: 200 }
      )
    } else {
      return NextResponse.json(
        { error: 'Error sending email' },
        { status: 500 }
      )
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'Connection error' },
      { status: 500 }
    )
  }
}
