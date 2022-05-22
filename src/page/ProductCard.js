import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
  const navigate = useNavigate()
  const showDetail = () =>{
    navigate(`/product/${item?.id}`)
  }
  return (
    <div className = "card" onClick = {showDetail}>
        <img width = {237} height = {426} src = {item?.img}/>
        <div>{item?.choice ? "Concious Choice":""}</div>
        <div>{item?.title}</div>
        <div>${item?.price}</div>
        <div>{item?.new ? "NEW" : "" }</div>
    </div>
  )
}

export default ProductCard