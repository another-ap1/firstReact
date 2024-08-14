const App = () => (
    <div>
        <Person name="Grant" age={33} hobbies={['cars', 'skateboards', 'family', 'magic the gathering']}/>
        <Person name="Alicia" age={32} hobbies={['make up', 'dance', 'family']}/>
        <Person name="Charlotte" age={3} hobbies={['unicorns', 'sparkles', 'cake']}/>
        <Person name="Emilia" age={2} hobbies={['buzz lightyear', 'unicorns', 'playing']}/>

    </div>
)


ReactDOM.render(<App />, document.getElementById("root"))
