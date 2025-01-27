import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function Dashboard() {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch();
    })

    const fetch = async () => {
        const res = await axios.get(`http://localhost:5000/get_service`);
        setData(res.data);
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
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-12" id="contact">
                                <h4> Manage Service</h4>
                                <table class="table table-hover">
                                    <thead>

                                        <tr>
                                            <th>ID</th>
                                            <th>Service Name</th>
                                            <th>Description</th>
                                            <th>Image</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data && data.map((value) => {
                                                return (
                                                <tr>
                                                    <td>{value._id}</td>
                                                    <td>{value.ser_name}</td>
                                                    <td>{value.ser_description}</td>
                                                    <td><img src={value.ser_image} width="50px"/></td>
                                                    <td>
                                                        <button className='btn btn-primary'>Edit</button>
                                                        <button className='btn btn-danger'>Delete</button>
                                                    </td>
                                                </tr>)
                                            })
                                        }


                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Dashboard