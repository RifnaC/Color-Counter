import { useSelector } from 'react-redux';

const ColorCard = () => {

    const num = useSelector((state) => state.counter.value);
    const err = useSelector((state) => state.counter.error)

    const changeColor = (num) => {
        return num >= 0 && num <= 10 ? 'bg-gradient-to-br from-green-900 to-green-400 ' :
            num >= 11 && num <= 20 ? 'bg-gradient-to-br from-yellow-900 to-yellow-400' : 'bg-gradient-to-br from-red-900 to-red-400';
    }
    return (
        <>
        {err && <p className='-mt-4 mb-4 bg-red-600 text-white text-center'>{err}</p>}
         <div className='flex justify-center'>
            <div className={` w-56 h-56 flex items-center justify-center ${changeColor(num)}`} >
                <h1 className='text-8xl font-bold text-white'>{num}</h1>
            </div>
        </div>
        </>
       
    )
}

export default ColorCard