import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleGenerateOtp = async () => {
    try {
      const response = await fetch(`http://localhost:3001/generate-otp`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phoneNumber: `${phoneNumber}`,
        }),
      });

      if (response.status !== 200) return;
      const result = await response.json();
      console.log(result);
      // navigate("/verifyotp");
    } catch (err) {
      console.error(`Error in sending otp: ${err}`);
    }
  };

  const handleSubmitOtp = async () => {
    const response = await axios.post("http://localhost:3001/getotp", {
      otpCode,
      phoneNumber,
    });

    if (response.status !== 200) return;
    else {
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard1");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center">
          <div className="w-screen h-screen flex justify-center items-center bg-blue-100">
            <div className=" flex flex-col items-center">
              <div className=" flex flex-col justify-start bg-white h-96 w-96 rounded-md drop-shadow-lg">
                <div className="w-full h-16 text-2xl mb-10 rounded-t-md bg-blue-500 flex justify-center items-center text-white font-semibold">
                  <img src="./drugs.png" alt="logo" className="w-6 mr-2" />
                  RapidCare
                </div>
                <div className="flex justify-center items-center rounded-b-md h-60 pb-5">
                  <div className="h-64 w-full flex justify-between flex-col py-5 items-center m-5">
                    <div className="text-green-500 font-bold text-lg">
                      Login
                    </div>
                    <div className="text-xs text-gray-400 items-center flex flex-col">
                      <div>Enter your phone number for login</div>
                    </div>
                    <div className="flex items-center flex-col h-fit w-full ">
                      <div className="text-sm font-bold">
                        Verify your phone number
                      </div>
                      <input
                        type="text"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                        className="w-full border-2 border-blue-300 h-8 rounded-md my-2 text-sm"
                        placeholder="  Enter your number"
                      />
                      <button
                        onClick={handleGenerateOtp}
                        className="px-4 py-2 text-white bg-blue-500 text-sm rounded-md"
                      >
                        Generate OTP
                      </button>

                      <input
                        type="text"
                        className="w-full border-2 border-blue-300 h-8 rounded-md my-2 text-sm"
                        maxLength="6"
                        placeholder="  Enter 6 digit OTP"
                        value={otpCode}
                        onChange={(e) => setOtpCode(e.target.value)}
                      />
                      <button
                        onClick={handleSubmitOtp}
                        className="px-4 py-2 text-white bg-blue-500 text-sm rounded-md"
                      >
                        Submit OTP
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
