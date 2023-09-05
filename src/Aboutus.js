import React from 'react'
import './aboutus.css'
export default function Aboutus() {
  return (
    <div><div className='about'>
    <h1 className='design'>About us</h1>
    <p>Our aim is to Remove unemployement </p>
    </div>
    <div className='pic'>
        <img src='https://weu-sc102-prd-cdn-endpoint.azureedge.net/-/media/images/about-us/a-boy-playing-in-his-room-ai01-02-ph156118-ikea-l-198a883d/a-boy-playing-in-his-room-ai01-02-ph156118-ikea-l-198a883d-figure-image-desktop?rev=27c00ef451cc4fbbb045ed53b81be85b'  alt='logo' style={{width:1263,height:550}}/>
    </div>
    <div className='about'>
    <h2 className='design'>To offer a wide range of opportunities for applicants to be hired.</h2>
    <i>Built better business idea</i>
    {/* <p>One brand, many companies, and many, many people – that’s us in a nutshell. Spread all over the world, we have a passion for home furnishing and an inspiring shared vision: to create a better everyday life for the many people. This, together with our straightforward business idea, shared values, and a culture based on the spirit of togetherness, guides us in everything we do.</p> */}
    </div>
  
    <div className='cont'>
        <img src='https://weu-sc102-prd-cdn-endpoint.azureedge.net/-/media/images/about-us/woman-making-notes-ai01-px105983-ikea-97b12d3e/woman-making-notes-ai01-px105983-ikea-97b12d3e-figure-image-desktop?rev=12907e2bfb634fc88c95597b6e770225' alt='logo' style={{width:1263,height:550}}/>
    </div>
    <div className='about'>
    {/* <h2 className='design'>More than a retailer</h2> */}
    <p>Our value chain is about putting people first, and that starts by listening to people’s needs and dreams.</p>
    </div></div>
  )
}
