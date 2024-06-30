import { useEffect, useState } from "react";
import Box from "../box/Box";
import Heading from "../heading/Heading";
import { ITrainsRoot } from "@/types/trains.interfaces";
import { useAppSelector } from "@/redux/hooks";
import Table from "../table/Table";
import TableRow from "../table-row/TableRow";


interface ICharacteristicProps {
    active: number | null
}
const headerTitles = ["Ток двигателя", "Сила тяги", "Скорость"];


const Characteristic = ({ active }: ICharacteristicProps) => {
    const [state, setState] = useState<ITrainsRoot | null>(null);
    const { trains: { data } } = useAppSelector(state => state);
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
                <>
                    <Heading tag="h3" with15Bottom>
                        {state.name}
                    </Heading>
                    <Table
                        headerTitles={headerTitles}
                        data={state.characteristics.map((item, index) => (
                            <TableRow
                                key={index}
                                data={item}
                            />
                        ))}
                    />

                </>
            ) : (
                <Heading tag="h3" with15Bottom>
                    Выберете поезд
                </Heading>
            )}
        </Box>
    )
}

export default Characteristic;