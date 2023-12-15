import InfiniteScroll from "react-infinite-scroll-component";
import { faker, fakerEN_US, fakerPL, fakerKA_GE } from '@faker-js/faker';
import { generateFakeUsers } from "../utils/generateFakeUsers";
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';

const getLocale = (region) => {
    return region === "USA" ? fakerEN_US :
           region === "Poland" ? fakerPL :
           region === "Georgia" ? fakerKA_GE : faker;
}

const Table = () => {
    const [userData, setUserData] = useState([]);
    const [displayedUsers, setDisplayedUsers] = useState([]);
    // const [currentPage, setCurrentPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const generatedUsersSize = 100;
    const initialDisplayedUsersSize = 20;
    const fetchSize = 10;

    const region = useSelector(state => state.region.value);
    const seed = useSelector(state => state.seed.value);

    useEffect(() => {
        const fetchData = () => {
            // const combinedSeed = seed + currentPage;
            const newUserData = generateFakeUsers(getLocale(region), Number(seed), generatedUsersSize);
            setUserData(newUserData);
            setDisplayedUsers(newUserData.slice(0, initialDisplayedUsersSize));
        };

        fetchData();
    }, [region, seed, setUserData, setDisplayedUsers])

    const fetchMoreData = () => {
        if (displayedUsers.length <= generatedUsersSize) {
            // setCurrentPage(Math.round(displayedUsers.length / 10));
            setTimeout(() => {
                setDisplayedUsers(prevUsers =>
                    prevUsers.concat(userData.slice(prevUsers.length, prevUsers.length + fetchSize))
                );
            }, 700);
        } else setHasMore(false);
    }

    return (
        <div className="overflow-auto mx-16 my-10">
            <InfiniteScroll 
                dataLength={displayedUsers.length}
                next={fetchMoreData}
                hasMore={hasMore}
                height={540}
            >
                <table className="w-full text-sm">
                    <thead className="text-xs uppercase text-zinc-100 bg-zinc-600">
                        <tr>
                            <th className="py-3 border border-zinc-600"></th>
                            <th className="py-3 border border-zinc-600">ID</th>
                            <th className="py-3 border border-zinc-600">Name</th>
                            <th className="py-3 border border-zinc-600">Address</th>
                            <th className="py-3 border border-zinc-600">Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayedUsers.map((item, i) => {
                            return (
                                <tr key={i}>
                                    <td className="px-3 py-3 whitespace-nowrap text-center border border-collapse border-zinc-600">{i++}</td>
                                    <td className="px-3 py-3 whitespace-nowrap text-center border border-collapse border-zinc-600">{item.id}</td>
                                    <td className="px-3 py-3 whitespace-nowrap text-center border border-collapse border-zinc-600">{item.name}</td>
                                    <td className="px-3 py-3 whitespace-nowrap text-center border border-collapse border-zinc-600">{item.address}</td>
                                    <td className="px-3 py-3 whitespace-nowrap text-center border border-collapse border-zinc-600">{item.phone}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </InfiniteScroll>

            {/* <h4 className="my-5 text-lg">Page: {currentPage}</h4> */}
        </div>
    )
}

export default Table;