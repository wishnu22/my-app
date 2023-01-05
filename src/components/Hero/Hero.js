import React from 'react'
import "./Heroin.css"
function Hero() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-2 arrow'></div>
            <div className='col-md-8'>
           <span className='arrow'>{`<`} </span> 
        <img src={require("../../Images/heroin.jpg")} alt="heroinlogo" className='img-fluid heroin'/>
        <span className='arrow'>{`>`} </span> 
        </div>
        <div className='col-md-2'></div>
        </div>
        <div className='row mt-5'>
            <div className='col-md-1 descri'>
            Zelgry is one of the largest international fashion brands known for its trendy 
fashion wear. Founded a group of indian guys in the year 1994, the italian brand has established itself 
as a premium luxury brand that offers cutting-edge styles for men, women and kids.

            </div>
            <div className='col-md-10'>
           
        <img src={require("../../Images/hero.jpg")} alt="heroinlogo" className='img-fluid heroin'/>
        
        </div>
        <div className='col-md-1 descri'>The men’s collection includes jackets & coats, trousers, sweatshirts, footwear, 
& more fashion accessories. The women can shop for coats, jackets, blazers, jumpsuits, 
shirts & tops, trousers & jeans, skirts & shorts, shoes & bags. Delivering an extensive 
range of latest fashion trends, Zelgry specializes in fashion accessories, swimwear,
 luxury beauty products and perfumes.</div>
        </div>
    </div>
  )
}

export default Hero