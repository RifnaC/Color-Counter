import { useState } from 'react'
import { decrementByValue, incrementByValue } from '../feature/counterSlice'
import { useDispatch } from 'react-redux'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid'

const ValueCounterCard = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState(0)
    
  return (
    <div className='flex justify-center'>
          <button className={`bg-gray-700 px-4 py-4 `}
            onClick={() => dispatch(decrementByValue(value))}
          >
            <MinusIcon className="h-6 w-6 text-white text-2xl " />
          </button>
          <input
            type="text"
            name="price"
            id="price"
            onChange={(e) => setValue(Number(e.target.value))}
            className="block  w-20  border-0 py-1.5  text-2xl text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 text-center focus:ring-2 focus:ring-inset focus:ring-gray-600 "
            placeholder={0}
          />
          <button className='bg-gray-700 px-4 py-4  ' onClick={() =>dispatch(incrementByValue(value))}>
            <PlusIcon className="h-6 w-6 text-white text-2xl" />
          </button>
        </div>
  )
}

export default ValueCounterCard