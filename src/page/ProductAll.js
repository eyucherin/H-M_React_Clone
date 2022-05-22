import React,{ useEffect,useState } from 'react'
import { Container ,Row,Col} from 'react-bootstrap'
import ProductCard from './ProductCard'
import { useSearchParams } from 'react-router-dom'


const ProductAll = () => {

    const [product,setProduct] = useState([])
    const [query,setQuery] = useSearchParams();

    const getProducts = async()=>{
        let searchQuery = query.get(`q`)
        let url = (searchQuery == null ? `https://my-json-server.typicode.com/eyucherin/H-M_React_Clone/products`:`https://my-json-server.typicode.com/eyucherin/H-M_React_Clone/products?q=${searchQuery}`)
        let response = await fetch(url);
        let data = await response.json();
        setProduct(data)
    }

    useEffect(() =>{
        getProducts()
    },[query])

  return (
      <div className='pageMargin'>
         <Container>
            <Row>
                {product.map((menu,index) =>(
                    <Col key = {index}>
                        <ProductCard item = {menu}/>
                    </Col>
                ))}
            </Row>
        </Container>

      </div>
  )
}

export default ProductAll