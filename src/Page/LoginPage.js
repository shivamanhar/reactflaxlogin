import React, { useState ,useEffect} from 'react'
import { Container,Row, Col, Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {  useNavigate } from 'react-router-dom'
import { login } from '../actions/userActions'
import Loader from '../components/Loader'
import Message from '../components/Message'


export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEamil] = useState(null)
  const [password, setPassword] = useState(null)

  const dispatch = useDispatch();

  const userLogin = useSelector(state=>state.userLogin)
  


  const {error, loading, userInfo}= userLogin
  useEffect(()=>{
    if(userInfo)
    {
      navigate('/userentrypage')
      /*console.log('userInfo', userInfo)*/
    }
    console.log(userInfo)
  });

  function submitHeandler(e)
  {
    e.preventDefault();
    console.log(email);
    console.log(password);
    dispatch(login(email, password))
    /*
    if(email === 'hari@gmail.com')
    {

      navigate('/welcome')
    }
    console.log('ok');
    */
  }
  return (
    <>
     <section className='hero  align-items-center'>
            <Container>
                <Row>
                    <Col lg="8">
                        
                    </Col>
                    <Col lg="4">
                      <h5>Login</h5>
                      {error && <Message variant='danger'>{error}</Message>}
                      {loading && <Loader />}
                        <Form onSubmit={(e)=>submitHeandler(e)}>
                          <Form.Group className='mb-12'>
                            <Form.Label>
                              Email 
                            </Form.Label>
                            <Form.Control type="text" onChange={(e)=>setEamil(e.target.value)}>

                            </Form.Control>
                          </Form.Group>
                          <Form.Group className="lg-12">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" onChange={(e)=>setPassword(e.target.value)}>

                            </Form.Control>
                          </Form.Group>
                          
                          <Button variant='primary' className='mt-2' type="submit">Submit</Button>
                          
                        </Form>
                    </Col>
                </Row>
                </Container>
                </section>
    </>
  )
}
