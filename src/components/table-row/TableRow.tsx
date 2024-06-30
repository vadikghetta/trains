import { ITrainsCharacteristic, ITrainsRoot } from "@/types/trains.interfaces";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./TableRow.module.scss";
import clsx from "clsx";
import TableRowInputs from "./TableRowInputs";


const isTrain = (item: TRowType): item is ITrainsRoot => {
    return "name" in item
}
const isCharacteristic = (item: TRowType): item is ITrainsCharacteristic => {
    return "speed" in item
}



type TRowType = ITrainsRoot | ITrainsCharacteristic;
interface ITableProps extends DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> {
    data: TRowType
    activeClass?: boolean
}

const TableRow = ({ data, className, activeClass, ...props }: ITableProps) => {
    return (
        <>
            {isTrain(data) ? (
                <tr className={clsx(className, styles.row, {
                    [styles.activeRow]: activeClass
                })} {...props}>
                    <td>{data.name}</td>
                    <td>{data.description}</td>
                </tr>
            ) : null}
            {isCharacteristic(data) ? (
                <>
                    <TableRowInputs data={data} />
                </>
            ) : null}
        </>
    )
}


export default TableRow;