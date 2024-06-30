import { useAppSelector } from "@/redux/hooks";
import Box from "../box/Box"
import Heading from "../heading/Heading"
import Table from "../table/Table";
import TableRow from "../table-row/TableRow";

interface ITrainsListProps {
    handleActiveTrain(num: number): void
    active: number | null
}

const headerArr = ["Название", "Описание"];

const TrainsList = ({ handleActiveTrain, active }: ITrainsListProps) => {
    const { trains: { data } } = useAppSelector(state => state);
    return (
        <Box>
            <Heading tag="h2" with15Bottom>
                Поезда
            </Heading>
            <Table headerTitles={headerArr} data={data.map((item, index) => (
                <TableRow
                    activeClass={active && active === index}
                    data={item}
                    key={item.name}
                    onClick={() => {
                        handleActiveTrain(index)
                    }}
                />
            ))} />
        </Box>
    )
}

export default TrainsList;