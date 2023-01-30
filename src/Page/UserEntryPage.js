import React, { useEffect } from 'react'
import { Container,Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {  useNavigate } from 'react-router-dom'


export default function UserEntryPage() {
    const userLogin = useSelector(state=>state.userLogin)  
    const navigate = useNavigate();
    const {error, loading, userInfo}= userLogin
    useEffect(()=>{
        if(!userInfo)
        {
           navigate('/login')
        }
    });

  return (
    <>
     <section className='hero  align-items-center'>
            <Container>
                <Row>
                    <Col lg="12">
                   <h3> UserEntery page</h3>

                    </Col>
                </Row>
           </Container>
     </section>
   </>
  )
}
