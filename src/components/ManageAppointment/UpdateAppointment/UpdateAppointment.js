import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import Footer from '../../Shared/Footer/Footer';
import './UpdateAppointment.css';
import { useHistory } from "react-router-dom";

const UpdateAppointment = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [service,setService] = useState({});
    const notify = () => toast("Appoinment updated successfully!");
    let history = useHistory();
    const {id }= useParams();
    
    useEffect(() => {
      fetch(`http://localhost/code/laravel-backend/public/api/appointment-details/${id}`)
        .then((res) => res.json())
        .then((data) => setService(data));
    }, []);
  
      const onSubmit = data => {
          console.log(data);

          const url = `http://localhost/code/laravel-backend/public/api/appointment-update/${id}`;
          fetch(url,{
              method:'PUT',
              headers:{
                  'content-type':'application/json'
              },
              body:JSON.stringify(data)
          })
          .then(res =>{
            res.json()
            
            if(res.status == 200){
              notify();
              
              
            }
          })
          

      }
    return (
        <div>
        <div className=" container mt-5">
        <ToastContainer />
            <h3 className="appointment-update-section section-title text-center"><span>Update</span> your appointment</h3>
            <form className="appointment-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-12 col-md-6">
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>First Name*</Form.Label>
                <br />
                <input
                  className="appointment-input"
                  placeholder="First Name"
                  defaultValue={service.firstName}
                  {...register("firstName", { required: true })}
                />
              </Form.Group>
            </div>
            <div className="col-12 col-md-6">
              <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Label>Last Name*</Form.Label>
                <br />
                <input
                  className="appointment-input"
                  placeholder="Last Name"
                  defaultValue={service.lastName}
                  {...register("lastName", { required: true })}
                />
              </Form.Group>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Service Id*</Form.Label>
                <br />
                <input
                  className="appointment-input"
                  placeholder="First Name"
                  defaultValue={service?.serviceId}
                  {...register("serviceId", { required: true })}
                />
              </Form.Group>
            </div>
            <div className="col-12 col-md-6">
              <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Label>Service Name*</Form.Label>
                <br />
                <input
                  className="appointment-input"
                  placeholder="First Name"
                  defaultValue={service?.serviceTitle}
                  {...register("serviceTitle", { required: true })}
                />
              </Form.Group>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email*</Form.Label>
                <br />
                <input
                type="email"
                  className="appointment-input"
                  placeholder="Email"
                  defaultValue={service.email}
                  {...register("email", { required: true })}
                />
              </Form.Group>
            </div>
            <div className="col-12 col-md-6">
              <Form.Group className="mb-3" controlId="formBasicNumber">
                <Form.Label>Number*</Form.Label>
                <br />
                <input
                type="number"
                  className="appointment-input"
                  placeholder="Number"
                  defaultValue={service.Number}
                  {...register("Number")}
                />
              </Form.Group>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <Form.Label>Gender*</Form.Label>
              <br />
              <select {...register("gender")} className="appointment-input">
                <option selected={service.gender=='female'?'selected':''} value="female">female</option>
                <option selected={service.gender=='male'?'selected':''} value="male">male</option>
                <option selected={service.gender=='other'?'selected':''} value="other">other</option>
              </select>
            </div>
            <div className="col-12 col-md-6">
              <Form.Group className="mb-3" controlId="formBasicCity">
                <Form.Label>City*</Form.Label>
                <br />
                <input
                  className="appointment-input"
                  placeholder="city"
                  defaultValue={service.city}
                  {...register("city")}
                />
              </Form.Group>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-6">
              <Form.Group className="mb-3" controlId="formBasicCountry">
                <Form.Label>Country*</Form.Label>
                <br />
                <select {...register("country")} className="appointment-input">
                <option selected={service.country=='Bangladesh'?'selected':''} value="Bangladesh">Bangladesh</option>
                <option selected={service.country=='India'?'selected':''} value="India">India</option>
                <option selected={service.country=='Nepal'?'selected':''} value="Nepal">Nepal</option>
              </select>
              </Form.Group>
            </div>
            <div className="col-12 col-md-6">
              <Form.Group className="mb-3" controlId="formBasicNumber">
                <Form.Label>Zip Code*</Form.Label>
                <br />
                <input
                  className="appointment-input"
                  placeholder="Zip Code"
                  defaultValue={service.zip}
                  {...register("zip")}
                />
              </Form.Group>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-6">
              <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Label>Select Day*</Form.Label>
                <br />
                <input
                type="date"
                  className="appointment-input"
                  placeholder="day"
                  defaultValue={service.day}
                  {...register("day")}
                />
              </Form.Group>
            </div>
            <div className="col-12 col-md-6">
              <Form.Group className="mb-3" controlId="formBasicCountry">
                <Form.Label>Select Time*</Form.Label>
                <br />
                <select {...register("time")} className="appointment-input">
                <option selected={service.time=='morning'?'selected':''} value="morning">Morning</option>
                <option selected={service.time=='noon'?'selected':''} value="noon">Noon</option>
                <option selected={service.time=='night'?'selected':''} value="night">Night</option>
              </select>
              </Form.Group>
            </div>
          </div>
          <div className="row">
           
          </div>

          <input className="carousel-btn" type="submit" />
        </form>

        <div className="row my-5">
          <div className="col-12 col-md-10">
            <div className="row d-flex align-items-center">
              <div className="col-md-3 ">
                <img
                  src="https://thegenius.co/dentistry/live2/wp-content/uploads/2015/10/teeth_2.png"
                  alt=""
                />
              </div>
              <div className="col-9">
                <h3>
                  We are dedicated to giving each of our patients the healthy
                  smile they deserve!
                </h3>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-2 ">
            <button className="carousel-btn">Get Emergency</button>
          </div>
        </div>
      </div>
      <Footer></Footer>
      </div>
      
       
    );
};

export default UpdateAppointment;