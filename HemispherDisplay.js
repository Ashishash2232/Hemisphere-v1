import React from "react";
import north from './image/north.jpg';
import south from './image/south.jpg';
const hemisphereconfig={
    Northern:{
        text:'it is northern hemisphere',
        picture: north
    },
    Southern:{
        text:'it is southern hemisphere',
        picture: south
    }
}
const HemisphereDisplay = ({latitude})=>
{
console.log(latitude)
const Hemisphere = latitude > 0 ? 'Northeren' : 'Southeren'
const picture = latitude > 0 ? north : south ;   

return(
        <div>
            <img src={picture} alt=""></img>
            {Hemisphere}
        </div>
    )
}
export default HemisphereDisplay;