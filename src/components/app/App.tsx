import { useState } from "react";

const App = () => {
    const [state, setState] = useState(0)
    return (
        <h1>Hello {state}</h1>
    )
}


export default App;