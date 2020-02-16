import React from 'react'
import { Link } from 'react-router-dom'

import sfe from '../sfe'

const Layout = props => {
  return (
    <>
      <div {...sfe.displayHeader}>
        <div className='ui container'>
          <div className='ui inverted secondary pointing menu'>
            <Link to='/'>
              <a className='active item'>
                Callisto Support
              </a>
            </Link>

            <a className='item' href='https://discord.gg/jE33mfD'>
              <i className='discord icon' />
              <span {...sfe.desktopOnly}>Discord</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
