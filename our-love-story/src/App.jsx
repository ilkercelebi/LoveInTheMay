import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Memories from './components/Memories'
import Reasons from './components/Reasons'
import Letter from './components/Letter'
import Future from './components/Future'
import Surprise from './components/Surprise'
import Finale from './components/Finale'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 flex flex-col font-display">
      <Header />
      <div className="flex-grow">
        <section id="story">
          <Hero />
        </section>
        <section id="gallery">
          <Memories />
        </section>
        <section id="reasons">
          <Reasons />
        </section>
        <section id="letters">
          <Letter />
        </section>
        <section id="future">
          <Future />
        </section>
        <section id="surprise">
          <Surprise />
        </section>
        <section id="finale">
          <Finale />
        </section>
      </div>
      {/* Footer is commented out or kept, but since Finale has its own full screen footer, we can keep the main Footer for other pages or just leave it. The user might want the footer at the very bottom. */}
      <Footer />
    </div>
  )
}

export default App
