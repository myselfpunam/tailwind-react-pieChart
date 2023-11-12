import React from 'react';
import Card from '../Card/Card';

const Pricing = () => {
  const products = [
    {id:1 , price: 0 , name: 'FREE' , spell:'YES',      grammar:'NO' , sentence : 'NO' , rearrange : 'NO' },
    {id:2 , price: 10 , name: 'STANDRAD' , spell:'YES', grammar:'YES' , sentence : 'NO' , rearrange : 'YES' },
    {id:3 , price: 20 , name: 'PREMIUM' , spell:'YES' , grammar:'YES' , sentence : 'YES' , rearrange : 'YES' }
    
  ]
  
   return (
   <div >
     <h1 className='text-5xl font-bold text-center p-4  h-20'>Best Deal Of The Town</h1>
     <div className='grid md:grid-cols-3 gap-3 m-3'>
      {
        products.map(product => <Card key={product.id} product={product} ></Card>)
      }
     </div>

  </div>
  );
};

export default Pricing;