import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Box from "../box/Box";
import Heading from "../heading/Heading";
import styles from "./App.module.scss"
import { useEffect } from "react";
import { fetchTrains } from "@/redux/slices/trainsSlice";
import Loader from "../loader/Loader";



const App = () => {
    const { trains: { data, loading } } = useAppSelector(state => state);
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchTrains());
    }, [dispatch])

    return (
        <main className={styles.main}>
            <div className="container">
                <Heading tag="h1" className={styles.title}>
                    Поезда
                </Heading>

                {loading === "pending" ? <Loader /> : null}
                {loading === "succeeded" ? (
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
                ) : null}
                {loading === "failed" ? <Heading tag="h2">Произошла ошибка</Heading> : null}
            </div>

        </main>
    )
}


export default App;