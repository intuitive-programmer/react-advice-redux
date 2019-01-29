import React from 'react'

import { Link } from 'react-router-dom'

const Home = () => (
  <div className="home-page grid-container">
    <h3>Different versions of 'React Advice'</h3>
    <ul className="versions-list">
      <Link to='/simple-react'>
        <li>Simple React</li>
      </Link>
      <Link to='/react-with-redux'>
        <li>React with Redux</li>
      </Link>
    </ul>
  </div>
)

export default Home