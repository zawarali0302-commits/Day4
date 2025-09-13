
function App() {


  return (
    <>
      <h1 className="font-bold font-serif text-emerald-500">Flags</h1><br />
      <div className="flex flex-row gap-2">
        <div className="flex w-72 h-52 border">
          <div className="bg-blue-500 w-1/3 "></div>
          <div className="bg-white w-1/3 "></div>
          <div className="bg-red-500 w-2/3 "></div>
          <div className="bg-white w-1/3  "></div>
          <div className="bg-blue-500 w-1/3 "></div>
        </div>


        <div className="flex flex-col w-72 h-52 border">
          <div className="bg-blue-500 h-1/3 "></div>
          <div className="bg-white h-1/3 "></div>
          <div className="bg-red-500 h-2/3 "></div>
          <div className="bg-white h-1/3  "></div>
          <div className="bg-blue-500 h-1/3 "></div>
        </div>


        <div className="flex bg-white w-72 h-52 border items-center justify-center">
          <div className="bg-red-500 size-30 rounded-full "></div>
        </div>

        <div className="flex flex-col w-72 h-52 border">
          <div className="bg-blue-500 h-1/3 "></div>
          <div className="bg-white h-1/3 "></div>
          <div className="bg-red-500 h-2/3 flex items-center justify-center">
            <div className="bg-green-500 size-20 rounded-full"></div>
          </div>
          <div className="bg-white h-1/3  "></div>
          <div className="bg-blue-500 h-1/3 "></div>
        </div>
      </div>


      <div className="flex flex-col gap-2 mt-2">
        <div className="flex w-72 h-52 border">
          <div className="bg-blue-500 w-1/3 "></div>
          <div className="bg-white w-1/3 "></div>
          <div className="bg-red-500 w-2/3 "></div>
          <div className="bg-white w-1/3  "></div>
          <div className="bg-blue-500 w-1/3 "></div>
        </div>

        <div className="flex flex-col w-72 h-52 border">
          <div className="bg-blue-500 h-1/3 "></div>
          <div className="bg-white h-1/3 "></div>
          <div className="bg-red-500 h-2/3 "></div>
          <div className="bg-white h-1/3  "></div>
          <div className="bg-blue-500 h-1/3 "></div>
        </div>

        <div className="flex bg-white w-72 h-52 border items-center justify-center">
          <div className="bg-red-500 size-30 rounded-full "></div>
        </div>
        <div className="flex flex-col w-72 h-52 border">
          <div className="bg-blue-500 h-1/3 "></div>
          <div className="bg-white h-1/3 "></div>
          <div className="bg-red-500 h-2/3 flex items-center justify-center">
            <div className="bg-green-500 size-20 rounded-full"></div>
          </div>
          <div className="bg-white h-1/3  "></div>
          <div className="bg-blue-500 h-1/3 "></div>
        </div>
      </div>

      <h1>Bangladesh Flag</h1>
      <div className="bg-[rgb(0,103,69)] border w-72 h-52 flex items-center justify-center">
        <div className="bg-[rgb(219,36,32)] size-25 rounded-full -ml-10"></div>
        
      </div>
      <h1>UAE Flag</h1>
      <div className="border w-72 h-36 flex">
              
        <div className="bg-red-900 w-1/4"></div>
        <div className="bg-white w-3/4">
        <div className="bg-green-900 h-1/3"></div>
        <div className="bg-white h-1/3"></div>
        <div className="bg-black h-1/3"></div>
        </div>
        
      </div>
    </>

  )
}

export default App
