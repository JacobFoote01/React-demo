import RedButton from "./RedButton.jsx"
import ClickCounter from "./ClickCounter.jsx"

function App() {
    let today = new Date().toDateString()

    return (
        <div>
            <h1>Today is {today}</h1>
            <p>My First React App</p>
            {/* <RedButton
            message='Click to increment'
            incrementCount={incrementCount}
            number={1}
            /> */}
            <ClickCounter initialCount={1}/>
        </div>
    )
}

export default App