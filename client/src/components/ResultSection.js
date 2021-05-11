import React from "react";

function ResultSection(props) {

    var resultData = props.data;
    return (
        <div className="singleResult">
            <a href={resultData.url} rel="noreferrer" target="_blank">{resultData.title}</a>
        </div> 
    );
}

export default ResultSection;