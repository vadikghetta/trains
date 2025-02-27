import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Heading from "../heading/Heading";
import styles from "./App.module.scss"
import { useEffect, useState } from "react";
import { fetchTrains } from "@/redux/slices/trainsSlice";
import Loader from "../loader/Loader";
import TrainsList from "../trains-list/TrainsList";
import Characteristic from "../characteristic/Characteristic";



const App = () => {
    const { loading } = useAppSelector(state => state.trains);
    const [activeTrain, setActiveTrain] = useState<null | number>(null);
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchTrains());
    }, [dispatch])

    const handleActiveTrain = (num: number) => {
        setActiveTrain(num);
    }
    return (
        <main className={styles.main}>

            <Heading tag="h1" className={styles.title}>
                Поезда
            </Heading>
            {loading === "pending" ? <Loader /> : null}
            {loading === "succeeded" ? (
                <div className={styles.inner}>
                    <TrainsList
                        handleActiveTrain={handleActiveTrain}
                        active={activeTrain}
                    />
                    <Characteristic active={activeTrain} />
                </div>
            ) : null}
            {loading === "failed" ? <Heading tag="h2">Произошла ошибка</Heading> : null}
        </main>
    )
}


export default App;