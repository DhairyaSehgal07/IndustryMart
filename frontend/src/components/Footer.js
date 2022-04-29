import React, {useState,useEffect} from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col,Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { login } from '../actions/userActions'
import FormContainer from '../components/FormContainer'

const Footer = () => {
 const [email, setEmail] = useState('')
    const userLogin = useSelector(state => state.userLogin)
    
    const submitHandler = () => {
        console.log("Submit")
    }
    
    const { loading, error, userInfo } = userLogin

  return (
      <footer style={{backgroundColor: "#343A40" , color:"white"}}>
          <Container>
                
              <Row>
                
                    <FormContainer>
        
          {error && <Message variant='danger'>{error}</Message>}
          {loading && <Loader/>}
         
    </FormContainer>
              </Row>
              <Row>
                  <Col className='text-center py-3'>
                      Copyright &copy; IndustryMart
                  </Col>
              </Row>

          </Container>
    </footer>
  )
}

export default Footer