import React from 'react'
//styles
import './Footer.css'
//icons
import right from '../../assets/right.svg'

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <span>Quick Links</span>
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Facilities</li>
                    <li>Testimonials</li>
                    <li>Sign Up</li></ul>
            </div>
            <div>
                <span>Extra Links</span>
                <ul><li>Ask Questions</li>
                    <li>About Us</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Use</li>
                    <li>More Info</li></ul>
            </div>
            <div>
                <span>Contact Info</span>
                <ul>
                    <li>+234 8083712651</li>
                    <li>+234 9058260525</li>
                    <li>abdulwaasii12@gmail.com</li>
                    <li>abdulwaasi@gmail.com</li>
                    <li>land phone</li></ul>
            </div>
            <div>
                <span>Follow Us</span>
                <ul>
                    <li>facebook</li>
                    <li>twitter</li>
                    <li>instagram</li>
                    <li>Linkedin</li>
                    <li>youtube</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer