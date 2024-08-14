const Person = (props) => {

    let message = props.age > 18 ? "Please go vote!" : "You must be 18 to vote.";
    
    return (
        <div>
            <p>Learn some information about {props.name}</p>
            <h3>{message}</h3>
            <h4>{props.name}'s Hobbies!</h4>
            <ul>
                {props.hobbies.map(h =>
                    <li>{h}</li>
                )}
            </ul>

        </div>
    )
}