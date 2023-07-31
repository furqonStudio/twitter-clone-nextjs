import React from 'react'
import RecomendationList from './RecomendationList'

const Recomendation = () => {
  return (
    <div>
      <p className="mb-2">Friend Recomendation</p>
      <div className="space-y-4">
        <RecomendationList />
        <RecomendationList />
        <RecomendationList />
        <RecomendationList />
        <RecomendationList />
      </div>
    </div>
  )
}

export default Recomendation
