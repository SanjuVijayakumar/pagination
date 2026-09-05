const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold">
                P
              </div>

              <span className="text-xl font-bold text-white">
                PostFlow
              </span>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              A simple and modern way to browse posts with
              smooth and easy pagination.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>

            <div className="space-y-2">
              <a
                href="#"
                className="block text-sm hover:text-white transition"
              >
                Home
              </a>

              <a
                href="#posts"
                className="block text-sm hover:text-white transition"
              >
                Posts
              </a>

              <a
                href="#about"
                className="block text-sm hover:text-white transition"
              >
                About
              </a>
            </div>
          </div>

          {/* Project */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Project
            </h3>

            <p className="text-sm text-gray-400 leading-relaxed">
              Built with React and Tailwind CSS.
            </p>

            <div className="flex gap-3 mt-4">
              <span className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-400">
                React
              </span>

              <span className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-400">
                Tailwind
              </span>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} PostFlow. All rights reserved.
          </p>

          <p className="text-sm text-gray-500">
            Made with React ⚛️
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
