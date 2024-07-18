import React from 'react';



export default function Title({title, size}) {
    return (
        <div className='font-sans font-normal w-full'>
            <h1 className={`${size}`}> {title} </h1>
        </div>
    );
}
