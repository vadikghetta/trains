import Heading from "../heading/Heading";
import styles from "./App.module.scss"



const App = () => {

    return (
        <main className={styles.main}>
            <div className="container">
                <Heading tag="h1" className={styles.title}>
                    Поезда
                </Heading>
            </div>
        </main>
    )
}


export default App;