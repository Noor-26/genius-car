import React from 'react';
import { useForm } from "react-hook-form";

const Addservice = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <h2>Add a service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("name")} />
      <input defaultValue="test" {...register("description")} />
      
      <input type="submit" />
    </form>
        </div>
    );
}; 

export default Addservice;