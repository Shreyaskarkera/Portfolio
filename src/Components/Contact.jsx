import React from 'react'
import Button from './Buttons/Button'
import NavigationButton from './NavigationButton'

const Contact = () => {

    return (
        <>
            <div className='h-screen px-4 md:px-12 lg:px-24 flex flex-col justify-center '>
                <p className='tracking-[0.12em] md:tracking-[0.20em] text-[22px]  text-[var(--text-color)]'>Let’s collaborate</p>
                <p className='text-3xl sm:text-4xl md:text-6xl lg:text-6xl font-normal text-[var(--maintext-color)] tracking-[0.12em] md:tracking-[0.20em] md:mb-10'>Contact <span className='text-white'>me</span></p>

                <p className='tracking-[0.12em] md:tracking-[0.20em] text-[22px]  text-[var(--text-color)]'>shreyasbkutlu@gmail.com</p>
                <div className="flex flex-row gap-4 sm:gap-6 md:mt-20 mt-20 mb-4 items-center justify-start">
                    <Button name='Instagram' />
                    <Button name='Linkedin' />
                    <Button name='Pafolios' />
                </div>
            </div>
            <NavigationButton name='Back To Top' className="rotate-180" />
        </>
    )
}

export default Contact
