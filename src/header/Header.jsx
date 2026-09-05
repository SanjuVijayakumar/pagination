import React from 'react'

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
              P
            </div>

            <div>
              <h1 className="text-xl font-bold text-gray-900">
                PostFlow
              </h1>
              <p className="text-xs text-gray-500 hidden sm:block">
                Explore & discover posts
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden sm:flex items-center gap-6">
            <a
              href="#"
              className="text-sm font-medium text-blue-600"
            >
              Home
            </a>

            <a
              href="#posts"
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition"
            >
              Posts
            </a>

            <a
              href="#about"
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition"
            >
              About
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

        </div>
      </div>
    </header>
  )
}

export default Header
