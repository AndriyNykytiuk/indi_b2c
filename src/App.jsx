import React from 'react'
import './App.css'
import Header from './components/Header'
import Swipercomponent from './components/Swipercomponent'
import Footer from './components/Footer'
import Questions from './components/Questions'
import FAQ from './components/FAQ'
import AdditionalBlockOFquestion from './components/AdditionalBlockOFquestion'
import HowItDoesWork from './components/HowItDoesWork'
import BussinesPart from './components/BussinesPart'
import WhyIndi from './components/WhyIndi'
import Features  from './components/Features'
import UserReview from './components/UserReview'

// Main App component
function App() {

  return (
    <>
      <Header />
      <Swipercomponent />
      <WhyIndi />
      <HowItDoesWork />
      <Features />
      <UserReview />
      <BussinesPart />
      <Questions />
      <FAQ />
      
      <AdditionalBlockOFquestion />
      <Footer />
    </>
  )
}

export default App
