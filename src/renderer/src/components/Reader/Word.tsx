import React, { HTMLAttributes } from 'react'

// import { Container } from './styles';

export interface WordProps extends HTMLAttributes<HTMLSpanElement> {}

const Word: React.FC<WordProps> = (props) => {
  return (
    <span
      {...props}
      className="select-text data-[bold='true']:font-bold border-solid border border-transparent rounded hover:border-[var(--palestar-100)]"
    />
  )
}

export default Word
