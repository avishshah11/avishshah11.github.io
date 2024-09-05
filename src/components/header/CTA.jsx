import React from 'react'
import Resume from '../../assets/Resume-Avish-Shah.pdf'

const CTA = () => {
  const handleDownload = () => {
    const blob = new Blob([Resume], {type: 'application/pdf'})

    const link = document.createElement('a')

    link.href = URL.createObjectURL(blob)

    link.download = "Resume"

    document.body.appendChild(link)

    link.click()

    document.body.removeChild(link)

  }
  return (
    <div className='cta'>
        <button onClick={handleDownload} className='btn btn-primary'>Resume</button>
        <a href="#contact" className="btn btn-primary">Let's Talk</a>
    </div>
  )
}

export default CTA