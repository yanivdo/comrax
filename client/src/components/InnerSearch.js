import React, { useState } from "react";
import { FormControl } from "react-bootstrap";

function InnerSearch(props) {

    const [totalSearchResult, setTotalSearchResult] = useState(0);


    function handleChange(e) {
        var value = e.target.value;
        var innerSearchResult = {};
        var resultArray = props.resultQueryState.slice();

        innerSearchResult = props.resultQueryStateProtected.map((item, i) => {
            return changeResultText(item, value);
        });
        var count = 0;
        innerSearchResult.map((item, i) => {
            item.map((itemInner, j) => {
                if (typeof itemInner === 'object' && itemInner !== null) {
                    count++;
                }
            });
        });
        setTotalSearchResult(count);
        for (let i = 0; i < innerSearchResult.length; i++) {
            resultArray[i].title = innerSearchResult[i];
        }
        props.setResultQueryState(resultArray);
    }

    function changeResultText(title, value) {
        const reactStringReplace = require('react-string-replace');
        var result = reactStringReplace(title, value, (match, i) => (
            <div key={i} className="innerSearch">{match}</div>
        ));
        return result;
    }

    return (
        <div className="innerSearchBox">
            <FormControl
                placeholder="Search in results" onChange={(e) => handleChange(e)}
            />
            <div className="totalSearchResult">{totalSearchResult}</div>
        </div>
    );
}

export default InnerSearch;