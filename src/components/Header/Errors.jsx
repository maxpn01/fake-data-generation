import { useState } from "react";

const Errors = () => {
    const [sliderValue, setSliderValue] = useState(1);
    const [fieldValue, setFieldValue] = useState(1);
    const [errorValue, setErrorValue] = useState(1);
    const sliderMaxValue = 10;

    return (
        <div className="flex items-center">
            <h3 className="text-zinc-950"><label htmlFor="minmax-range">Errors:</label></h3>
            <input 
                type="range" id="minmax-range" min="1" max={sliderMaxValue}
                value={sliderValue}
                onChange={e => {
                    setSliderValue(e.target.value);
                    setErrorValue(e.target.value);
                    console.log(errorValue);
                    setFieldValue(e.target.value);
                }}
                className="w-32 h-2 mx-5 rounded-lg appearance-none cursor-pointer bg-zinc-400 accent-zinc-600" 
            />
            <input 
                type="number" 
                value={fieldValue}
                onChange={e => { 
                    setFieldValue(e.target.value);
                    setErrorValue(e.target.value);
                    console.log(errorValue);
                    setSliderValue(fieldValue / sliderMaxValue);
                }}
                className="bg-gray-50 border-none outline-none w-14 p-1" 
            />
        </div>
    )
}

export default Errors;