import React from 'react'
import {ReactNavbar} from "overlay-navbar"
import cover from "../../images/cover.png"
import {FaUserAlt} from "react-icons/fa"
const Header = () => {
  return (
     <ReactNavbar 
     navColor1 = "white"
     navColor2 = "hsl(219 , 48% , 8%)"
     burgerColor = "hsl(250 , 100% , 75%)"
     burgerColorhover = "hsl(250 , 100% , 75%)"
     nav2jsutifyContent = "space-around"
     nav3jsutifyContent = "space-around"
     logo = {cover}
     link1Text="Home"
     link2Text="About"
     link3Text="Projects"
     link4Text="Contact"
     link1Url="/"
     link2Url="/about"
     link3Url="/projects"
     link4Url="/contact"
     link1ColorHover = "white"
     link1Color = " hsl(250, 100% , 75%)"
     link1Size = "1.5em"
     link1Padding = "3vmax"
     profileIcon = {true}
     ProfileIconElement = {FaUserAlt}

     />
  )
}

export default Header
