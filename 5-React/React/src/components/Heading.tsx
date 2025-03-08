import React, { ReactNode } from 'react'

const Heading = (props:{title: string, children:ReactNode}) => {
  return (
    <>
        <h1>{props.title}</h1>
        {props.children}
    </>
  )
}

export default Heading