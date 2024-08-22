import React from 'react'
import Word from './Word'

export interface SentenceProps {
  contents: string
}

const Sentence: React.FC<SentenceProps> = ({ contents }) => {
  return contents.split(' ').map((word, idx) => (
    <>
      <Word key={idx}>{word}</Word>{' '}
    </>
  ))
}

export default Sentence
