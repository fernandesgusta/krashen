import React, { HTMLAttributes } from 'react'

// import { Container } from './styles';

const Container: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  return <div {...props} className="flex flex-col flex-1" />
}

export default Container
