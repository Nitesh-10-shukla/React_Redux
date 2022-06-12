import React,{useState} from 'react'
import { connect } from 'react-redux';
import {fetchAlluser} from '../Actions/UserAction'
import {ModalBody,Modal,ModalFooter,ModalHeader,Button} from 'reactstrap'
const Home = ({data }) => {
  const[show,setShow]=useState(false);
  const[user,setUser]=useState([]);
  const modal = () => setShow(!show);

   const getuserData=(id)=>{
        setShow(true)
        setUser(data.users?.filter(x => x.id === id))
    
    }
  return (
    <div className='container py-5'>
      {
        (data.users)?
        <table className="table container my-5 shadow-sm p-3 mb-5 bg-white rounded">
   <thead>
     <tr>
       <th scope="col">Id</th>
       <th scope="col">Name</th>
       <th scope="col">Email</th>
       <th scope="col">Phone</th>
       <th scope="col">Know More</th>
     </tr>
   </thead>
   <tbody>
       {
           data.users.map((item,index)=>(
     <tr>
       <th scope="row">{index+1}</th>
       <td>{item.name}</td>
       <td>{item.email}</td>
       <td>{item.phone}</td>
       <td><button type="button"  className='btn btn-info"' style={{width:"100px"}} onClick={()=>{getuserData(item.id)}} >Go</button></td>
     </tr>
    ))}
   </tbody>
</table>
        :""
      }
      <div>
      <Modal isOpen={show}>
     <ModalHeader toggle={modal}>
       User Data
     </ModalHeader>
     {
         user.map((val)=>(     
     <ModalBody>
      <h3></h3>
   
 <ul className="list-group list-group-horizontal">
   <li className="list-group-item">{val.address.street}</li>
   <li className="list-group-item">{val.address.suite}</li>
   <li className="list-group-item">{val.address.city}</li>
   <li className="list-group-item">{val.address.zipcode}</li>
 </ul>
     </ModalBody>
  ))}
     <ModalFooter>
       <Button
         color="primary"
         onClick={modal}
       >
         Do Something
       </Button>
       {' '}
       <Button onClick={modal}>
         Cancel
       </Button>
     </ModalFooter>
   </Modal>
      </div>
    </div>
  )
}
function mapStateToProps(state) {
  return { data: state.users };
} 
export default connect(mapStateToProps,fetchAlluser)(Home)