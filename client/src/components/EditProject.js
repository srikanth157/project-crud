// import { FormControl, FormGroup, InputLabel,Input, Button } from '@material-ui/core'
// import React, { useState,useEffect } from 'react'
// import { EditProject,GetAllProjects} from './service/api'
// import { useHistory,useParams } from 'react-router-dom'
// // import { makeStyles } from '@mui/material'


// // const useStyle=makeStyles({
// //   inputElement:{
// //     width:"50vw"
// //   }
// // })









//  const initialValues={

//     name:'',
//     email:'',
//     address:''

// }


// const editProject= () => {

// const [user,setUser]=useState(initialValues)
// const {name,email,address}=project;
// const {id}=useParams();
// console.log(id)
// const history=useHistory();




//  useEffect(() => {
//   loadUserDetails();
// },[])


// const loadUserDetails = async() => {
//   const response = await GetAllProjects(id);
//   setUser(response.data);
// }



// const EditUser=async()=>{
//    await EditProject(id,user) 
//    history.push('/allprojects')
// }

// const onInputChange=(e)=>{
//   // console.log(e.target.value)
//   setUser({...user,[e.target.name]:e.target.value})
//   console.log(user)


// }

// // const classes =useStyle();
//   return (
    
//        <FormGroup>
      
//         <FormControl >
//             <InputLabel >name</InputLabel>
//             <Input  onChange={(e)=>onInputChange(e)} name='name' value={name}/>
//         </FormControl>
//         <FormControl>
//             <InputLabel>email</InputLabel>
//             <Input  onChange={(e)=>onInputChange(e)} name='email' value={email}/>
//         </FormControl>
//         <FormControl>
//             <InputLabel>address</InputLabel>
//             <Input onChange={(e)=>onInputChange(e)} name='address' value={address}/>
//         </FormControl> 
//         <FormControl> 
//             <Button color="primary" variant="contained" onClick={() => EditUser()} >EDIT USER</Button>
//         </FormControl>
        
//     </FormGroup>
     
   
//   )
// }

// export default editProject