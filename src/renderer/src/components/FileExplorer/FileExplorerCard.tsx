import React from 'react'

// import { Container } from './styles';

export interface FileExplorerCard {
  title: string
  preview: string
  date: string
  completion: number
  selected?: boolean
}

const FileExplorerCard: React.FC<FileExplorerCard> = ({
  title,
  preview,
  date,
  completion,
  selected
}) => {
  return (
    <div
      data-selected={selected}
      className="w-full flex flex-col hover:bg-[var(--palestar-100)] data-[selected='true']:bg-[var(--palestar-100)]"
    >
      <span className="p-2 font-medium truncate w-full  text-sm ">{title}</span>
      <span className="px-2 line-clamp-2 text-xs text-[var(--palestart-text-dimmed)]">
        {preview}
      </span>
      <div className="font-mono text-xs flex justify-between p-2">
        <span>{date}</span>
        <span className="font-bold">{completion}%</span>
      </div>
    </div>
  )
}

export default FileExplorerCard
