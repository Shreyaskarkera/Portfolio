import React from 'react'

const Button = (props) => {
    return (
        <div className='mt-20'>
            <button className='w-[130px] h-[50px] bg-[#2F2F2F] text-white rounded-2xl'>{props.name}</button>
        </div>
    )
}

export default Button
