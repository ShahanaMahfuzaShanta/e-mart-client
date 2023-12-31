import React, { useState } from 'react';
import useProduct from '../../Hooks/useProduct';
import ProductCard from '../Shared/ProductCard';

const TrendingProducts = ({products}) => {
    //console.log(products)
    const [activeContent, setActiveContent] = useState('content1');

  const handleContentSwitch = (contentId) => {
    setActiveContent(contentId);
  };

    const product = products.filter(
      showProduct => showProduct['bestDeal'] === true
            );

    const newProducts = products

    return (
       <>
       <h1 className='text-center font-bold text-xl md:text-2xl lg:text-4xl py-5'>Trending Products</h1>
      <div className="flex flex-col items-center mt-4">
        <div className="flex gap-4 mb-4">
          {
            product.length > 0 && (
              <button
            className={`p-2 lg:px-4 lg:py-2 text-sm lg:text-lg font-semibold rounded-md ${activeContent === 'content1' ? 'bg-accent text-white' : 'text-gray-700'}`}
            onClick={() => handleContentSwitch('content1')}
          >
            Featured Products
          </button>
            )
          }
          <button
            className={`p-2 lg:px-4 lg:py-2 text-sm lg:text-lg font-semibold rounded-md ${activeContent === 'content2' ? 'bg-accent text-white' : 'text-gray-700'}`}
            onClick={() => handleContentSwitch('content2')}
          >
            New Products
          </button>
        </div>

        <div className="">
          { product.length > 0 && activeContent === 'content1' && (
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 w-[300px] md:w-[700px] lg:w-[1200px] mx-auto py-5'>
              
                {product.slice(0, 5).map(showProduct => 
                  <ProductCard 
                    key={showProduct._id}
                    showProduct={showProduct}
                ></ProductCard>
                )}
            </div>
          )}

          {activeContent === 'content2' && (
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-[300px] md:w-[700px] lg:w-[1200px] mx-auto py-5'>
              
            {newProducts.slice(-5).map(showProduct => 
                  <ProductCard 
                    key={showProduct._id}
                    showProduct={showProduct}
                ></ProductCard>)}
        </div>
          )}
        </div>
      </div>
       </>
    );
};

export default TrendingProducts;