import { useDispatch, useSelector } from 'react-redux'
import { increment } from './counterSlice';

const Counter = () => {
    const num = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

  return (
    <>
        <h1>Color Counter App</h1>
        
            <h1 className='bg-gray-100'>{num}</h1>
      
        <div>
            <button onClick={()=>dispatch(increment())}>-</button>
            <button>+</button>
        </div>
        <div><button>Reset</button></div>
    </>
  )
}

export default Counter