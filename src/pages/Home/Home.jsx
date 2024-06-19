import { Component } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Testimonial from './components/Testimonial'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

class Home extends Component {
  render() {
    return (
      <div>
        {/* Navbar */}
        <Navbar />
        {/* Hero */}
        <Hero />
        {/* AboutUs */}
        <AboutUs />
        {/* Testimonial */}
        <Testimonial />
        {/* ContactUs */}
        <ContactUs />
        {/* Footer */}
        <Footer />
      </div>
    )
  }
}

export default Home
