import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';
import logo from './image/logo.png'


export default function Footer() {
  return (
    <>
    <footer className='footer'>
          <Container>
          <Row className='footer-top'>
            
            <Col lg="5" className='footer-info'>
            <a href="index.html" className="logo d-flex align-items-center">
           
              <img src={logo}></img>
            </a>
            <br/>
            <p>Machine learning | Deep learning </p>
            
            </Col>
            <Col lg="2">
            <div className='footer-links'>
              <h4>Useful Links</h4>
              <ul>
                <li><i className="bi bi-chevron-right"></i> <a href="https://opencv.org/opencv-ai-competition-2021/" target="_blank">OpenCV</a></li>
                <li><i className="bi bi-chevron-right"></i> <a href="https://pandas.pydata.org/pandas-docs/stable/index.html" target="_blank">Pandas</a></li>
                <li><i className="bi bi-chevron-right"></i> <a href="https://numpy.org/" target="_blank">NumPy</a></li>
                <li><i className="bi bi-chevron-right"></i> <a href="https://www.tensorflow.org/" target="_blank">Tensorflow</a></li>
              </ul>
              </div>
            </Col>
            <Col lg="2" >
              <div className='footer-links'>
              <h4>Our Services</h4>
              <ul>
                <li><i className="bi bi-chevron-right"></i> <a href="#">Web Design</a></li>
                <li><i className="bi bi-chevron-right"></i> <a href="#">Web Development</a></li>
                <li><i className="bi bi-chevron-right"></i> <a href="#">Image Processing</a></li>
                <li><i className="bi bi-chevron-right"></i> <a href="#">Data Analysis</a></li>
              </ul>
              </div>
            </Col>

            <Col lg="3" className='footer-links'>
            <h4>Contact Us</h4>
            <p>
              MIG-Gold 110 <br/>
              Sejbahar Housing Board Road 2, <br/>
              Doma-1, Raipur,  Chhattisgarh,495015 <br/><br/>
              <strong>Phone:</strong> +91-9098704107<br/>
            </p>
            </Col>
          </Row>
          </Container>
          
        </footer>
        <Container>
          <div className="copyright">
        &copy; Copyright <strong><span>Sense Tech</span></strong>. All Rights Reserved
      </div>
      
          </Container>
    </>
  )
}
