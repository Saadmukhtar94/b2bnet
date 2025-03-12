import React from 'react'
import Link from 'next/link'
export default function samplenavbar() {
  return (
    <div>
          <div>
      <nav className="d-flex flex-column justify-content-center align-items-center flex-wrap px-2">
        <h1>Testing Navbar</h1>
        <ul className="d-flex  justify-content-center align-items-center gap-2 text-decoration-none list-unstyled flex-wrap">
        <li><Link href="/" className="text-decoration-none text-dark fs-5 border border-2">Home</Link></li>
          <li><Link href="/add_business" className="text-decoration-none text-dark fs-5 border border-2">add-business</Link></li>
          <li><Link href="/business_detail" className="text-decoration-none text-dark fs-5 border border-2">business-detail</Link></li>

          <li><Link href="/chat" className="text-decoration-none text-dark fs-5 border border-2">Chat</Link></li>
          <li><Link href="/create_event" className="text-decoration-none text-dark fs-5 border border-2">create_event</Link></li>

          <li><Link href="/directory" className="text-decoration-none text-dark fs-5 border border-2">directory</Link></li>
          <li><Link href="/edit_profile" className="text-decoration-none text-dark fs-5 border border-2">edit-profile</Link></li>
          <li><Link href="/favorite_businesses" className="text-decoration-none text-dark fs-5 border border-2">favorite-businesses</Link></li>
          <li><Link href="/feedback" className="text-decoration-none text-dark fs-5 border border-2">feedback</Link></li>
          <li><Link href="/forgot_password" className="text-decoration-none text-dark fs-5 border border-2">forgot-password</Link></li>
          <li><Link href="/login" className="text-decoration-none text-dark fs-5 border border-2">login</Link></li>
          <li><Link href="/register" className="text-decoration-none text-dark fs-5 border border-2">register</Link></li>
        </ul>
      </nav>
    </div>
    </div>
  )
}
