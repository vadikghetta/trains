import { useState } from "react";
import styles from "./App.module.scss"

const App = () => {
    const [state, setState] = useState(0)
    return (
        <div className={styles.main}>
            <h1>Hello {state}</h1>
            <button onClick={() => {
                setState(state => state += 1)
            }}>Click me</button>
        </div>
    )
}


export default App;