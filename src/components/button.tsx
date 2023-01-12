import React from "react";

export function Button() {
    const [value, setValue] = React.useState<string|number>();
    const [value2, setValue2] = React.useState<string|number>();
    console.log(Number(value));

    function onChange(event: React.ChangeEvent<HTMLInputElement>) {
        if(event.target.value.length <5){setValue2(event.target.value)}
    }

    return(
        <div>
            <input value={value} onChange={(event) => {if(event.target.value.length <5){setValue(event.target.value)}}}></input>
            <input value={value2} onChange={onChange}></input>
            <button onClick={(value) => {if(!isNaN(Number(value)) && !isNaN(Number(value2))){setValue(Number(value)*Number(value2))}}}>razy dwa</button>
        </div>
    );
}