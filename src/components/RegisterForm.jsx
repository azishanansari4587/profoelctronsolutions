"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterForm = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name:"",
    email: "",
    password: "",
    otp: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          first_name: formData.first_name,
          last_name: formData.last_name,
          email: formData.email,
          password: formData.password,
        })
      });

      const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Registration failed!");
    }

      toast.success(data.message);
      setStep(2); // Move to OTP verification step
      router.push("/signin")
    } catch (error) {
      toast.error(error.message || "Registration failed!");
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/verifyEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          otp: formData.otp,
        })
      });

      const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "OTP verification failed!");
    }


      toast.success(data.message);
      setStep(3); // Show success message
    } catch (error) {
      toast.error(error.message || "OTP verification failed!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-semibold text-center mb-4">
          {step === 1 ? "Register" : "Verify OTP"}
        </h2>

        {step === 1 && (
          <form onSubmit={handleRegister}>
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              value={formData.first_name}
              onChange={handleChange}
              className="w-full p-2 mb-2 border rounded"
              required
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              value={formData.last_name}
              onChange={handleChange}
              className="w-full p-2 mb-2 border rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 mb-2 border rounded"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 mb-2 border rounded"
              required
            />
            <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
              Register
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleVerifyOTP}>
            <input
              type="text"
              name="otp"
              placeholder="Enter OTP"
              value={formData.otp}
              onChange={handleChange}
              className="w-full p-2 mb-2 border rounded"
              required
            />
            <button className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
              Verify OTP
            </button>
          </form>
        )}

        {step === 3 && (
          <div className="text-center">
            <h3 className="text-green-600 font-bold">🎉 Account Verified Successfully!</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterForm;
