import InfiniteScroll from "react-infinite-scroll-component";
import { faker, fakerEN_US, fakerPL, fakerKA_GE } from "@faker-js/faker";
import { generateFakeUsers } from "../utils/fakeUserGenerator";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUsers } from "../slices/usersSlice";

const getLocale = (region) => {
    return region === "USA" ? fakerEN_US :
           region === "Poland" ? fakerPL :
           region === "Georgia" ? fakerKA_GE : faker;
}

const Table = () => {
    const [userData, setUserData] = useState([]);
    const [displayedUsers, setDisplayedUsers] = useState([]);
    const [hasMore, setHasMore] = useState(true);

    const generatedDataSize = 200;
    const displayedDataSize = 20;

    const fetchSize = 10;
    const fetchMoreDataDelay = 500;

    const tableHeight = 540;

    const dispatch = useDispatch();

    const region = useSelector(state => state.region.value);
    const errorAmount = useSelector(state => state.errorAmount.value);
    const seed = useSelector(state => state.seed.value);

    useEffect(() => {
        const fetchData = () => {
            const newUserData = generateFakeUsers(getLocale(region), Number(seed), generatedDataSize, Number(errorAmount));
            setUserData(newUserData);
            setDisplayedUsers(newUserData.slice(0, displayedDataSize));
            dispatch(updateUsers(newUserData));
        };

        fetchData();
    }, [region, seed, errorAmount, setUserData, setDisplayedUsers])

    const fetchMoreData = () => {
        if (displayedUsers.length <= generatedDataSize) {
            setTimeout(() => {
                setDisplayedUsers(prevUsers =>
                    prevUsers.concat(userData.slice(prevUsers.length, prevUsers.length + fetchSize))
                );
            }, fetchMoreDataDelay);
        } else setHasMore(false);
    }

    return (
        <div className="overflow-auto mx-16 my-10">
            <InfiniteScroll 
                dataLength={displayedUsers.length}
                next={fetchMoreData}
                hasMore={hasMore}
                height={tableHeight}
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
                                <tr key={item.id}>
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
        </div>
    )
}

export default Table;