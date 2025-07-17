import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, SocialMedia, StarsCanvas, Tech, Works } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />

          
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <SocialMedia />
      </div>
      <footer className="text-center text-sm text-gray-500 py-4">
        Made with ❤️ By Aya BEN MABROUK
      </footer>
    </BrowserRouter>
    
  );
}

export default App;