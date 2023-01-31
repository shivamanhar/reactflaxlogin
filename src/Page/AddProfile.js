import axios from 'axios'
import React, { useEffect,useState } from 'react'

import { Col, Container, Row,Form, FloatingLabel, Button } from 'react-bootstrap'


export default function AddProfile() {
    const [state, setState] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/users/getstate',{

                }).then(response=>{
                    setState(response.data)
                })
    },[])

  return (
    <>
    <Row>
        <Col lg="12">
            <h5>Profile page entry </h5>
            <Form>
                <Form.Group className='mb-6'>
                    <Form.Label>
                        Mobile No 
                    </Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group className='mb-6'>
                    <Form.Label>
                        Address
                    </Form.Label>
                    <Form.Control as="textarea" />
                </Form.Group>
                <Form.Group className='mb-6'>
                    <Form.Label>
                        State
                    </Form.Label>
                    <Form.Select>
                        {
                            state.map((val, index) =>{
                                return <option key={index}> {val.state_name_en}</option>
                            })
                        }
                    </Form.Select>
                </Form.Group>
                <Form.Group className='mb-6'>
                    <Form.Label>
                        District
                    </Form.Label>
                    <Form.Select>
                        <option> A </option>
                        <option> B </option>
                    </Form.Select>
                </Form.Group>
                
                <Button variant='primary' className='mt-2' type="submit">Submit</Button>
            </Form>
        </Col>
    </Row>
    </>
  )
}
