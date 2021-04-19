import React from 'react'
import { Image } from 'semantic-ui-react'
import './Home.css'
import image from '../Home/fitness.png';

const Home = () => (
  <div className="home">
    <Image src={image} fluid />
  </div>
  
)

export default Home

