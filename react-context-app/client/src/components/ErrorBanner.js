import React from 'react'

const ErrorBanner = ({ message }) => {
  let errorMessage = message || "에러 발생!"
  return (
    <div
      style={{ backgroundColor: 'red' }}
    >
      {errorMessage}
    </div>
  )
}

export default ErrorBanner
