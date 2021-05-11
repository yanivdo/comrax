import React, { useState } from "react";
import Search from "./Search";
import SideBar from "./SideBar";
import ResultSection from "./ResultSection";
import Pagination from "./Pagination";
import InnerSearch from "./InnerSearch";

function SearchSection() {

    const [queryState, setQueryState] = useState([]);
    const [resultQueryState, setResultQueryState] = useState([]);
    const [pageState, setPageState] = useState(0);
    const [searchQueryState, setSearchQueryState] = useState("");
    const [resultQueryStateProtected, setResultQueryStateProtected] = useState([]);
    var limit = 20;
    var offset = pageState * limit;
    var pageLimit = (pageState + 1) * limit;
    if (pageLimit > resultQueryState.length) {
        pageLimit = resultQueryState.length;
    }
    var resultQuery = [];
    var pagination = [];

    if (resultQueryState.length > 0) {
        for (var i = offset; i < pageLimit; i++) {
            resultQuery.push(<ResultSection key={i} data={resultQueryState[i]} />);
            pagination = <Pagination
                pages={Math.floor(resultQueryState.length / limit) + 1}
                pageState={pageState}
                setPageState={setPageState}
            />;
        }
    }
    var sideBarQuery = [];
    sideBarQuery = queryState.map((item, i) => {
        return (<SideBar key={i} data={item}
            setResultQueryState={setResultQueryState}
            setSearchQueryState={setSearchQueryState}
            setResultQueryStateProtected={setResultQueryStateProtected}
        />);
    });

    return (
        <div className="searchWrapper">
            <div className="sideBarWrapper">
                {sideBarQuery}
            </div>
            <div className="innerSection">
                <Search
                    searchQueryState={searchQueryState}
                    setSearchQueryState={setSearchQueryState}
                    queryState={queryState}
                    setQueryState={setQueryState}
                    setResultQueryState={setResultQueryState}
                    setResultQueryStateProtected={setResultQueryStateProtected} />

                    <InnerSearch 
                    resultQueryState={resultQueryState}
                    setResultQueryState={setResultQueryState}
                    resultQueryStateProtected={resultQueryStateProtected} />
                <div className="resultWrapper">
                    {resultQuery}
                </div>
                {pagination}
            </div>
        </div>
    );
}

export default SearchSection;