import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container , Row, Col, Card} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {  useNavigate } from 'react-router-dom'


export default function Profile() {
   
    const userLogin = useSelector(state=>state.userLogin)  
    const navigate = useNavigate();
    const {error, loading, userInfo}= userLogin

    const [profiledata, setProfileData] = useState([])
    
    useEffect(()=>{
        if(userInfo)
        {
            
            //console.log(userInfo.id)
            //console.log(userInfo.token)
           
            console.log('useeffect')
            axios.get(
                `http://localhost:8000/api/users/userprofile`,
                {
                    headers: {
                        'Content-type': 'application/json',
                        Authorization: `Bearer ${userInfo.token}`
                    },
                }
            ).then(response=> {
                        setProfileData(response.data)
                    });
        }   
          
    },[]);



    
   
            

  return (
    <>
     <section className='hero  align-items-center'>
            <Container>
                <Row>
                    <Col lg="12">
                    <Card>
                    <h3> Profile</h3>
                    <h5>Username : {userInfo.username}</h5>
                       <h5>Mobile No:  {profiledata.mobileno}  </h5>
                         <h5> Address: {profiledata.address}</h5>  
                         <h5> District Name{profiledata.districtname}</h5>  
                         <h5> State Name: {profiledata.statename}</h5>  
                         <h5>Email: {userInfo.email}</h5>
                         

                    </Card>
                        
                    </Col>
                </Row>
           </Container>
     </section>
   </>
  )
}
