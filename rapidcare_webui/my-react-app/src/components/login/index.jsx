import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  // const [showOtpInput, setShowOtpInput] = useState(false);

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleGenerateOtp = () => {
    axios
      .post("http://localhost:3001/generate-otp", { phoneNumber })
      .then((res) => {
        if (res.status == 200) {
          navigate("/verifyotp", { state: { phoneNumber } });
        } else if (res.status == 404) {
          console.log("pradhuman ne likha h");
        }
      })
      .catch((error) => {
        console.error("Failed to generate OTP:", error);
      });
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center">
          <div className="w-screen h-screen flex justify-center items-center bg-blue-100">
            <div className="flex flex-col items-center">
              <div className="h-72 w-96 bg-white rounded-md drop-shadow-lg">
                <div className="w-full h-16 text-2xl rounded-t-md bg-blue-500 flex justify-center items-center text-white font-semibold">
                  RapidCare
                </div>
                <div className="flex justify-center items-center rounded-b-md h-60 pb-5">
                  <div className="h-full w-full flex justify-between flex-col py-5 items-center m-5">
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
