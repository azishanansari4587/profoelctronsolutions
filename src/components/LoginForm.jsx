"use client";
import { useState } from "react";

import { toast } from "react-toastify";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";


const LoginForm = ({
  className,
  ...props
}) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    otp: "",
  });


  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const API_BASE_URL = "http://localhost:5000/api/auth";
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/signin`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: formData.email,
            password: formData.password,
        })
    });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed!");
      }

      toast.success(data.message);
      setStep(2);
    } catch (error) {
      toast.error(error.message || "Login failed!");
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    try {
      const response = await fecth(`/api/verifyLoginOtp`, {
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
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user)); 
      setStep(3);
      setTimeout(() => {
        router.push("/dashboard");
      }, 2000);
    } catch (error) {
      toast.error(error.response?.data?.message || "OTP verification failed!");
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden">
        
        {/* <h2 className="text-xl font-semibold text-center mb-4">
          {step === 1 ? "Login" : "Verify OTP"}
        </h2> */}

        {step === 1 && (
          <CardContent className="grid p-0 md:grid-cols-2">
          <form onSubmit={handleLogin} className="p-6 md:p-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-2xl font-bold">Welcome back</h1>
              <p className="text-balance text-muted-foreground">
                Login to your Shikshawala account
              </p>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" name="email" placeholder="zishan@google.com" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="#"
                  className="ml-auto text-sm underline-offset-2 hover:underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <div className=" flex w-full max-w-sm items-center space-x-2">
                <Input id="password" type={showPassword ? "text" : "password"}name="password" value={formData.password} onChange={handleChange} required />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </Button>
              </div>
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
            <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="underline underline-offset-4">
                Sign up
              </Link>
            </div>
          </div>
        </form>
        </CardContent>
          // <form onSubmit={handleLogin}>
          //   <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-2 mb-2 border rounded" required />
          //   <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full p-2 mb-2 border rounded" required />
          //   <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Login</button>
          // </form>
        )}

        {step === 2 && (
          <CardContent className="grid p-0 md:grid-cols-2">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-2xl font-bold">Verify OTP</h1>
              <p className="text-balance text-muted-foreground">
                Check Your Email Address 
              </p>
            </div>
            <form onSubmit={handleVerifyOTP}>
              <input type="text" name="otp" placeholder="Enter OTP" value={formData.otp} onChange={handleChange} className="w-full p-2 mb-2 border rounded" required />
              <button className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">Verify OTP</button>
            </form>
          </CardContent>
        )}

        {step === 3 && <div className="text-center"><h3 className="text-green-600 font-bold">🎉 Login Successful!</h3></div>}
          
        
      </Card>
    </div>
  );
};

export default LoginForm;
