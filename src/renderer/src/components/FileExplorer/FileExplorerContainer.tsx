import React, { HTMLAttributes } from 'react'

export interface FileExplorerContainerProps extends HTMLAttributes<HTMLDivElement> {}

const FileExplorerContainer: React.FC<FileExplorerContainerProps> = (props) => {
  return (
    <div
      {...props}
      className="overflow-y-auto flex flex-col w-[300px] bg-[var(--palestar-150)] border-y-0 border-l-0 border-r-[var(--palestar-200)] border-solid border-r"
    />
  )
}

export default FileExplorerContainer
