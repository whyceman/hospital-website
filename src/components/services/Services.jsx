//styles
import './Services.css'
//images
import heart from '../../assets/heart.jpg'
import brain from '../../assets/brain.jpg'
import pedo from '../../assets/pedo.jpg'
import chemo from '../../assets/chemo.jpg'
import pathology from '../../assets/pathology.jpg'
import ophta2 from '../../assets/ophta2.jpg'
import drugs from '../../assets/drugs.jpg'
import surgery from '../../assets/surgery.jpg'
import maternity from '../../assets/maternity.jpg'
import emergency from '../../assets/emergency.jpg'

const serviceImages = [
    { image: heart, title: 'cardiology' },
    { image: brain, title: 'neurology' },
    { image: pedo, title: 'pediatrics' },
    { image: chemo, title: 'cancer treatment' },
    { image: pathology, title: 'autopsy' },
    { image: ophta2, title: 'ophtamology' },
    { image: surgery, title: 'surgeries' },
    { image: drugs, title: 'drugs supply' },
    { image: maternity, title: 'maternity' },
    { image: emergency, title: 'emergency medicine' }
]

const Services = () => {
    return (
        <div className="services" id="services">
            <span>our services</span>
            <div className="service-cards">
                {serviceImages.map(card => (
                    <div className="services-card" key={card.image}>
                        <img src={card.image} alt="" />
                        <span>{card.title}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services