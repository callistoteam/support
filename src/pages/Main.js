import React, { useState, useEffect } from 'react'
import { Markdown } from 'react-showdown'
import fetch from 'unfetch'

import sfe from '../sfe'

import rawRef from '../functions/rawRef'

const Main = props => {
  const [isLoading, setLoading] = useState(true)
  const [pageData, setPageData] = useState('')

  useEffect(() => {
    fetch(rawRef + '/index.md')
      .then(buffer => buffer.text())
      .then(markdown => {
        setPageData(markdown)
        setLoading(false)
      })
  }, [])

  if (isLoading) {
    return null
  }

  return (
    <div className='ui basic container segment'>
      <Markdown markup={pageData} />
    </div>
  )
}

export default Main
