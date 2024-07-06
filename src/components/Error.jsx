import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
  let err=useRouteError();
  return (
    <div>
      {err?.error?.message}
    </div>
  )
}

export default Error
