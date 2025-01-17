import React, { useEffect, useState } from 'react';
import {Loader} from 'lucide-react'

function App() {

  const [message, setMessage] = useState('')

  useEffect(()=>{
    const apiTest = async() => {
      try {
        const response = await fetch("http://localhost:4000/hello")
        const data =  await response.text()
        setMessage(data)
      } catch (error) {
        setMessage('server error')
      }
    }

    apiTest()
  },[]);

  

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Frontend Fetch Example
        </h1>
        <p className="text-gray-600 justify-center items-center flex">
          Message from Server:{" "}
          <span className="font-medium text-indigo-600 pl-1">
            {message || <div class="flex items-center justify-center bg-gray-100">
  <Loader class="animate-spin h-5 w-5 "/>
</div>
}
          </span>
        </p>
      </div>
    </div>
  );
}

export default App;
