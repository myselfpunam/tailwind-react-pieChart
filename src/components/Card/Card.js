import React from 'react';
import { CheckBadgeIcon } from '@heroicons/react/24/solid'



const Card = ({product}) => {
  return (
    <div className=' bg-purple-200 rounded-md p-3 text-center text-bold font-2xl'>
    
      <h2><span className='text-5xl'>{product.price}</span> <span>$</span> <span className='text-2xl text-slate-400'>/month</span> </h2>
      <h3 className='pt-4 mb-4'>{product.name}</h3>
      
      <div className=''>
        <div className='flex mb-4'>
          <CheckBadgeIcon className="h-6 w-6 text-blue-500" />
          <h1 className='ml-2 '>Spell Checker : {product.spell} </h1>
        </div>
        
        <div className='flex mb-4'>
          <CheckBadgeIcon className="h-6 w-6 text-blue-500" />
          <h1 className='ml-2 '>Grammer Checker : {product.grammar} </h1>
        </div>
        
        <div className='flex mb-4'>
          <CheckBadgeIcon className="h-6 w-6 text-blue-500" />
          <h1 className='ml-2 '>Sentence Checker : {product.sentence} </h1>
        </div>
        
        <div className='flex mb-4'>
          <CheckBadgeIcon className="h-6 w-6 text-blue-500" />
          <h1 className='ml-2 '>Re-arrange Sentence : {product.rearrange} </h1>
        </div>
      </div>
      <button className='bg-green-500 w-full h-10 rounded-md mt-4 text-slate-200'>BUY NOW</button>
    </div>
  );
};

export default Card;