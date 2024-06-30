import { useAppSelector } from "@/redux/hooks";
import Box from "../box/Box"
import Heading from "../heading/Heading"
import Table from "../table/Table";
import TableRow from "../table-row/TableRow";

const headerArr = ["Название", "Описание"]

const TrainsList = () => {
    const { trains: { data } } = useAppSelector(state => state);
    return (
        <Box>
            <Heading tag="h2">
                Поезда
            </Heading>
            <Table headerTitles={headerArr} data={data.map((item) => (
                <TableRow data={item} key={item.name} />
            ))} />
        </Box>
    )
}

export default TrainsList;