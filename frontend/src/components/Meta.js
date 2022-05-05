import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome To AgriGo',
  description: 'We sell the best Plants for cheap',
  keywords: 'PlANTS, buy PLANTS, cheap FERTILIZERS',
}

export default Meta
