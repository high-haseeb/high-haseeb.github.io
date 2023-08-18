"use client";
import { useForm } from "react-hook-form";

export default function UserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const body = { name: data.name, email: data.email };
    try {
      await fetch("/api/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-end text-2xl'>
      <input placeholder="name" {...register("name", { required: true })} className=" px-4 mb-4"/>
      <input placeholder='email'{...register("email", { required: true })} className="px-4 mb-4"/>
      {errors.name && <span>This field is required</span>}
      {errors.email && <span>This field is required</span>}
      <input type="submit" />
    </form>
  );
}
