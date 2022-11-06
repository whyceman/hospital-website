import React from 'react'
//styles
import './Facilities.css'
//images
import ambulance from '../../assets/ambulance.jpg'
import ward from '../../assets/ward.jpg'
import team from '../../assets/team.jpg'
import vip from '../../assets/vip.jpg'
import reception from '../../assets/reception.jpg'
import imaging from '../../assets/imaging.jpg'


const Facilities = () => {
    const facilitiesImages = [
        { image: ward, title: 'spacious wards', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, veritatis.' },
        { image: ambulance, title: 'ambulance', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, veritatis.' },
        { image: imaging, title: 'diagnostic imaging', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, veritatis.' },
        { image: team, title: 'dignostic team', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, veritatis.' },
        { image: vip, title: 'vip wards', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, veritatis.' },
        { image: reception, title: 'reception', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, veritatis.' }
    ]

    return (
        <div className="facilities" id="facilities">
            <span>our facilities</span>
            {/* <p>we flaunt the following up-to-date,jaw-dropping,functioning facilities</p> */}
            <div className="f-container"
            >
                {facilitiesImages.map((card, i) => (
                    <div className="f-card" key={i}>
                        <img src={card.image} alt="" />
                        <div>
                            <p>{card.title}</p>
                            <span>{card.text}</span>
                            <button className="btn">view</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Facilities