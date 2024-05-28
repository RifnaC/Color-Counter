import { ArrowPathIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/solid"
import { useDispatch } from 'react-redux'
import { decrement, increment, reset } from "../feature/counterSlice";


const CounterCard = () => {
    const dispatch = useDispatch();
    return (
        <div className='flex justify-around my-4'>
            <div>
                <button className={`bg-gray-700 px-4 py-4 me-4 rounded-full `}
                    onClick={() => dispatch(decrement())}
                >
                    <MinusIcon className="h-6 w-6 text-white text-2xl" />
                </button>

                <button className='bg-gray-700 px-4 py-4 rounded-full ' onClick={() => dispatch(increment())}>
                    <PlusIcon className="h-6 w-6 text-white text-2xl" />
                </button>
            </div>
            <div>
                <button className='bg-gray-700 px-4 py-4 rounded-full' onClick={() => dispatch(reset())}>
                    <ArrowPathIcon className="h-6 w-6 text-white text-2xl" />
                </button>
            </div>
        </div>

    )
}

export default CounterCard