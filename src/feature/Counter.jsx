import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByValue, reset } from './counterSlice';
import { ArrowPathIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';


const Counter = () => {
  const num = useSelector((state) => state.counter.value);
  // const color = useSelector((state) => state.counter.color);
  const dispatch = useDispatch();
  const [incrementValue, setIncrementValue] = useState(0)

  return (
    <div className='flex items-center h-screen justify-center '>
      <div className='border-8 border-gray-500 p-8'>
        <h1 className='text-2xl font-bold mb-8 mt-0' >Color Counter App</h1>
        <div className='flex justify-center'>
          <div className='bg-green  w-56 h-56 flex items-center justify-center'>
            <h1 className='text-8xl font-bold text-white'>{num}</h1>
          </div>
        </div>
        <div className='flex justify-around my-4'>
          <div>
            <button className='bg-red-500 px-4 py-4 me-4 rounded-full'
              onClick={() => dispatch(decrement())}
            >
              <MinusIcon className="h-6 w-6 text-white text-2xl" />
            </button>
            <button className='bg-red-500 px-4 py-4 rounded-full ' onClick={() => dispatch(increment())}>
              <PlusIcon className="h-6 w-6 text-white text-2xl" />
            </button>
          </div>
          <div>
            <button className='bg-red-500 px-4 py-4 rounded-full' onClick={() => dispatch(reset())}>
              <ArrowPathIcon className="h-6 w-6 text-white text-2xl" />
            </button>
          </div>
        </div>
        <div className='flex justify-center'>
          <input
            type="text"
            name="price"
            id="price"
            onChange={(e)=> setIncrementValue(Number(e.target.value))}
            className="block me-4 w-16 rounded-md border-0 py-1.5   text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 text-center focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
            placeholder={0}
          />
          <button className='bg-gray-700 rounded px-2 text-white' onClick={() => dispatch(incrementByValue(incrementValue))}>Apply</button>
        </div>
      </div>

    </div>
  )
}

export default Counter