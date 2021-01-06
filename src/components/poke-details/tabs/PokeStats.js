import React from 'react'

const PokeStats = ({ stats }) => (
  <div className="poke-stats">
    {stats.map((stat, index) => (
      <React.Fragment key={index}>
        <p>{stat.stat.name}</p>
        <p>{stat.base_stat}</p>
      </React.Fragment>
    ))}
  </div>
)

export default PokeStats
