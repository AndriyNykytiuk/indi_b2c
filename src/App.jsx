import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
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
import Publicofferta from './components/Publicofferta'
import Policy from './components/Policy'

// Main App component
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={
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
        } />
        <Route path="/oferta" element={
          <>
            <Header hideHero={true} />
            <Publicofferta />
            <Footer />
          </>
        } />
        <Route path="/policy" element={
          <>
            <Header hideHero={true} />
            <Policy />
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  )
}

export default App
