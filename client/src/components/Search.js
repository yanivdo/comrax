import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function Search(props) {
    const [searchState, setSearchState] = useState("");
    return (
        <div className="searcBoxhWrapper">
            <Form className="searcBox">
                <Form.Group controlId="Search">
                    <Form.Control type="search" name="search" onChange={(e) => handleChange(e)} value={props.searchQueryState} placeholder="" />
                </Form.Group>
                <Button variant="primary" onClick={(e) => searchSubmit(e)} type="submit">
                    Search
                </Button>
            </Form>
        </div>
    );

    function searchSubmit(e){
        e.preventDefault();
        fetch("http://localhost/ManageRequest/getApiData", {
            method: "POST",
            withCredentials: true,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({
                search: searchState
            }),
        }).then((response) => response.json())
            .then((result) => {
                if(searchState.length > 0){
                updateQueryState();
                }
                props.setResultQueryState(result);
                var titleQuery = [];
                for(var i = 0; i < result.length;i++){
                    titleQuery.push(result[i].title);
                }
                props.setResultQueryStateProtected(titleQuery);
            });
    }

    function updateQueryState(){
        var queryArray = props.queryState.slice();
        var queryArrayCheck = checkDoubleInArray(queryArray);
        if(queryArrayCheck === 1){
            queryArray.push(searchState);
            
            props.setQueryState(queryArray);
        }
    }

    function checkDoubleInArray(queryArray){
        var status = 1;
        queryArray.map((item, i) => {
            if(searchState.toString() === item.toString()){
                status = -1;
            }
        });
        return status;
    }

    function handleChange(e) {
        props.setSearchQueryState(e.target.value);
        setSearchState(e.target.value);
    }

}

export default Search;
