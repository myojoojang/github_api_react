import React from 'react'

const Footer = () => {

  const footerYear = new Date().getFullYear()
  return (
    <footer className='footer p-10 mt-10 bg-gray-800 text-primary-comtent footer-center'>
      <p>Copyright &copy; {footerYear}</p>

    </footer>
  )
}

export default Footer
