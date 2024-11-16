import React from 'react'

type SampleButtonProps = {
  label: string
  onClick: () => void
}

const SampleButton: React.FC<SampleButtonProps> = ({ label, onClick }) => {
  return (
    <button type="button" aria-label={label} onClick={onClick} style={{ padding: '10px 20px', fontSize: '16px' }}>
      {label}
    </button>
  )
}

export default SampleButton
