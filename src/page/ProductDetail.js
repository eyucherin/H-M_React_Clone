import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container ,Row,Col,Dropdown,Button} from 'react-bootstrap'


const ProductDetail = () => {
  const  {id} = useParams()
  const [product,setProduct] = useState(null)

  const getProductDetail = async() =>{
    let url = `https://my-json-server.typicode.com/eyucherin/H-M_React_Clone/products/${id}`
    let response = await fetch(url)
    let data = await response.json()
    setProduct(data)
  }

  useEffect(() =>{
    if(product == null){
      getProductDetail()
    }
    console.log(product)
  },[product])


  return (
    <div>
      <Container>
        <Row>
          <Col className = "product-img">
            <img width = {396} height = {594} src = {product?.img}></img>
          </Col>
          <Col>
            <h3 >{product?.title}</h3>
            <p className = "product-info">${product?.price}</p>
            <p className = "conciousChoice"> {product?.choice ? "Concious Choice":""}</p>
            <Dropdown className="drop-down">
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                  Select Size
              </Dropdown.Toggle>

              <Dropdown.Menu className = "check">
                {product?.size.length > 0 &&
                  product.size.map((item,index) => (
                    <Dropdown.Item key = {index} href="#/action-1">{item}</Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown>
            <Button variant="dark" className="add-button">
              Add To Cart
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ProductDetail