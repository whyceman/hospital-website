//styles
import './Testimonials.css'
//images and icons
import man1 from '../../assets/man1.jpg'
import man2 from '../../assets/man2.jpg'
import man3 from '../../assets/man3.jpg'
import man4 from '../../assets/man4.jpg'
import star from '../../assets/star.svg'
import arrowLeft from '../../assets/arrow-left.svg'
import arrowRight from '../../assets/arrow-right.svg'
//react
import { useState } from 'react'
//animation
import { motion } from 'framer-motion'


const Testimonials = () => {
    const [selected, setSelected] = useState(0);
    const testimonialsData = [
        {
            image: man1,
            country: 'London',
            name: 'John Thomas',
            rating: [star, star, star, star, star],
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur reprehenderit est quas, alias suscipit qui ipsum aliquam incidunt aliquid perspiciatis.'
        },
        {
            image: man2,
            country: 'Sweden',
            name: ' Muller',
            rating: [star, star, star, star, star],
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur reprehenderit est quas, alias suscipit qui ipsum aliquam incidunt aliquid perspiciatis.'
        },
        {
            image: man3,
            country: 'Nigeria',
            name: 'Ahmad M.',
            rating: [star, star, star, star],
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur reprehenderit est quas, alias suscipit qui ipsum aliquam incidunt aliquid perspiciatis.'
        },
        {
            image: man4,
            country: 'Lebanon',
            name: 'Lopez Sandon',
            rating: [star, star, star],
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur reprehenderit est quas, alias suscipit qui ipsum aliquam incidunt aliquid perspiciatis.'
        }
    ]
    const tLength = testimonialsData.length;
    const transition = { type: 'spring', duration: '3' }


    return (
        <div className="testimonials" id="testimonials">
            <span>testimonials from our clients</span>
            <div className="t-container">
                <motion.span
                    key={selected}
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={transition}
                >
                    <img src={testimonialsData[selected].image} alt="" />
                </motion.span>
                <div>
                    <span>{testimonialsData[selected].country}</span>
                    <span>{testimonialsData[selected].name}</span>
                    <span>{testimonialsData[selected].rating.map((rating, i) => (
                        <span key={i}>
                            <motion.img
                                key={selected}
                                initial={{ scale: 0.2, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={transition}
                                src={rating} alt="" className='rating' />
                        </span>
                    ))}</span>
                    <motion.p
                        key={selected}
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={transition}
                    >{testimonialsData[selected].comment}</motion.p>
                    <div className='arrows'>
                        <span><img src={arrowLeft} alt=""
                            onClick={() => (
                                selected === 0 ? setSelected(tLength - 1) :
                                    setSelected(prev => prev - 1)
                            )}
                        /> </span>
                        <span><img src={arrowRight} alt=""

                            onClick={() => (
                                selected === tLength - 1 ? setSelected(0) :
                                    setSelected(prev => prev + 1)
                            )} /></span>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Testimonials;