import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Markdown } from 'react-showdown'
import fetch from 'unfetch'
import './Content.css'

import editRef from '../functions/editRef'
import rawRef from '../functions/rawRef'

const Content = props => {
  const [isLoading, setLoading] = useState(true)
  const [pageData, setPageData] = useState('')
  const params = useParams()
  const batchURI = '/' + (params.page || 'index') + '.md'

  useEffect(() => {
    fetch(rawRef + batchURI)
      .then(buffer => buffer.text())
      .then(markdown => {
        setPageData(markdown)
        setLoading(false)
      })
  }, [params.page])

  if (isLoading) {
    return null
  }

  return (
    <div className='ui container'>
      <div className='ui basic segment'>
        <Markdown markup={pageData} />
      </div>
      {
        batchURI === '/index.md' ? (
          <div className='ui four column stackable grid container'>
            <div className='column'>
              <div className='ui segment category'>
                <i className='red huge icon bullhorn'/>
                <h1 className='ui header'>
                    공지사항
                </h1>
                <div className='sub header'>들어보세요. 언제나 신기한 일은 가득하답니다.</div>

              </div>
            </div>
            <div className='column'>
              <div className='ui segment category'>
                <img src='./wonderbot.png' style={{ width: '57.27px' }}/>
                <h1 className='ui header'>
                    원더봇
                </h1>
                <div className='sub header'>원더봇.. 요 녀석은 뭐가 어떻게 돌아가는거죠?</div>

              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className='ui divider' />
            <div className='ui center aligned basic segment'>
              <div className='ui header'>이 문서가 도움이 되셨나요?</div>
              <button className='ui inverted green button'><i className='green check icon'/>예</button>
              <button className='ui inverted red button'><i className='red close icon'/>아니요</button>
            </div>
          </div>
        )
      }
      <div className='ui divider' />
      <div className='ui center aligned basic segment'>
        <h3 className='ui header'>현재 페이지에 잘못된 항목이 있나요?</h3>
        <a className='ui small secondary button' href={editRef + batchURI} >
          현재 페이지 수정하기
          <i className='right arrow icon' />
        </a>
      </div>
      <div className='ui basic segment'>
        <p>
          Copyright 2020 Seia-Soto. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Content
