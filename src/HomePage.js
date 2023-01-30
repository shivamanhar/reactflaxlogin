import React from 'react'
import { Button, Container, Navbar,Nav,NavDropdown,Row, Col } from 'react-bootstrap';

import hero from './image/hero-img.png';
import Carousel from 'react-bootstrap/Carousel';
import ann1 from './image/ann1.png';
export default function HomePage() {
  return (
    <>

        <section className='hero d-flex align-items-center' >
            <Container>
                <Row>
                    <Col lg="6">
                      
                    <Carousel interval={5000}>
      <Carousel.Item>
      <h1 >Computer Vision </h1>
                    <h2 >Classification, Object detection, Object tracking,  Segmentation, Medical image processing</h2>
        <Carousel.Caption>
   
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <h1 >Data Analysis </h1>
                    <h2 >Data Cleaning, Object detection, Object tracking,  Segmentation, Medical image processing</h2>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>        
            <h1 >Machine learning </h1>
            <h2 >Classification, Object detection, Object tracking,  Segmentation, Medical image processing</h2>
        <Carousel.Caption>         
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>        
            <h1 >Deep learning </h1>
            <h2 >Classification, Object detection, Object tracking,  Segmentation, Medical image processing</h2>
        <Carousel.Caption>         
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
                    </Col>
                    <Col  lg="6">
                        <img src={ann1}></img>
                    </Col>
                </Row>
            </Container>
        </section>

    </>
  )
}
