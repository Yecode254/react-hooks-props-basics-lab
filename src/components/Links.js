import React from "react"

function links(props) {
    return(
        <links>
        <h3>Links</h3>
        <a href={props.github}>{props.github}</a>
        <a href={props.linkedin}>{props.linkedin}</a>
        </links>
    );
}
export default links