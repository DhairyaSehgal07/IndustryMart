import React, {useState,useEffect} from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { register } from '../actions/userActions'


const RegisterScreen = () => {
    const [name, setName]= useState('')
    const [email, setEmail] = useState('')
    const [description, setDescription] = useState('')
    const [brand, setBrand] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [countInStock, setCountInStock] = useState('')
    const [image, setImage] = useState('')
    const [message,setMessage]=useState(null)

const navigate=useNavigate()

    const dispatch = useDispatch()
    
    const userRegister = useSelector(state => state.userRegister)
    
    const { loading, error, userInfo } = userRegister
    

    const location = useLocation();
    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if (userInfo) {
        navigate(redirect)
    }
},[navigate,userInfo,redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        //DISPATCH REGISTER

    }
  return (
      <FormContainer>
          <h1>Add Procuct Details</h1>
          {message && <Message variant='danger'>{message}</Message>}
           {error && <Message variant='danger'>{error}</Message>}

          {loading && <Loader/>}
          <Form onSubmit={submitHandler}>
          <Form.Group controlId='name'>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type='name' placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)}>
                      
                  </Form.Control>
              </Form.Group>



              <Form.Group controlId='email'>
                  <Form.Label className='mt-2'>Email Address</Form.Label>
                  <Form.Control type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}>
                      
                  </Form.Control>
              </Form.Group>

              
               <Form.Group controlId='description'>
                  <Form.Label className='mt-2'>Description</Form.Label>
                  <Form.Control type='description' placeholder='Enter description' value={description} onChange={(e) => setDescription(e.target.value)}>
                      
                  </Form.Control>
              </Form.Group>


               <Form.Group controlId='brand'>
                  <Form.Label className='mt-2'>Brand</Form.Label>
                  <Form.Control type='brand' placeholder='Enter brand' value={brand} onChange={(e) => setBrand(e.target.value)}>
                      
                  </Form.Control>
              </Form.Group>



               <Form.Group controlId='category'>
                  <Form.Label className='mt-2'>Category</Form.Label>
                  <Form.Control type='category' placeholder='Enter category' value={category} onChange={(e) => setCategory(e.target.value)}>
                      
                  </Form.Control>
              </Form.Group>


              
               <Form.Group controlId='price'>
                  <Form.Label className='mt-2'>Price (in Rupees) </Form.Label>
                  <Form.Control type='price' placeholder='Enter price' value={price} onChange={(e) => setPrice(e.target.value)}>
                      
                  </Form.Control>
              </Form.Group>

        

              <Form.Group controlId='image'>
                  <Form.Label className='mt-2'>Product Image</Form.Label>
                  <Form.Control type='file' placeholder='Select Image' value={image} onChange={(e) => setImage(e.target.value)}></Form.Control>
              </Form.Group>
              
              <Button type='submit' variant='primary' className='mt-3'>
                 Submit Details
</Button>

          </Form>
         
    </FormContainer>
  )
}

export default RegisterScreen