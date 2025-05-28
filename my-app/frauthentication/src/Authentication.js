import React, { useState } from "react";
// import fireobj from "./firebase";
// import firebaseobj from "./firebase";

export default function Authentication(){

    const[email, setemail] =useState('')
    const[password, setpassword] =useState('')

    // const fireauthobj = fireobj.auth()

    function register(){
        // fireauthobj.createUserWithEmailAndPassword(email, password).then(res=>{
        //     swal.fire('congrats','User Registered Succesfully,'success')
        // }).cath(err=>{
        //     swal.fire('sorry','User registration failed', 'error')
        // })

    }

    function login(){
        // fireauthobj.createUserWithEmailAndPassword(email, password).then(res=>{
        //     swal.fire('Congrsts', 'User Logged in Succesfully', 'success')
        // }).cath(err=>{
        //     swal.fire('sorry', 'user loggin failed','error')
        // })
        
    }


    return (
        <div>
        <div className="row justify-content-center">
            <div className="col-md-5 shadow-lg p-3 nb-5 bg-white rounded">

                <h1>Firebase Authentication</h1>
                <input type="text" placeholder="email" className=" form-control" value={email} onChange={(e)=>{setemail(e.target.value)}}></input>
                <input type="text" placeholder="password" className="form-control " value={password} onChange={(e)=>{setpassword(e.target.value)}}></input>

                <input type="button" value="register" className="btn btn-primary" onClick={register}></input>
                <input type="button" value="login" className="btn btn-success" onClick={login}></input>

            </div>

        </div>

        </div>
    )
}


