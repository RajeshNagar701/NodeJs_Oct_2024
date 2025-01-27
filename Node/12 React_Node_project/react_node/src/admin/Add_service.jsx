import axios from 'axios';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify';

function Add_service() {

    const [formdata,setFormdata]=useState({
        ser_name:"",
        ser_description:"",
        ser_image:""
    })

    const changeHandel=(e)=>{
        setFormdata({...formdata,[e.target.name]:e.target.value});
        console.log(formdata);
    }

    const submitHandel=async(e)=>{
        e.preventDefault();
        const res=await axios.post(`http://localhost:5000/insert_service`,formdata);
        console.log(res);
        toast.success(res.data.success);
        setFormdata({...formdata,ser_name:"",ser_image:"",ser_description:""});
    }


    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light bg-transparent" id="gtco-main-nav">
                    <div className="container"><a className="navbar-brand">Solution</a>
                        <button className="navbar-toggler" data-target="#my-nav" onclick="myFunction(this)" data-toggle="collapse"><span className="bar1" /> <span className="bar2" /> <span className="bar3" /></button>
                        <div id="my-nav" className="collapse navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item"><NavLink className="nav-link" to="/dashboard">Dashboard</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="/add_service">Services</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>
               


                <footer className="container-fluid" id="gtco-footer">
                    <div class="container mt-3">
                        <h2>Add Services</h2>
                        <form action="" method="post" onSubmit={submitHandel}>
                            <div className="mb-3 mt-3">
                                <label htmlFor="email">Service Name:</label>
                                <input type="text" value={formdata.ser_name} onChange={changeHandel} className="form-control" placeholder="Enter Service Name" name="ser_name" />
                            </div>
                            <div className="mb-3 mt-3">
                                <label htmlFor="email">Service Description:</label>
                                <input type="text" value={formdata.ser_description} onChange={changeHandel} className="form-control"  placeholder="Enter Service Name" name="ser_description" />
                            </div>
                            <div className="mb-3 mt-3">
                                <label htmlFor="email">Service Image:</label>
                                <input type="url" value={formdata.ser_image} onChange={changeHandel} className="form-control"  placeholder="Service Image URL" name="ser_image" />
                            </div>
                           
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Add_service