import { useState } from 'react'

import './index.css'
import EquationInputField from './widget/EquationInputField'
import NavBar from './widget/navbar'

function App() {
  return (
    <div className="h-screen flex justify-center align-center">
      <div className="flex flex-row min-h-screen w-screen flex-cols text-center items-center justify-center">
        <div class="fixed  top-10 left-0 right-0 z-50 flex ml-20 w-auto  ">
          <div class="flex flex-col">
            <div className='text-4xl font-MonoDisplay'>DERIV-PM</div>
            <div className='text-base font-MonoDisplay'>Derivatives Per Minute</div>
          </div>
          
        </div>
        <NavBar/>
      <EquationInputField/>
        <div class="mx-24 rounded-xl fixed bottom-20 text-sm text-gray-500 left-0 gap-2 right-0 z-50 flex flex-col items-center justify-center w-auto h-auto ">
          <div>Made by @CATSODIUM</div>
          <div>Press <span className="bg-gray-500 px-1 rounded-sm text-primaryBackground">Enter</span> to submit your answer.</div>
          <div>Press <span className="bg-gray-500 px-1 rounded-sm text-primaryBackground">Shift</span> +
            <span className="bg-gray-500 px-1 rounded-sm text-primaryBackground">Enter</span>  to skip the question.
            Press <span className="bg-gray-500 px-1 rounded-sm text-primaryBackground">Tab</span> +
            <span className="bg-gray-500 px-1 rounded-sm text-primaryBackground">Enter</span>  to restart.
            </div>
        </div>
      </div>
    </div>
  )
}

export default App
