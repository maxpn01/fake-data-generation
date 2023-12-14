import React from "react";

const Errors = () => {
    const [errorValue, setErrorValue] = React.useState(0);

    return (
        <div className="flex items-center">
            <h3 className="text-zinc-950"><label htmlFor="minmax-range">Errors:</label></h3>
            <input 
                type="range" id="minmax-range" min="0" max="10" 
                value={errorValue/100}
                onChange={e => setErrorValue(e.target.value*100)} 
                className="w-32 h-2 mx-5 rounded-lg appearance-none cursor-pointer bg-zinc-400 accent-zinc-600" 
            />
            <input 
                type="text" 
                value={errorValue}
                onChange={e => setErrorValue(e.target.value)} 
                className="bg-gray-50 border-none outline-none w-14 p-1" 
            />
        </div>
    )
}

export default Errors;