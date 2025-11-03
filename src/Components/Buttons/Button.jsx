import React from 'react'

const Button = (props) => {
    return (
        <div>
            <button className='w-[100px] h-[50px] bg-[#2F2F2F] text-white text-sm rounded-2xl'>{props.name}</button>
        </div>
    )
}

export default Button
