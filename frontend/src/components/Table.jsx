import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const Table = () => {
    const [dataSource, setDataSource] = React.useState(Array.from({length: 20}));
    // const [currentPage, setCurrentPage] = React.useState(1);
    const [hasMore, setHasMore] = React.useState(true);
    const fetchSize = 10;

    const fetchMoreData = () => {
        if (dataSource.length <= 90) {
            // setCurrentPage(Math.round(dataSource.length / 10));
            setTimeout(() => {
                setDataSource(dataSource.concat(Array.from({length: fetchSize})));
            }, 700);
        } else setHasMore(false);
    }

    return (
        <div className="overflow-auto mx-16 my-10">
            <InfiniteScroll 
                dataLength={dataSource.length}
                next={fetchMoreData}
                hasMore={hasMore}
                height={530}
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
                        {dataSource.map((item, i) => {
                            return (
                                <tr>
                                    <td className="px-3 py-3 whitespace-nowrap text-center border border-collapse border-zinc-600">{i++}</td>
                                    <td className="px-3 py-3 whitespace-nowrap text-center border border-collapse border-zinc-600">050a00c0-1a9f-4440-b9f</td>
                                    <td className="px-3 py-3 whitespace-nowrap text-center border border-collapse border-zinc-600">John Smith</td>
                                    <td className="px-3 py-3 whitespace-nowrap text-center border border-collapse border-zinc-600">CA, Maine, P. Alto-Main, PO Box 68238</td>
                                    <td className="px-3 py-3 whitespace-nowrap text-center border border-collapse border-zinc-600">+1 589-789-8112</td>
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