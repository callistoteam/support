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
    return (<div>
      <h1>It's Loading...</h1>
    </div>)
  }

  return (
    <div className='ui container'>
      <div className='ui basic segment'>
        <Markdown markup={pageData} />
      </div>
      <div>
        <div className='ui divider' />
        <div className='ui center aligned basic segment'>
          <div className='ui header'>이 문서가 도움이 되셨나요?</div>
          <button className='ui inverted green button'><i className='green check icon'/>예</button>
          <button className='ui inverted red button'><i className='red close icon'/>아니요</button>
        </div>
      </div>
      <div className='ui divider' />
      <div className='ui center aligned basic segment'>
        <h3 className='ui header'>현재 페이지에 잘못된 항목이 있나요?</h3>
        <a className='ui small secondary button' href={editRef + batchURI} >
          현재 페이지 수정하기
          <i className='right arrow icon' />
        </a>
      </div>
    </div>
  )
}

export default Content
