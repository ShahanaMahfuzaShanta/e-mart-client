import React, { useState } from 'react';
import SubCategoryProductCard from '../Shared/SubCategoryProductCard';

const SubCategoryAllProducts = ({products}) => {


    return (
       <>
       <h1 className='text-center font-bold lg:text-4xl my-8 pt-14'>Trending Products</h1>

        <div className="p-4">
          
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center px-40'>
              
                {products.map(showProduct => 
                  <SubCategoryProductCard 
                    key={showProduct._id}
                    showProduct={showProduct}
                ></SubCategoryProductCard>
                )}
            </div>
            
        </div>
     
       </>
    );
};

export default SubCategoryAllProducts;