import React from 'react'

function Counter({title,tit,...obje}) {
  return (
    <div>
        <h1>{title}{tit}Counter:{obje.count}</h1>
    </div>
  )
}

export default Counter