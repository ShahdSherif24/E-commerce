import React from 'react'
import { RotatingLines } from 'react-loader-spinner';

export default function Loading() {
    return (
        <div>
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-15 z-50">
              <RotatingLines
                visible={true}
                height="96"
                width="96"
                color="grey"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />  
            </div>
            
        </div>
    )
}
