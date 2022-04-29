import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Row, Col,Container,Button } from 'react-bootstrap'
import Product from '../components/Product'
import { listProducts } from '../actions/ProductActions'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { useSearchParams , useParams, Link} from 'react-router-dom'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import Electronics from '../HomeScreenImages/Electronics.jpg'
import Automobile from '../HomeScreenImages/Automobile.jpg'
import Building from '../HomeScreenImages/Building.jpg'
import IndustrialPlants from '../HomeScreenImages/IndustrialPlants.jpg'
import Metals from '../HomeScreenImages/Metals.jpg'




const HomeScreen = () => {
  const dispatch = useDispatch()

  const { keyword }  = useParams()

  const { pageNumber }  = useParams() || 1
  
  const productList = useSelector((state) => state.productList)
  const {loading,error,products,page,pages}=productList


  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch,keyword,pageNumber])
 



  return (
    <>
      <Meta/>
      {/* {!keyword ? <ProductCarousel /> : <Link to='/' className='btn btn-light'>
        Go Back
      </Link>}

      
      <h1>Electronic Stuff</h1>
      {loading ? (<Loader></Loader>) : error ? (<Message variant='danger'>{error}</Message>)
        :
         <>
        <Row>
              {products.map(product => (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                  </Col>
              ))}
          </Row>

          <Paginate pages={pages}
            page={page}
            keyword={keyword ? keyword : ''} />
          </>
          } */}
        
      
             <h1>Metals,Alloys and Minerals</h1>
      {loading ? (<Loader></Loader>) : error ? (<Message variant='danger'>{error}</Message>)
        :
         <>
          <Row style={{border: "2px solid black" , margin:"20px"}}>
            <Col style={{marginTop:"40px" , marginLeft:"50px"}}>    <Link to='/Metals'>  <img src={Metals} height="300px" width="300px"></img> </Link></Col>
         
              {products.slice(32,36).map(product => (
                  <Col key={product._id} sm={6} md={3} lg={2} xl={2}>
                    <Product product={product} />
                  </Col>
              ))}
          </Row>

          <Paginate pages={pages}
            page={page}
            keyword={keyword ? keyword : ''} />
          </>
          }


      

      <h1>Automobile Materials</h1>
      {loading ? (<Loader></Loader>) : error ? (<Message variant='danger'>{error}</Message>)
        :
         <>
          <Row style={{border: "2px solid black" , margin:"20px"}}>
            <Col style={{marginTop:"50px" , marginLeft:"50px"}}>    <Link to='/Automobile'>  <img src={Automobile} height="300px" width="300px"></img> </Link></Col>
         
              {products.slice(0,4).map(product => (
                  <Col key={product._id} sm={6} md={3} lg={2} xl={2}>
                    <Product product={product} />
                  </Col>
              ))}
          </Row>

          <Paginate pages={pages}
            page={page}
            keyword={keyword ? keyword : ''} />
          </>
          }
        

      
        <h1>Building Materials</h1>
      {loading ? (<Loader></Loader>) : error ? (<Message variant='danger'>{error}</Message>)
        :
         <>
          <Row style={{border: "2px solid black" , margin:"20px"}}>
            <Col style={{ marginTop: "40px", marginLeft: "50px" }}>
            <Link to='/Building'>  <img src={Building} height="300px" width="300px"></img> </Link></Col> 
         
              {products.slice(8,12).map(product => (
                  <Col key={product._id} sm={6} md={3} lg={2} xl={2}>
                    <Product product={product} />
                  </Col>
              ))}
          </Row>

          <Paginate pages={pages}
            page={page}
            keyword={keyword ? keyword : ''} />
          </>
          }
        
      
       <h1>Electronics</h1>
      {loading ? (<Loader></Loader>) : error ? (<Message variant='danger'>{error}</Message>)
        :
         <>
          <Row style={{border: "2px solid black" , margin:"20px"}}>
            <Col style={{ marginTop: "50px", marginLeft: "50px" }}>
            <Link to='/Electronics'>  <img src={Electronics} height="300px" width="300px"></img> </Link></Col> 
         
              {products.slice(16,20).map(product => (
                  <Col key={product._id} sm={6} md={3} lg={2} xl={2}>
                    <Product product={product} />
                  </Col>
              ))}
          </Row>
          <Paginate pages={pages}
            page={page}
            keyword={keyword ? keyword : ''} />
          </>
      }
      

       <h1>Industrial Plants & Machinery</h1>
      {loading ? (<Loader></Loader>) : error ? (<Message variant='danger'>{error}</Message>)
        :
         <>
          <Row style={{border: "2px solid black" , margin:"20px"}}>
            <Col style={{marginTop:"40px" , marginLeft:"50px"}}>    <Link to='/IndustrialPlants'>  <img src={IndustrialPlants} height="300px" width="300px"></img> </Link></Col>
         
              {products.slice(24,28).map(product => (
                  <Col key={product._id} sm={6} md={3} lg={2} xl={2}>
                    <Product product={product} />
                  </Col>
              ))}
          </Row>

          <Paginate pages={pages}
            page={page}
            keyword={keyword ? keyword : ''} />
          </>
          }
      

 
 <Container className='text-center'>
                  <p>Want to sell your products?</p>
              <Link to='/AddNewProduct'> <Button type='submit' variant='primary' className='mt-3'>
                 Clck here
        </Button></Link>
        </Container>
      

      </>
  )
}

export default HomeScreen