import React from "react";

function SideBar(props) {

    return (
        <div className="sideBarQuery" name="sideBar" value={props.data} onClick={() => changeResult()}>{props.data}</div>
    );

    function changeResult(){
        fetch("http://localhost/ManageRequest/getApiData", {
            method: "POST",
            withCredentials: true,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({
                search: props.data
            }),
        }).then((response) => response.json())
            .then((result) => {
                props.setResultQueryState(result);
                props.setSearchQueryState(props.data);
                var titleQuery = [];
                for(var i = 0; i < result.length;i++){
                    titleQuery.push(result[i].title);
                }
                props.setResultQueryStateProtected(titleQuery);
            });
    }
}








export default SideBar;