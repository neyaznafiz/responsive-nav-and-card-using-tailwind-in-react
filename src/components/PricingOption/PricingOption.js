
import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import Benefit from '../Benefit/Benefit';

const PricingOption = (props) => {

    const { name, price, benefits } = props.option

    return (
        <div className='bg-white p-4 rounded-lg'>
            <h2 className='bg-indigo-300 py-2 rounded text-xl font-bold'>{name}</h2>

            <p>
                <span className='text-4xl font-bold'>${price}</span>
                <span className='text-xl font-bold text-gray-500'>/mo</span>
            </p>

            <div>
                <h3 className='text-2xl text-left'>Benefits :</h3>

                {/* <p className='flex items-center'>
                    <CheckCircleIcon className='w-4 h-5 text-green-500 mr-2'></CheckCircleIcon>

                    Awesome Features
                </p> */}

                {
                    benefits.map(benefit => <Benefit
                    benefit={benefit}
                    ></Benefit>)
                }
            </div>

            <button className='bg-green-500 text-white flex gap-2 px-3 py-1 rounded justify-center w-full mt-6  hover:text-green-700 font-bold'>
                Buy Now <ArrowRightIcon className='w-6 h-6'></ArrowRightIcon>
            </button>

        </div>
    );
};

export default PricingOption;