import React from "react";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline"

const Seed = () => {
    const [seedValue, setSeedValue] = React.useState(0);

    return (
        <div className="flex items-center">
            <h3 className="text-zinc-950"><label htmlFor="seed">Seed:</label></h3>
            <input 
                type="text" 
                id="seed"
                value={seedValue}
                onChange={e => setSeedValue(e.target.value)}
                className="bg-gray-50 border-none outline-none w-20 p-1 mx-3" 
                aria-description=""
            />
            <button onClick={() => setSeedValue(28546469)}>
                <QuestionMarkCircleIcon className="h-8 w-8 text-zinc-800 hover:opacity-80" />
            </button>
        </div>
    )
}

export default Seed;