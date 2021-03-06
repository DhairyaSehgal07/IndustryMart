import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import { listProducts } from '../actions/ProductActions'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { useSearchParams , useParams, Link} from 'react-router-dom'
import Paginate from '../components/Paginate'
import ProductCarousel2 from '../components/ProductCarousel2'
import Meta from '../components/Meta'


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
       <Link to='/' className='btn btn-light'>
        Go Back
      </Link>
          <h1>Electronic Products</h1>
      {loading ? (<Loader></Loader>) : error ? (<Message variant='danger'>{error}</Message>)
        :
         <>
        <Row>
              {products.slice(16,24).map(product => (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                  </Col>
              ))}
          </Row>

          <Paginate pages={pages}
            page={page}
            keyword={keyword ? keyword : ''} />
          </>
          }
        
      </>
  )
}

export default HomeScreen