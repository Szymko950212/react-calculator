

export function Test(props: {test: string, test2?: number}) {
    return(
        <div>
            <h1>Helloł {props.test} {props.test2}</h1>
            <button>Przycisk</button>
        </div>
    );
}