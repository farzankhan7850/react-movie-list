import React from "react";
import './ListOfMovies.css';

function listOfMovies(props) {

    return (
        <>
            {props.dB[props.movie].map((book) => (
                <ul className="movieBlock p-2 m-1 " key={book.name}>

                    <div className="  fw-bolder ">{book.name}</div>
                    <div className="">Rating :{book.rating}</div>
                </ul>
            ))}
        </>
    );
}

export default listOfMovies;