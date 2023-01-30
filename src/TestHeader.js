import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function TestHeader() {
  return (
    <>
    <div>TestHeader</div>
    <Link to="hometest"> Home Page </Link>
    <Link to = "aboutustest"> About us</Link>

    <hr/>
    <Outlet/>
    </>
  )
}
