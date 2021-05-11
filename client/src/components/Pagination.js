import React from "react";

function Pagination(props) {
    var pages = [];
    for (let number = 1; number <= props.pages; number++) {

        let current = '';
        if(number === props.pageState + 1){
            current = 'current';
        }
        pages.push(<div key={number} className={'pages ' + current} onClick={() => changePage(number)}>{number}</div>);
    }

    function changePage(page){
        props.setPageState(page - 1);

    }

    return (
        <div className="paginationWrapper">{pages}</div>
    );
}

export default Pagination;