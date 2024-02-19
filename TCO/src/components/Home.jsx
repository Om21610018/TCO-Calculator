import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);


  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({
    Jobs_per_1Minute: "",
    Jobs_per_5Minutes: "",
    Jobs_per_15Minutes: "",
    Mem_capacity: "",
    Disk_capacity_GB: "",
    Num_of_CPU_Cores: "",
    CPU_speed_per_Core: "",
    Avg_Receive_Kbps: "",
    Avg_Transmit_Kbps: "",
  });
  async function submitHandler() {
    setLoading(true);
    //* Perform the task of ml here
    setLoading(false);
    navigate("/calculate");
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="w-full h-full ">
      {loading ? (
        <div className="flex justify-center items-center font-semibold text-2xl mt-10 ">
          Loading...
        </div>
      ) : (
        <div className=" flex flex-col items-center gap-y-10  py-10 w-full">
          <div className=" flex flex-col gap-y-5 bg-slate-200  w-full py-10 px-5">
          <div>
              <label htmlFor="fileInput">Choose a file:</label>
              <input type="file" id="fileInput" onChange={handleFileChange} />
           
            </div>
            <label className=" text-xl font-semibold ">
              Jobs per 1 Minute:
              <input
                type="number"
                name="Jobs_per_1Minute"
                value={inputs.Jobs_per_1Minute}
                onChange={handleChange}
                className=" border-1px border-blue-400 bg-gray-500 bg-opacity-35 px-2 py-1 rounded-md  ml-3 "
              />
            </label>
            <label className=" text-xl font-semibold ">
              Jobs per 5 Minutes:
              <input
                type="number"
                name="Jobs_per_5Minutes"
                value={inputs.Jobs_per_5Minutes}
                onChange={handleChange}
                className=" border-1px border-blue-400 bg-gray-500 bg-opacity-35 px-2 py-1 rounded-md  ml-3 "
              />
            </label>
            <label className=" text-xl font-semibold ">
              Jobs per 15 Minutes:
              <input
                type="number"
                name="Jobs_per_15Minutes"
                value={inputs.Jobs_per_15Minutes}
                onChange={handleChange}
                className=" border-1px border-blue-400 bg-gray-500 bg-opacity-35 px-2 py-1 rounded-md  ml-3 "
              />
            </label>
            <label className=" text-xl font-semibold ">
              Mem capacity:
              <input
                type="number"
                name="Mem_capacity"
                value={inputs.Mem_capacity}
                onChange={handleChange}
                className=" border-1px border-blue-400 bg-gray-500 bg-opacity-35 px-2 py-1 rounded-md  ml-3 "
              />
            </label>
            <label className=" text-xl font-semibold ">
              Disk capacity GB:
              <input
                type="number"
                name="Disk_capacity_GB"
                value={inputs.Disk_capacity_GB}
                onChange={handleChange}
                className=" border-1px border-blue-400 bg-gray-500 bg-opacity-35 px-2 py-1 rounded-md  ml-3 "
              />
            </label>
            <label className=" text-xl font-semibold ">
              Num of CPU Cores:
              <input
                type="number"
                name="Num_of_CPU_Cores"
                value={inputs.Num_of_CPU_Cores}
                onChange={handleChange}
                className=" border-1px border-blue-400 bg-gray-500 bg-opacity-35 px-2 py-1 rounded-md  ml-3 "
              />
            </label>
            <label className=" text-xl font-semibold ">
              CPU speed per Core:
              <input
                type="number"
                name="CPU_speed_per_Core"
                value={inputs.CPU_speed_per_Core}
                onChange={handleChange}
                className=" border-1px border-blue-400 bg-gray-500 bg-opacity-35 px-2 py-1 rounded-md  ml-3 "
              />
            </label>
            <label className=" text-xl font-semibold ">
              Avg Receive Kbps:
              <input
                type="number"
                name="Avg_Receive_Kbps"
                value={inputs.Avg_Receive_Kbps}
                onChange={handleChange}
                className=" border-1px border-blue-400 bg-gray-500 bg-opacity-35 px-2 py-1 rounded-md  ml-3 "
              />
            </label>
            <label className=" text-xl font-semibold ">
              Avg Transmit Kbps:
              <input
                type="number"
                name="Avg_Transmit_Kbps"
                value={inputs.Avg_Transmit_Kbps}
                onChange={handleChange}
                className=" border-1px border-blue-400 bg-gray-500 bg-opacity-35 px-2 py-1 rounded-md  ml-3 "
              />
            </label>
          </div>
          <div>
            <button
              onClick={submitHandler}
              className=" py-3 px-20 hover:bg-gray-900 transition-all duration-300 bg-gray-700 rounded-lg text-white"
            >
              Calculate
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
