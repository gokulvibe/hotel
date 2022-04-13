import React from 'react'




function Main() {
    return (
        <div className='flex flex-column space-y-5'>
            <div className='flex flex-row space-x-4'>
              <div className="w-40 h-40  text-white border-solid border-4 border-red-600 rounded-lg bg-red-600  text-center text-4xl"><p className="align-middle">Table #1</p></div>
              <div className="w-40 h-40 text-4xl text-white border-solid border-4 border-green-600 rounded-lg bg-green-600 text-center"><p className="align-middle">Table #2</p></div>
              <div className="w-40 h-40 text-4xl text-white border-solid border-4 border-blue-600 rounded-lg bg-blue-600 text-center"><p className="align-middle">Table #3</p></div>
            </div>
            <div className='flex flex-row space-x-4'>
            <div className="w-40 h-40 text-4xl text-white border-solid border-4 border-green-600 rounded-lg bg-green-600 text-center"><p className="align-middle">Table #4</p></div>
              <div className="w-40 h-40 text-4xl text-white border-solid border-4 border-blue-600 rounded-lg bg-blue-600 text-center"><p className="align-middle">Table #5</p></div>
              <div className="w-40 h-40  text-white border-solid border-4 border-red-600 rounded-lg bg-red-600  text-center text-4xl"><p className="align-middle">Table #6</p></div>
            </div>
        </div>
    )
}

export default Main;
