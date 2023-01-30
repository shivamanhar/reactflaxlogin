import React, { useEffect, useState } from 'react'
import { Container,Row,Col, Form , Button} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/userActions';
import Loader from '../components/Loader';
import Message from '../components/Message';


export default function Registration() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')

  const dispatch = useDispatch()

  const userRegister = useSelector(state =>state.userRegister)

  const {error, loading, userInfo} = userRegister

  const submitHeandler = (e) =>{
    if(password != confirmPassword)
    {
      setMessage('Password do not match')
    }
    else
    {
      dispatch(register(name, email, password))
    }
  }

  return (
    <>
     <section className='hero  align-items-center'>
            <Container>
                <Row>
                    <Col lg="8">
                        
                    </Col>
                    <Col lg="4">
                      <h5>Singup</h5>
                      {message && <Message variant='danger'>{message}</Message>}
                      {error && <Message variant='danger'>{error}</Message>}
                      {loading && <Loader />}
                        <Form onSubmit={submitHeandler}>
                        <Form.Group className='mb-12'>
                            <Form.Label>
                              Name 
                            </Form.Label>
                            <Form.Control type="text" value={name} onChange={(e)=>setName(e.target.value)} >

                            </Form.Control>
                          </Form.Group>

                          <Form.Group className='mb-12'>
                            <Form.Label>
                              Email 
                            </Form.Label>
                            <Form.Control type="email" value={email} onChange ={(e)=>setEmail(e.target.value)} >

                            </Form.Control>
                          </Form.Group>
                          <Form.Group className="lg-12">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password"  value={password} onChange={(e)=> setPassword(e.target.value)}>
                            </Form.Control>
                          </Form.Group>

                          <Form.Group className='lg-12'>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}></Form.Control>
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
