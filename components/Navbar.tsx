import { useState } from 'react'
import Link from 'next/link'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { XIcon, MenuIcon } from "@heroicons/react/outline"
import Image from 'next/image'
// import logo from "../../images/logo.svg"
import { useRouter } from 'next/router'

const navigation = [
  {name: 'Home', link: '/', current: false},
  {name: 'About', link: '#about', current: false},
  {name: 'Skills', link: '#skills', current: false},
  {name: 'Projects', link: '#projects', current: false},
  {name: 'Resume', link: 'https://google.com', current: true},
]


export default function Navbar() {
  return (
    <>
      <p>Hello</p>
    </>
  )
}
