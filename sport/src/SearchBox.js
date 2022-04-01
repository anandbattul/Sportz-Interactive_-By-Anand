import React from 'react'

export default function SearchBox(props) {
    return (
        <div>
            <input 
                type='text' 
                placeholder="Search PlayerList" 
                className="pa3 ba b--green bg-lightest-blue"
                onChange={(event) => props.onInputChange(event.target.value)}/>
        </div>
    )
}



// function(event){
//     onInputChange(event);
// }


// () => {
//     onInputChange("tirth")
// }()

// (event) => onInputChange(event)

// onChange={(event) => onInputChange(event)}

