import React from 'react'
import { Link } from 'react-router-dom'

import sfe from '../sfe'

const Header = props => {
  return (
    <>
      <div {...sfe.displayHeader}>
        <div className='ui container'>
          <div className='ui inverted secondary pointing menu'>
            <Link to='/'>
              <a className='active item'>
                Callisto 서포트
              </a>
            </Link>

            <a className='item' href='https://discord.gg/jE33mfD'>
              <i className='discord icon' />
              <span {...sfe.desktopOnly}>디스코드</span>
            </a>

            <div className='right menu'>
              <Link to='/categories'>
                <a className='item'>
                  <i className='bars icon' />
                  <span {...sfe.desktopOnly}>카테고리</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
