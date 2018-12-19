import React from "react";

//function Home(props)-> Also applicable
function Home(x){
    return(
        <div>
            <h1>Message:{x.message},Value:{x.value}</h1>
            <li>
                <a href="Link">Link1</a>
            </li>
            <li>
                <a href="Link">Link2</a>
            </li>
        </div>
    );
}

export default Home;