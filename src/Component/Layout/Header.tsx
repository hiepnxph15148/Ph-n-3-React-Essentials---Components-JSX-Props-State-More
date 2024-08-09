import React from 'react'

const reactDescriptons = ['Fundamentals','Crucials','Core']

function getRamdomInt(max){
    return Math.floor(Math.random() * (max+1));
}
const descriptino =reactDescriptons[getRamdomInt(2)]

function Header () {
    return(
         <header>
           <img src="/src/assets/react1.svg" alt="Stylized atom" />
           <h1>React Essentials</h1>
           <p>
             {descriptino} React concepts you will need for almost any app you are
             going to build!
           </p>
         </header>
         )
       }

export default Header