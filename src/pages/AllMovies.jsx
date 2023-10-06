import React from 'react'
import { Header } from '../components/fragments/Header'
import { Footer } from '../components/fragments/Footer'
import { ListMovieSpesfic } from '../components/fragments/ListMovieSpesfic'

export const AllMovies = () => {
  return (
    <div className='mb-0'>
      <Header/>
      <ListMovieSpesfic/>
      <Footer/>
    </div>
  )
}
