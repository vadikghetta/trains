import Box from "../box/Box";
import Heading from "../heading/Heading";
import styles from "./App.module.scss"



const App = () => {

    return (
        <main className={styles.main}>
            <div className="container">
                <Heading tag="h1" className={styles.title}>
                    Поезда
                </Heading>
                <div className={styles.inner}>
                    <Box>
                        <Heading tag="h2">
                            Поезда
                        </Heading>
                    </Box>
                    <Box>
                        <Heading tag="h2">
                            Характеристики
                        </Heading>
                    </Box>
                </div>
            </div>
        </main>
    )
}


export default App;