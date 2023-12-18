// import React from "react";
import { CSVLink } from "react-csv";
import { useSelector } from "react-redux";

const ExportBtn = () => {
    const users = useSelector(state => state.users.value);

    return (
        <div className="flex items-center">
            <button className="border-2 text-zinc-950 border-zinc-600 bg-transparent px-5 py-2 hover:bg-zinc-600 font-semibold hover:text-zinc-100 hover:border-transparent rounded transition ease-in duration-150">
                <CSVLink data={users}>Export</CSVLink>
            </button>
        </div>
    )
}

export default ExportBtn;