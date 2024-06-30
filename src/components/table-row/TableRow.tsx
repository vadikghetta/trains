import { ITrainsCharacteristic, ITrainsRoot } from "@/types/trains.interfaces";
import { DetailedHTMLProps, HTMLAttributes } from "react";

type TRowType = ITrainsRoot | ITrainsCharacteristic


interface ITableProps extends DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> {
    data: TRowType
}

const isTrain = (item: TRowType): item is ITrainsRoot => {
    return "name" in item
}
const isCharacteristic = (item: TRowType): item is ITrainsCharacteristic => {
    return "speed" in item
}

const TableRow = ({ data }: ITableProps) => {
    return (
        <tr>
            {isTrain(data) ? (
                <>
                    <td>{data.name}</td>
                    <td>{data.description}</td>
                </>
            ) : null}
            {isCharacteristic(data) ? (
                <>
                    <td>{data.engineAmperage}</td>
                    <td>{data.force}</td>
                    <td>{data.speed}</td>
                </>
            ) : null}
        </tr>
    )
}


export default TableRow;