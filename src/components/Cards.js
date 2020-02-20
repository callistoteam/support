import React from 'react'
import { Link } from 'react-router-dom'

import './index.css'
import sfe from '../sfe'

const Cards = () => {
  return (
  // Will be deleted
    <div {...sfe.Margin}>
      <div className='ui four column stackable grid container'>

        <div className='column'>
          <Link to='/docs/notice/list'>
            <div className='ui segment category'>
              <i className='red huge icon bullhorn'/>
              <h1 className='ui header'>
            공지사항
              </h1>
              <div className='sub header'>들어보세요. 언제나 신기한 일은 가득하답니다.</div>
            </div>
          </Link>
        </div>
        <div className='column'>
          <Link to='/docs/wonderbot/list'>
            <div className='ui segment category'>
              <img src='./wonderbot.png' style={{ width: '57.27px' }}/>
              <h1 className='ui header'>
            원더봇
              </h1>
              <div className='sub header'>원더봇.. 요 녀석은 뭐가 어떻게 돌아가는거죠?</div>

            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Cards
