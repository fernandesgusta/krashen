import { useLayoutManager } from '@renderer/contexts/LayoutManagerContext'
import React, { HTMLAttributes } from 'react'

export interface ContentContainerProps extends HTMLAttributes<HTMLDivElement> {
  // ref: RefObject<HTMLDivElement>
}
// import { Container } from './styles';

const ContentContainer: React.FC<ContentContainerProps> = (props) => {
  const { readerHtmlRef, setIsMousePressedOnReader } = useLayoutManager() // this component shouldn't use this...

  return (
    <div
      {...props}
      ref={readerHtmlRef}
      onMouseDown={() => {
        setIsMousePressedOnReader(true)
      }}
      onMouseUp={() => setIsMousePressedOnReader(false)}
      className="px-2 py-8 flex flex-col  h-full gap-6 items-center overflow-auto relative"
    />
  )
}

export default ContentContainer
