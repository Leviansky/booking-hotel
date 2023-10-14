import React, { useEffect, useState } from 'react'
import { Navbar, Carousels, Footer } from '../../components'

const CustomerPage = () => {
  const [name, setName] = useState('');
  useEffect(() => {
    setName(localStorage.getItem("name"))
  })
  return (
    <><Navbar isLogin={true}/><Carousels name={name}/><Footer /></>
  )
}

export default CustomerPage
