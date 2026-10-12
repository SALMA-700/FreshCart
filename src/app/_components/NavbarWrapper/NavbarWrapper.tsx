import React from 'react'
import Navbar from '../navbar/navbar'
import CartIcon from '../CartIcon/CartIcon'
import WishIcon from '../WishIcon/WishIcon'

export default function NavbarWrapper() {
  return (
    <>
    <Navbar cartIcon={<CartIcon/>} wishIcon={<WishIcon/>} />
    
    </>
  )
}
