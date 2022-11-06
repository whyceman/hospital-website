//styles
import Facilities from '../../components/facilities/Facilities'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Services from '../../components/services/Services'
import Testimonials from '../../components/testimonials/Testimonials'
import './Homepage.css'

const Homepage = () => {
    return (
        <div className="homepage" id='home'>
            <Header />
            <Services />
            <Facilities />
            <Testimonials />
            <Footer />
        </div>
    )
}

export default Homepage