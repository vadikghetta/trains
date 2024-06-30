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
        <tr className={clsx(className, styles.row, {
            [styles.activeRow]: activeClass,
            [styles.rowWithInputs]: isCharacteristic(data)
        })} {...props}>
            {isTrain(data) ? (
                <>
                    <td>{data.name}</td>
                    <td>{data.description}</td>
                </>
            ) : null}
            {isCharacteristic(data) ? (
                <>
                    <TableRowInputs data={data} />
                </>
            ) : null}
        </tr>
    )
}


export default TableRow;