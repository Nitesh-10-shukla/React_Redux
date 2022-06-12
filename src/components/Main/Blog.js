import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { fetchblog } from '../../Actions/UserAction';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { Modal, ModalBody } from 'reactstrap';
import '../../Style/common.css'
import Header from './Header';
const Blog = ({ data }) => {
  const dispatch = useDispatch()
  const initialData = [
    {
      id: "1", heading: "Air Max 1 Releases For Nike Air Max Day 2022", image: "https://static1.michael84.co.uk/wp-content/uploads/airmaxday-2022-airmax1-releases.jpg", description: "Air Max Day 2022 is upon us, in fact it’s only 2 weeks away. In celebr...",
      created: "2022-06-05T02:55:37.062+00:00"
    },
    {
      id: "2", heading: "Greggs X Primark Clothing Collab – Yes It’s Real & Released 19th Febru...", image: "https://static1.michael84.co.uk/wp-content/uploads/primark-greggs-collab-0.jpg"
      , description: "It’s no joke, and it’s coming soon. That’s the Greggs x Primark Collab...", created:
        "2022-06-05T02:59:22.919+00:00"
    }, {
      id: "3", heading
        :
        "Kenzo Paris Boke Flower Collection By Nigo Has Been Released",
      image
        :
        "https://static1.michael84.co.uk/wp-content/uploads/kenzo-boke-flower-collection-nigo-aw22.jpg",
      description
        :
        "Kenzo Paris announced the Boke Flower Collection by Nigo, and it looks...",
      created
        :
        "2022-06-05T03:00:47.163+00:00"
    }
  ]
  const [blogdata, setBlogdata] = useState(() => {

    const savedTodos = localStorage.getItem("blog");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {

      return initialData;
    }
  })
  const [modal, setModal] = useState(false)
  const image = "https://images.pexels.com/photos/637076/pexels-photo-637076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  const toggle = () => setModal(!modal);
  const [fields, setBlogfields] = useState({ heading: "", image: "",description:"" });

  useEffect(() => {
    localStorage.setItem("blog", JSON.stringify(blogdata))
    dispatch(fetchblog(blogdata))
  }, [blogdata])

  const fetchInput = (event) => {
    const { name, value } = event.target
    setBlogfields({ ...fields, [name]: value })
  }
  const addBlog = () => {
    if(fields.heading!="" || fields.image!="" || fields.description !=""){
    setBlogdata((e) => [...e, { id: Math.random(), heading: fields.heading, image: fields.image, description: fields.description, created: new Date().toLocaleString() }])
    setBlogfields({ heading: "", image: "",description:"" })
    toggle()
  }
    else{
      alert("all fields are required")
      
    }
  }
  const deleteblog = (id) => {
    const filtertodo = blogdata.filter((item) => item.id != id);
    setBlogdata(filtertodo)
    alert(id)

}

  return (
    <>
      <Header image={image} />
      <div className='container'>
        <div className='p-5 text-end'>
          <button className='btn btn-primary' onClick={toggle}>Write a blog</button>
        </div>
        <div className='d-flex justify-content-between  flex-wrap align-items-start'>
          {
            (data.blog) ?
              <div className="col-md-6">
                {
                  data.blog.map((item) => (
                    <div class="card mb-3">
                      <img class="card-img-top" src={item.image} alt="Card image cap" />
                      <div class="card-body">
                        <h5 class="card-title">{item.heading}</h5>
                        <p class="card-text">{item.description}.</p>
                        <p class="card-text"><small class="text-muted">{item.created}</small></p>
                      </div>
                      <div>
                        {
                          (item.id !=1 && item.id!=2 && item.id!=3)?
                        <button onClick={()=>{deleteblog(item.id)}}>Delete</button>:<></>}
                        </div>
                    </div>
                  ))
                }
              </div> : ""
          }
          <div className='col-md-4'>
            {
              (data.blog) ?
                <div className="">
                  {
                    data.blog.map((item) => (

                      <div className="card h-100 my-5">
                        <img src={item.image} className="card-img-top" alt="..." />

                      </div>

                    ))
                  }
                </div> : ""
            }
          </div>
        </div>
        <div>
          <Modal isOpen={modal} className="bg-white shadow-sm  mb-5 bg-white rounded "
          >
            <ModalBody>
              <div>
                <h3>Add blog..</h3>
              </div>      <form className='mx-auto'>
                <div class="py-1">
                  <label for="heading" class="form-label">Heading</label>
                  <input type="text" class="form-control" id="heading" name='heading' placeholder='Enter your title' onChange={fetchInput} value={fields?.heading || ""} required />
                </div>
                <div class="py-1">
                  <label for="image" class="form-label">Image</label>
                  <input type="url" class="form-control" id="image" name='image' placeholder='Enter your url..' onChange={fetchInput} value={fields?.image || ""} required />
                </div>
                <div class="py-1">
                  <label for="description" class="form-label">Description</label>
                  <textarea type="text" class="form-control" id="description" name='description' placeholder='Enter your description' onChange={fetchInput} value={fields?.description || ""} required />
                </div>
                <div class="d-flex justify-content-center gap-3 my-3">
                  <button class="btn btn-primary" type="button" onClick={addBlog}  >Add</button>
                  <button class="btn btn-danger" type="button" onClick={toggle}  >Cancel</button>
                </div>
              </form>
            </ModalBody>
      
          </Modal>
        </div>
      </div>

    </>
  )
}
function mapStateToProps(state) {
  return { data: state.users };
}
export default connect(mapStateToProps, fetchblog)(Blog)