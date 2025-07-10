import React from "react";


function ComponentOne({name,Role,image})
{
    return(
        <>
        <h1>name:{name}</h1>
        <h2>Role:{Role}</h2>
        <img src={image} alt="Player-Name" />
        
        </>
    )
}
export default ComponentOne