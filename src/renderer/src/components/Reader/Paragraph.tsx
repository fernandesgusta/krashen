import React, { useEffect, useState } from 'react'

import Sentence from './Sentence'
import SelectionMenu from './SelectionMenu'

export interface ParagraphProps {
  contents: string
}

const Paragraph: React.FC<ParagraphProps> = ({ contents }) => {
  const [tokenizedContents, setTokenizedContents] = useState([])

  useEffect(() => {
    handleTokenizeContents()
  }, [])

  async function handleTokenizeContents() {
    const results: string[] = await window.electron.ipcRenderer.invoke(
      'sentenceTokenizer',
      contents
    )

    setTokenizedContents(results)
  }

  return (
    <div className="max-w-[700px] text-2xl">
      {tokenizedContents.map((phrase, idx) => (
        <Sentence contents={phrase} key={idx} />
      ))}
    </div>
  )
}

export default Paragraph
