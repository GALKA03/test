"use client";
import { useState } from "react";
import { fetchText } from "@/app/fetch/fetchText";
import ResultCard from "./ResultCard"



const Form = () => {
    const [text, setText] = useState("");
    const [result, setResult] = useState("");

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
   
  return (
    <>
      <h1 className="text-2xl text-center text-lime-950">Text Filtration</h1>
      <p className="text-xl text-center text-lime-800">
        You can insert different text and find a unique character in a word
      </p>
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
          <ResultCard result={result} />
    </>
  );
};
export default Form;
