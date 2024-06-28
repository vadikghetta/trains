import { useState } from "react";
import styles from "./App.module.scss"
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { increment } from "@/redux/slices/counterSlice";


const App = () => {
    const [state, setState] = useState(0);
    const counterState = useAppSelector(state => state.counter).value;
    const dispatch = useAppDispatch();
    return (
        <div className={styles.main}>
            <h1>Hello {state}</h1>
            <button onClick={() => {
                setState(state => state += 1)
            }}>Click me</button>
            <h2>Hello from redux {counterState}</h2>
            <button onClick={() => {
                dispatch(increment())
            }}>Click me for redux</button>
        </div>
    )
}


export default App;