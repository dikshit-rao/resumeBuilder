import React, { useEffect ,useState} from "react";
import { useForm } from "react-hook-form";
import CountryCode from "../data/countrycode.json";
import { apiConnector } from "../Services/apiConnector"
import { contactusEndpoint } from "../Services/apis"
import toast from "react-hot-toast";
import {Loader2} from "lucide-react"
const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
    const submitContactForm = async (data) => {
      console.log("Form Data - ", data)
      setIsLoading(true)
      try {
        
        const res = await apiConnector(
          "POST",
          contactusEndpoint.CONTACT_US_API,
          data
        )
        console.log("Email Res - ", res)
          setIsLoading(false);
          toast.success("Form Submitted Succesfully")
      } catch (error) {
        console.log("ERROR MESSAGE - ", error.message)
        toast.success("Server is Down!!")
        setIsLoading(false);
      }
    }
  
    useEffect(() => {
      if (isSubmitSuccessful) {
        reset({
          email: "",
          firstname: "",
          lastname: "",
          message: "",
          phoneNo: "",
        })
      }
    }, [reset, isSubmitSuccessful])
  return (
    <form className="flex flex-col gap-7" onSubmit={handleSubmit(submitContactForm)}>
      <div className="flex flex-col gap-5 lg:flex-row">
      
        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="firstname" className="text-[#07142b] font-semibold">
            First Name
          </label>
          <input
            type="text"
            id="firstname"
            placeholder="Enter first name"
            className="form-style rounded-md p-2 bg-white border border-gray-800 text-[#07142b]"
            {...register("firstname", { required: true })}
          />
          {errors.firstname && (
            <span className="text-[12px] text-red-500">Please enter your name.</span>
          )}
        </div>
        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="lastname" className="text-[#07142b] font-semibold">
            Last Name
          </label>
          <input
            type="text"
            id="lastname"
            placeholder="Enter last name"
            className="form-style rounded-md p-2 bg-white border border-gray-800 text-[#07142b]"
            {...register("lastname")}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-[#07142b] font-semibold">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter email address"
          className="form-style rounded-md p-2 bg-white border border-gray-800 text-[#07142b]"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="text-[12px] text-red-500">Please enter your Email address.</span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="phonenumber" className="text-[#07142b] font-semibold">
          Phone Number
        </label>
        <div className="flex gap-5">
          <div className="flex w-[81px] flex-col gap-2">
            <select
              className="form-style rounded-md p-2 bg-white border border-gray-800 text-[#07142b]"
              {...register("countrycode", { required: true })}
            >
              {CountryCode.map((ele, i) => (
                <option key={i} value={ele.code}>
                  {ele.code} - {ele.country}
                </option>
              ))}
            </select>
          </div>
          <div className="flex w-[calc(100%-90px)] flex-col gap-2">
            <input
              type="number"
              id="phonenumber"
              placeholder="12345 67890"
              className="form-style rounded-md p-2 bg-white border border-gray-800 text-[#07142b]"
              {...register("phoneNo", {
                required: "Please enter your Phone Number.",
                minLength: { value: 10, message: "Invalid Phone Number" },
                maxLength: { value: 12, message: "Invalid Phone Number" },
              })}
            />
          </div>
        </div>
        {errors.phoneNo && (
          <span className="text-[12px] text-red-500">{errors.phoneNo.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-[#07142b] font-semibold">
          Message
        </label>
        <textarea
          id="message"
          rows="7"
          placeholder="Enter your message here"
          className="form-style rounded-md p-2 bg-white border border-gray-800 text-[#07142b]"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <span className="text-[12px] text-red-500">Please enter your Message.</span>
        )}
      </div>

      <button
        type="submit"
        className={`rounded-md bg-[#ffc85e] px-6 py-3 text-center text-[13px] font-bold text-[#07142b] shadow-md transition-all duration-200 
        hover:scale-95 hover:shadow-none sm:text-[16px]`}
      >
        {!isLoading ? <span>Send Message</span> :  <span className="flex items-center justify-center gap-2"><Loader2 className="animate-spin" />Loading...</span>}
      </button>
    </form>
  );
};

export default ContactUsForm;
