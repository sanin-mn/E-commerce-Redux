import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart, removeFromCart } from '../redux/cartSlice'
import { useNavigate } from 'react-router-dom'

function Cart() {
  const navigate = useNavigate()
  const cartArray = useSelector((state)=>state.cartReducer)
  const dispatch = useDispatch()
  const [total,setTotal] = useState(0)
  const totalAmount = ()=>{
    if(cartArray.length>0){
      setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }else{
      setTotal(0)
    }
  }

  useEffect(()=>{
    totalAmount()
  },[cartArray])

  const checkOut = ()=>{
    alert("Order has successfully placed!!! Thank you for purchasing with us..")
    dispatch(emptyCart())
    navigate('/')
  }
  return (
    <div style={{marginTop:'100px'}}>

      {
        cartArray.length>0?
        <>
          
          <div className='row ms-5 me-5'>
            <div className='col-md-8'>
              <table className=' mt-5 table border shadow'>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product Name</th>
                    <th> Image</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    cartArray.map((product,index)=>(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td> {product.title} </td>
                            <td> <img width={'100px'} height={'100px'} src={product.thumbnail} alt="" /> </td>
                            <td> {product.price} </td>
                            <td> <button className='btn' onClick={()=>dispatch(removeFromCart(product.id))}> <i className="fa-solid fa-trash text-danger fa-2x"></i> </button> </td>
                        </tr>
                      ))
                  }
                </tbody>
              </table>
            </div>
            <div className="col-md-1"></div>
            <div  className="col-lg-3     mt-5">
              <div className='shadow border rounded p-5'>
                <h3 className='fw-bolder text-primary mb-5'> Cart Summary </h3>
                <h5>Total Products : <span> {cartArray.length} </span> </h5>
                <h4>Total : $<span className='fw-bolder text-danger fs-3'> {total} </span></h4>
               <div className='d-grid mt-5'> <button onClick={checkOut} className='btn btn-success rounded'>Check Out</button></div>
              </div>
            </div>
          </div>
        </>
        : <p className="fw-bolder text-danger m-5 fs-1">Your Cart is Empty!!!</p>
      }
    </div>
  )
}

export default Cart