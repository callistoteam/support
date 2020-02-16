import React, { useState, useEffect } from 'react'
import { Markdown } from 'react-showdown'
import fetch from 'unfetch'

import { createRawRef } from '../functions'

const Main = props => {
  const baseuri = createRawRef()
  const [isLoading, setLoading] = useState(true)
  const [pageData, setPageData] = useState('')

  useEffect(() => {
    fetch(baseuri + '/index.md')
      .then(markdown => {
        setPageData(markdown)
        setLoading(true)
      })
  }, [])

  if (isLoading) {
    return null
  }

  return (
    <Markdown markup={pageData} />
  )
}

export default Main
