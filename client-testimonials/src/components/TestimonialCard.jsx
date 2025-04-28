import React from 'react'

const TestimonialCard = ({data}) => {
  return (
    <div>
      <h3>{data.Customer}</h3>
      <p>Review: {data.review}</p>
    </div>
  )
}

export default TestimonialCard

