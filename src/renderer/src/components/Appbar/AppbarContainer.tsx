import React from 'react'

export interface AppbarContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const AppbarContainer: React.FC<AppbarContainerProps> = (props) => {
  return (
    <div
      className="
      w-full
      shadow-sm
      h-[32px]
      border-x-0
      border-t-0
      border-b
      border-solid
      border-[var(--palestar-200)]
      bg-[var(--palestar-100)]"
    >
      <div {...props} className="appbar flex items-center pl-2 gap-2 h-full w-full"></div>
    </div>
  )
}

export default AppbarContainer
