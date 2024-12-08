import { Roboto_Mono } from 'next/font/google'
import { FiShoppingCart } from "react-icons/fi";
import { LuCircleUserRound } from "react-icons/lu";




export default function Home() {
  return (
    <div>
      <div className="bg-black w-[1440] h-[38] flex justify-between">
        <h1 className="mx-auto text-white flex justify-between py-2">Sign Up and get 20% off to your first order. Sign Up Now</h1>
      </div>
      <div className="bg-white w-[1240] h-[41] m-[40] flex justify-between">
        <h1 className="font-bold text-5xl">Shop.co</h1>
        <div className='relative'>
        <ul className='flex'>
          <li className='m-4'>Shop</li>
          <li className='m-4'>On Sale</li>
          <li className='m-4'>New Arrivals</li>
          <li className='m-4'>Brands</li>
        </ul></div>
        <div className='relative'>
          <input className='px-4 py-3 rounded-sm w-[300px] bg-gray-300' type='text' placeholder='Search...' />
        </div>
        <div className='text-black flex gap-6 text-[26px] py-4'>
        <FiShoppingCart />
        <LuCircleUserRound />
        </div>
        


      </div>
    </div>
  );
}
