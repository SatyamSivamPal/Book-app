import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleBook = () => {
  const {_id, bookTitle, imageURL} = useLoaderData();
  return (
    <div>{bookTitle}</div>
  )
}

export default SingleBook