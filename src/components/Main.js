import React from 'react'
import Cards from './Cards'

import sfe from '../sfe'
import './Input.css'

const Main = () => {
  return (
    <div {...sfe.Margin} >
      <div className='ui container'>
        <div className='ui aligned basic segment'>
          <h1 className='ui center aligned header' style={{ 'margin-top': '20px' }}>Callisto Support</h1>
          <div className='ui fluid action input'>
            <input type='text' placeholder='Search...'/>
            <div className='ui button'><i className='icon search'/>검색</div>
          </div>
        </div>
        <div className='ui center aligned basic segment'>
          <h1 className='ui header'>도움이 필요하신가요?</h1>
          <div className='sub header'>저희가 도와드리겠습니다!</div>
          <Cards/>

        </div>
      </div>
    </div>
  )
}

export default Main
