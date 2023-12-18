import React from "react";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline"
import { useSelector, useDispatch } from "react-redux"
import { setSeed } from "../../slices/seedSlice";

const Seed = () => {
    const seed = useSelector(state => state.seed.value);
    const dispatch = useDispatch();

    return (
        <div className="flex items-center">
            <h3 className="text-zinc-950"><label htmlFor="seed">Seed:</label></h3>
            <input 
                type="number" 
                id="seed"
                min={0}
                value={seed}
                onChange={e => dispatch(setSeed(e.target.value))}
                className="bg-gray-50 border-none outline-none w-20 p-1 mx-3" 
                aria-description=""
            />
            <button onClick={() => dispatch(setSeed(Math.ceil(Math.random() * 1000)))}>
                <QuestionMarkCircleIcon className="h-8 w-8 text-zinc-800 hover:opacity-80" />
            </button>
        </div>
    )
}

export default Seed;