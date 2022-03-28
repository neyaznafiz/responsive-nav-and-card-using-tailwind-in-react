import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {

    const pricingOptions = [
        { id: 1, name: 'Free', price: 0, benefits: [
            'Life Time Free', 
            'Unlimited Deals', 
            'Localized Deals', 
            'fantastic Deals', 
            'Crazy Deals'
        ] },
        { id: 2, name: 'Regular', price: 9.99, benefits: [
            'Everything on Free', 
            'Unlimited Deals', 
            'Localized Deals', 
            'fantastic Deals', 
            'Crazy Deals'
        ] },
        { id: 3, name: 'Premium', price: 19.19, benefits: [
            'Everything on regular', 
            'Unlimited Deals', 
            'Localized Deals', 
            'fantastic Deals', 
            'Crazy Deals'
        ] },
    ]

    return (
        <div className='bg-indigo-300 p-4 mt-8'>
            <h1 className='text-6xl'>best deals of the town</h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quod quidem velit in quia saepe! Deleniti ducimus esse tempora itaque?</p>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-8'>
                {
                    pricingOptions.map(option => <PricingOption
                        key={option.id}
                        option={option}
                    ></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;