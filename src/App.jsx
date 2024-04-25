import { useState } from 'react'

import './index.css'
import EquationInputField from './widget/EquationInputField'

function App() {
  return (
    <div className="h-screen flex justify-center align-center">
      <div className="flex flex-row min-h-screen w-screen flex-cols text-center items-center justify-center">
        <div class="fixed top-10 left-0 right-0 z-50 flex items-center justify-center w-auto h-10">
          Logo
        </div>
        <div class="mx-24 rounded-xl fixed top-32 left-0 right-0 z-50 flex items-center justify-center w-auto h-10 bg-secondaryBackground text-white">
        Test settings
        </div>
      <EquationInputField/>
        <div class="mx-24 rounded-xl fixed bottom-10 left-0  right-0 z-50 flex items-center justify-center w-auto h-10 bg-secondaryBackground text-white">
          Footer
        </div>
      </div>
    </div>
  )
}

export default App
