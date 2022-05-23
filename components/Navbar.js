import { TextInput } from '@mantine/core'
import Image from 'next/image'

import Search from '../public/search.svg';
import Panier from '../public/panier.svg';
import User from '../public/utilisateur.svg';

export function Navbar({ hasBackground }) {

  return (
    <div className={`navbar ${hasBackground ? "hasBackground" : ""}`} style={{"--bg-color": hasBackground}}>
      <a className="logo" href="/">
        <Image src="/space-travel.svg" width="512px" height="512px"/>
        <h2>Astronomics</h2>
      </a>
      <div className="searchbar">
        <TextInput placeholder="Planet, meteor, starship..." variant="filled" radius="xl" size="lg" icon={<Search className="search-icon"/>}/>
      </div>
      <div className="buttons">
        <div className="badge">
          <Panier/>
        </div>
        <User/>
      </div>
    </div>
  )
  
}

export function Footer() {

  return (
    <div className="footer">
      <div className="footer-logo">
        <div className="logo">
          <img src='/src/assets/space-travel.svg'/>
          <h2>Astronomics</h2>
        </div>
      </div>
      <div className="footer-text">
        <h5>Conditions of use</h5><h5>Conditions of sale</h5><h5>Privacy policy</h5><h5>Cookies</h5><h5>© 2014-2022, Astronomics.com, Inc. or its affiliates</h5>
      </div>
    </div>
  )
}