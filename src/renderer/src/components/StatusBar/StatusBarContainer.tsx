import React, { HTMLAttributes } from 'react'

export interface StatusBarContainerProps extends HTMLAttributes<HTMLDivElement> {}

const StatusBarContainer: React.FC<StatusBarContainerProps> = (props) => {
  return (
    <div
      {...props}
      className="flex gap-2 items-center bg-[var(--palestar-150)] px-2 w-full h-[32px] border-x-0 border-b-0 border border-t-[var(--palestar-200)] border-solid"
    />
  )
}

export default StatusBarContainer
