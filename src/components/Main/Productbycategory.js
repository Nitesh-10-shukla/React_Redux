import React, { useEffect, useState } from 'react'
import { fetchUserData } from '../../Actions/UserAction'
import { connect } from 'react-redux';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import '../../Style/common.css'
 
const Productbycategory = ({ data }) => {
    const [category, setCategory] = useState([])
    const [alldata, setAlldata] = useState([])
    useEffect(() => {
        setCategory([...new Set(data.users?.map(item => item.category))])
        setAlldata(data.users)
    }, [data])

    const filterbycategory = (categories) => {
        if (categories == "All") {
            setAlldata(data.users)
        }
        else {
            let bigCities = data.users.filter(function (e) {
                return e.category == categories;
            });
            setAlldata(bigCities)
        }
    }
    return (
        <div className='container mt-3 py-5' >
            <div className='d-flex justify-content-evenly flex-wrap py-5'>
                <button className='btn btn-outline-success' onClick={() => { filterbycategory("All") }}>All</button>
                {
                    category?.map((item) => (
                        <>
                            <button className='btn btn-outline-success' onClick={() => { filterbycategory(item) }}>{item}</button>
                        </>
                    ))
                }
            </div>
            {
                (alldata) ?
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        {
                            alldata.map((item) => (
                                <div className="col-sm-3 ">
                                    <div className="card h-100 shadow-sm p-3 mb-5 bg-white rounded cards">
                                        <img src={item.image} className="card-img-top" alt="..." style={{ height: "170px", objectFit: "contain" }} />
                                        <div className="card-body">
                                            <h5 className="card-title text-center text my-2">{item.title}</h5>
                                            {/* <p className="card-text word">{item.description}.</p> */}
                                        </div>
                                        <div className='d-flex justify-content-around'>
                                            <p>Price-{item.price}</p>
                                            <p>{item.rating?.rate}</p>
                                        </div>
                                        <div className='d-flex justify-content-center py-2'>
                                            <button className='btn btn-outline-danger'>Add to Cart <AiOutlineShoppingCart size={20} /></button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div> : <div><p>Loading....</p></div>
            }
        </div>
    )
}
function mapStateToProps(state) {
    return { data: state.users };
}
export default connect(mapStateToProps, fetchUserData)(Productbycategory)