import React from 'react';
import { CheckCircleIcon, } from '@heroicons/react/solid';

const Benefit = (props) => {

    const{benefit}=props

    return (
        <p className='flex items-center'>
        <CheckCircleIcon className='w-4 h-5 text-green-500 mr-2'></CheckCircleIcon>

        {benefit}
    </p>
    );
};

export default Benefit;