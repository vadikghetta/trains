import { memo, useEffect, useState } from "react";
import Box from "../box/Box";
import Heading from "../heading/Heading";
import { ITrainsRoot } from "@/types/trains.interfaces";
import { useAppSelector } from "@/redux/hooks";
import Table from "../table/Table";
import TableRow from "../table-row/TableRow";
import Button from "../button/Button";
import styles from "./styles.module.scss";
import { submitForm } from "@/services";


interface ICharacteristicProps {
    active: number | null
}
const headerTitles = ["Ток двигателя", "Сила тяги", "Скорость"];


const Characteristic = memo(({ active }: ICharacteristicProps) => {
    const [state, setState] = useState<ITrainsRoot | null>(null);
    const { data } = useAppSelector(state => state.trains);
    const { preventFormSubmission } = useAppSelector(state => state.errors);
    useEffect(() => {
        if (active || active === 0) {
            setState(data[active]);

        }
    }, [active])

    return (
        <Box>
            <Heading tag="h2" with15Bottom>
                Характеристики
            </Heading>
            {state ? (
                <form onSubmit={(e) => {
                    if (preventFormSubmission) {
                        return
                    }
                    submitForm(e)
                }}>
                    <Heading tag="h3" with15Bottom>
                        {state.name}
                    </Heading>
                    <Table
                        headerTitles={headerTitles}
                        data={state.characteristics.map((item, index) => (
                            <TableRow
                                key={(`${state.name + index}`)}
                                data={item}
                            />
                        ))}
                    />
                    <div className={styles.submit}>
                        <Button disabled={preventFormSubmission}>
                            Отправить данные
                        </Button>
                    </div>
                </form>
            ) : (
                <Heading tag="h3" with15Bottom>
                    Выберете поезд
                </Heading>
            )}
        </Box>
    )
})

export default Characteristic;