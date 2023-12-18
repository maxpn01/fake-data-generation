import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { updateErrorAmount } from "../../slices/errorsSlice";

const Errors = () => {
    const [sliderValue, setSliderValue] = useState(0);
    const sliderMaxValue = 10;

    const errorAmount = useSelector(state => state.errorAmount.value);
    const dispatch = useDispatch();

    return (
        <div className="flex items-center">
            <h3 className="text-zinc-950"><label htmlFor="minmax-range">Errors:</label></h3>
            <input 
                type="range" id="minmax-range" min="0" max={sliderMaxValue}
                value={sliderValue}
                onChange={e => {
                    setSliderValue(e.target.value);
                    dispatch(updateErrorAmount(e.target.value));
                }}
                className="w-32 h-2 mx-5 rounded-lg appearance-none cursor-pointer bg-zinc-400 accent-zinc-600" 
            />
            <input 
                type="number" 
                value={errorAmount}
                min="0"
                max="1000"
                onChange={e => { 
                    if (e.target.value <= 1000) {
                        setSliderValue(errorAmount / sliderMaxValue);
                        dispatch(updateErrorAmount(e.target.value));
                    }
                }}
                className="bg-gray-50 border-none outline-none w-14 p-1" 
            />
        </div>
    )
}

export default Errors;