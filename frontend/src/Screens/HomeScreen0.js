import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import { listProducts } from '../actions/ProductActions'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { useSearchParams , useParams, Link} from 'react-router-dom'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
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
      

      
      <h1>Choose Category</h1>
      {loading ? (<Loader></Loader>) : error ? (<Message variant='danger'>{error}</Message>)
        :
         <>
        <Row>
         <Col>
        <h2>Icon 1</h2>
                      </Col>  
             <Col>
        <h2>Icon 2</h2>
                      </Col>   
             <Col>
        <h2>Icon 3</h2>
         </Col>               
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