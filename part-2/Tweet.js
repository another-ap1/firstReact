const Tweet = (props) => (
    <div class="tweet">
        <h1>{props.username}</h1>
        <h2>{props.name}</h2>
        <p>{props.message}</p>
    </div>
)