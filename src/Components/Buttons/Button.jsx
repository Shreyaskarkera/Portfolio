import React from 'react'

const Button = (props) => {
    return (
        <div>
            <a href={props.href} target='_blank'>
                <button className='w-[50px] h-[25px] md:w-[100px] md:h-[50px] bg-[#2F2F2F] text-white md:text-sm text-[10px] rounded-2xl md:rounded-2xl '>{props.name}</button>
            </a>
        </div>
    )
}

export default Button
