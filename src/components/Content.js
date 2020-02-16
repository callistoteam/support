import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Markdown } from 'react-showdown'
import fetch from 'unfetch'

import editRef from '../functions/editRef'
import rawRef from '../functions/rawRef'

const Content = props => {
  const [isLoading, setLoading] = useState(true)
  const [pageData, setPageData] = useState('')
  const params = useParams()

  useEffect(() => {
    fetch(rawRef + '/' + (params.page || 'index') + '.md')
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
      <div className='ui center aligned basic segment'>
        <h3 className='ui header'>현재 페이지에 잘못된 항목이 있나요?</h3>
        <a className='ui small secondary button' href={editRef + '/index.md'} >
          현재 페이지 수정하기
          <i className='right arrow icon' />
        </a>
      </div>

      <div className='ui divider' />
      <div className='ui basic segment'>
        <p>
          Copyright 2020 Seia-Soto. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Content
