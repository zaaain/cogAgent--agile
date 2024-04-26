import React, { useState } from "react";
import Layout from "../layout/Layout";
import { FaPaperPlane, FaSpinner } from "react-icons/fa";

const Home = () => {
  const imgUrl = process.env.PUBLIC_URL;
  const [uploadedImage, setUploadedImage] = useState(null);
  const [query, setQuery] = useState("");
  const [imageName, setImageName] = useState("");
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setUploadedImage(file);
    setImageName(file.name);
  };

  const handleRequest = async () => {
    try {
      if (!query) throw new Error("Please enter a question.");
      if (!uploadedImage) throw new Error("Please upload an image.");

      setLoader(true);
      const formData = new FormData();
      formData.append("image", uploadedImage);
      formData.append("query", query);

      const response = await fetch("/api", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      const data = await response.json();
      console.log(data);

    } catch (error) {
      setError(error.message);
    } finally {
      setLoader(false);
    }
  };

  return (
    <Layout>
      <div className="bg-white grid grid-cols-12 min-h-screen max-w-[100%] max-h-screen overflow-hidden p-0 m-0">
        <div className="col-span-3 h-full bg-[#f0f2f6] py-5 flex flex-col items-center relative">
          <img alt="logo" src={`${imgUrl}agileLogo.svg`} className="w-[40%] object-cover" />
          <p className="text-center font-Mont font-bold mt-3 text-[28px]">Agile Loop</p>
          <div className="w-[90%] flex items-center cursor-pointer rounded-xl absolute bottom-5 justify-center h-[120px] bg-white">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="h-full w-full cursor-pointer opacity-0 absolute"
            />
            <p className="text-center font-Mont font-semibold">{uploadedImage ? imageName : "Please upload file here"}</p>
          </div>
        </div>
        <div className="col-span-9 h-full w-full p-5">
          <div className="bg-white w-full flex flex-col items-center justify-center h-[90%]">
            <p className="font-bold font-Mont text-[24px]">How can I help you today?</p>
            {error && <p className="bg-red-200 p-5 rounded-xl mt-5">{error}</p>}
          </div>
          <div className="h-[10%] w-full relative">
            <input
              placeholder="Ask a question"
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              className="bg-[#f0f2f6] px-5 outline-none min-h-[90%] mt-auto rounded-xl min-w-full"
            />
            <button
              disabled={loader}
              onClick={handleRequest}
              className="w-[50px] right-0 rounded-xl cursor-pointer top-0 bottom-0 h-[90%] bg-[#f0f2f6] z-50 flex items-center justify-center absolute"
            >
              {!loader ? <FaPaperPlane className="w-10 h-6" /> : <FaSpinner className="animate-spin w-10 h-6" />}
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
