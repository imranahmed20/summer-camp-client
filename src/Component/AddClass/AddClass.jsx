import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Provider/AuthProvider';


const img_token = import.meta.env.VITE_IMGBB_KEY;
const AddClass = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const img_token_url = `https://api.imgbb.com/1/upload?key=${img_token}`
    const onSubmit = data => {
        const formData = new FormData()
        formData.append('image', data.photoURL[0]
        )

        fetch(img_token_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imageURL = imgResponse.data.display_url;
                    const { name, price, category, instructor, availableSeats } = data;
                    const newClass = { name, price: parseFloat(price), category, availableSeats, instructor, image: imageURL }
                    console.log(newClass)
                }
            })

        console.log(data)
    };
    // console.log(errors)
    return (
        <div className='w-full p-10'>
            <h1 className='text-4xl text-red-600 text-center mb-10 font-bold'>Add A Class</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex'>
                    <div className="form-control w-full max-w-xs mr-5">
                        <label className="label">
                            <span className="label-text">Class Name*</span>
                        </label>
                        <input type="text" {...register("name", { required: true })} placeholder="Class Name" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Pick a file</span>
                        </label>
                        <input type="file" {...register("photoURL", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />
                    </div>
                </div>
                <div className='flex'>
                    <div className="form-control w-full max-w-xs mr-5">
                        <label className="label">
                            <span className="label-text">Instructor name*</span>
                        </label>
                        <input type="text" {...register("instructor", { required: true })} className="input input-bordered w-full max-w-xs" placeholder="Instructor name" />

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
                        <input type="email" {...register("email", { required: true })} className="input input-bordered w-full max-w-xs" defaultValue={user.email} />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Available seats*</span>
                        </label>
                        <input {...register("availableSeats", { required: true })} type="number" placeholder="Available seats" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Class Details</span>
                    </label>
                    <textarea {...register("details", { required: true })} className="textarea textarea-bordered h-24" placeholder="Details"></textarea>
                </div>
                <input className='btn btn-success mt-4' type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddClass;