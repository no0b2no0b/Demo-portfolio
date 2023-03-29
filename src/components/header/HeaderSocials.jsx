import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://linkedin.com" targets="_blank"><BsLinkedin/></a>
      <a href="https://github.com" targets="_blank"><FaGithub/></a>
      <a href="https://dribbble.com" targets="_blank"><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocials
