import React from 'react';
import { useForm } from 'react-hook-form';

const AddClass = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    // console.log(errors)
    return (
        <div className='w-full p-10'>
            <h1 className='text-4xl text-red-600 text-center mb-10 font-bold'>Add A Class</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Class Name*</span>
                    </label>
                    <input type="text" {...register("name", { required: true })} placeholder="Class Name" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className='flex'>
                    <div className="form-control w-full max-w-xs mr-5">
                        <label className="label">
                            <span className="label-text">Instructor name*</span>
                        </label>
                        <input type="text" {...register("category", { required: true })} className="input input-bordered w-full max-w-xs" placeholder="Instructor name" />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Price*</span>
                        </label>
                        <input {...register("price", { required: true })} type="number" placeholder="Price" className="input input-bordered w-full  max-w-xs" />
                    </div>
                </div>
                <div className='flex'>
                    <div className="form-control w-full max-w-xs mr-5">
                        <label className="label">
                            <span className="label-text">Instructor email *</span>
                        </label>
                        <input type="text" {...register("category", { required: true })} className="input input-bordered w-full max-w-xs" placeholder="Instructor email" />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Available seats*</span>
                        </label>
                        <input {...register("price", { required: true })} type="number" placeholder="Available seats" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Class Details</span>
                    </label>
                    <textarea {...register("details", { required: true })} className="textarea textarea-bordered h-24" placeholder="Details"></textarea>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Pick a file</span>
                    </label>
                    <input type="file" {...register("photoURL", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />
                </div>
                <input className='btn btn-success mt-4' type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddClass;