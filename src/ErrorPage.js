import React from 'react'
import { useRouteError } from 'react-router-dom'


export default function ErrorPage() {
    const error = useRouteError();
  return (
    <div>
        <h1>Oops!</h1>
        <h2>{error.statusText||error.message}</h2>
    </div>
  )
}
