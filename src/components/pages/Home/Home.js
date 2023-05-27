import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <div className='container'>
      <div className='search-form'>
        <h3>GitHub search User</h3>
        <form>
          <input type='text'/>
          <button>Search</button>
        </form>
      </div>
      <div className='search-results'>
       <div className='user'>
        <div className='image'>
        </div>
        <div className='user-info'>
        <h3>Name of the User</h3>
       <small>122w3ee3</small>
        </div>
        <div className='followers'>
          followers
        </div>
        <div className='stars'>
          stars
        </div>
        <a href=''>View profile</a>
       </div>
      </div>
    </div>
  )
}

export default Home