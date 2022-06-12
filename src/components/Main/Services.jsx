import React from 'react'
import { connect } from 'react-redux';
import {fetchUserData} from '../../Actions/UserAction'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import Spinner from "react-spinkit";

import '../../Style/common.css' 
import Header from './Header';
const services = ({data }) => {
  const image="https://cdn.pixabay.com/photo/2019/04/26/07/14/store-4156934_960_720.png"
  return (
    <>
    <Header image={image}/>
    <div className='container py-5'>
      {
      (!data.loading)?
        <div className="row row-cols-1 row-cols-md-4 g-4">
        {
          data.users.slice(0,8).map((item)=>(
            <div className="col-sm-3">
            <div className="card h-100 shadow-sm p-3 mb-5 bg-white rounded cards" >
              <img src={item.image} className="card-img-top" alt="..." style={{height:"170px",objectFit:"contain"}}/>
              <div className="card-body">
                <h5 className="card-title text-center text my-2">{item.title}</h5>
                {/* <p className="card-text word">{item.description}.</p> */}
              </div>
              <div className='d-flex justify-content-around'>
                <p>Price-{item.price}</p>
                <p>{item.rating?.rate}</p>
              </div>
              <div className='d-flex justify-content-center py-2'>
            <button className='btn btn-outline-danger'>Add to Cart <AiOutlineShoppingCart size={20}/></button>
              </div>
            </div>
          </div>
          ))
        }
        </div>:<div className='d-flex justify-content-center'><Spinner name="double-bounce" color="blue" style={{ width: 100, height: 100 }} />
</div>
      }
    </div>
    </>
  )
}
function mapStateToProps(state) {
  return { data: state.users };
} 
export default connect(mapStateToProps,fetchUserData)(services)