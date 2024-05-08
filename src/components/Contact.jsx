import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const querystring = require('querystring');

function Contact() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      full_name: data.name,
      email_address: data.email,
      message: data.message,
    };

    const stringData = new URLSearchParams({
      full_name: userInfo.full_name,
      email_address: userInfo.email,
      message: userInfo.message,
    })
  
    console.log(userInfo)
    try {
      // await axios.post("https://getform.io/f/zbxdlvmb", userInfo);


      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:3000/submitContact',
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data : userInfo
      };
      
       await axios.request(config)
      .then((response) => {
        toast.success("Your message has been sent", JSON.stringify(response));
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong"+ error);
      });
     
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong"+ error);
    }
  };
  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
      >
        <h1 className="text-3xl font-bold mb-4">Contact me</h1>
        <span>Please fill out the form below to contact me</span>
        <div className=" flex flex-col items-center justify-center mt-5">
          <form
           onSubmit={handleSubmit(onSubmit)}
            action="http://localhost:3000/submitContact"
            method="POST"
            className="bg-slate-200 w-96 px-8 py-6 rounded-xl"
          >
            <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">FullName</label>
              <input
               {...register("name", { required: true })}
                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
               name="name"
                type="text"
                placeholder="Enter your fullname"
              />
            {errors.name && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Email Address</label>
              <input
                {...register("email", { required: true })}
                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="text"
                placeholder="Enter your email address"
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea
                {...register("message", { required: true })}
                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
               name="message"
                type="text"
                placeholder="Enter your Query"
              />
              {errors.message && <span>This field is required</span>}
            </div>
            <button
              type="submit"
              className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
