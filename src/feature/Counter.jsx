import CounterCard from '../components/CounterCard';
import ValueCounterCard from '../components/ValueCounterCard';
import ColorCard from '../components/ColorCard';


const Counter = () => {
  return (
    <div className='flex items-center h-screen justify-center '>
      <div className='border-4 border-gray-500 p-8 bg-gray-800'>
        <h1 className='text-2xl text-white font-bold mb-8 mt-0' >Color Counter App</h1>
        <ColorCard />
        <CounterCard />
        <ValueCounterCard />
      </div>

    </div>
  )
}

export default Counter