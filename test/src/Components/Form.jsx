"use client";
import { useState, useEffect, useRef } from "react";
import { fetchText } from "@/app/fetch/fetchText";
import ResultCard from "./ResultCard"



const Form = () => {
    const [text, setText] = useState("");
    const [result, setResult] = useState("");
const imgRef = useRef(null);
  const onSubmit = async(e) => {
      e.preventDefault(); 
        if (text.trim() === "") {
    alert("Please enter some text.");
    return;
  }
       try {
      const newText = await fetchText(text);
      console.log('newText', newText);
           setResult(newText);
           setText(""); 

    if (newText === null) {
      alert("No result found.");
      return;
    }

    } catch (error) {
      console.error(error);
    }
    };
//     const animationStyle = {
//     animation: "moveImage 3s infinite",
//   transformOrigin: "center",
//   animationDirection: "alternate",
//   animationIterationCount: "infinite",
//   };
   useEffect(() => {
    const moveImage = () => {
      if (imgRef.current) {
        imgRef.current.style.transform = "translateX(-5px)";
        setTimeout(() => {
          imgRef.current.style.transform = "translateX(0)";
        }, 3000);
      }
    };

    const intervalId = setInterval(moveImage, 6000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
    return (
           
<div className="relative w-full p-10">
  <h1 className="text-2xl text-center text-lime-950">Text Filtration</h1>
  <p className="text-xl text-center text-lime-800">
    You can insert different text and find a unique character in a word
  </p>
  <div className=" mt-4 absolute top-0 right-0  hidden sm:block  ">
    <img src="/paint.png" width={200} height={200} alt=""  id="moveImage" />
  </div>
            <form
        onSubmit={onSubmit}
        className="flex flex-col items-center justify-center p-10 w-full"
      >
              <textarea
                  value={text}
                  onChange={(e)=>setText(e.target.value)}
          type="text"
          name="text"
          id="text"
          placeholder="put your text here"
          className="block p-2.5 mb-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-lime-300 focus:ring-lime-500 focus:border-green-400 dark:bg-gray-700 dark:border-lime-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500"
        rows="5" cols="50"
              />
<button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
    Check text
  </span>
</button>
        
          </form>
           {/* <img src="/paint.png" className='absolute top-0 right-2 z-0' width={300} height={300} alt="" /> */}
          <ResultCard result={result} />
  </div>
  );
};
export default Form;
