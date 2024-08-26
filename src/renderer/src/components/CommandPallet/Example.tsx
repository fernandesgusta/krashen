import React from 'react'

export interface ExampleProps {
  translation: string
  example: string
}

const Example: React.FC<ExampleProps> = ({ example, translation }) => {
  return (
    <div className="flex flex-col p-2 hover:bg-[var(--palestar-100)] hover:cursor-pointer">
      <span className="font-medium">{example}</span>
      <span className="font-medium text-[var(--palestart-text-dimmed)]">{translation}</span>
    </div>
  )
}

export default Example
