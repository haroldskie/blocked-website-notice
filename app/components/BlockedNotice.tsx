export default function BlockedNotice() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
      <div className="flex justify-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M12 8v4"/>
          <path d="M12 16h.01"/>
        </svg>
      </div>
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Access Blocked</h1>
      <p className="text-gray-600 mb-4">
        The website you are trying to access has been blocked by your home network admin.
      </p>
      <div className="bg-yellow-50 p-3 rounded-md mb-4">
        <p className="text-sm text-yellow-600">If you believe this is a mistake, please contact your system administrator.</p>
      </div>
      <button
        onClick={() => window.history.back()}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
      >
        Go Back
      </button>
    </div>
  )
}

