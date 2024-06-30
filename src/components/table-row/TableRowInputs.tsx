import { ITrainsCharacteristic } from "@/types/trains.interfaces";
import { DetailedHTMLProps, HTMLAttributes, useState } from "react";
import styles from "./TableRow.module.scss";
import clsx from "clsx";

interface ITableRowInputsProps extends DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> {
    data: ITrainsCharacteristic
}


const TableRowInputs = ({ data, className, ...props }: ITableRowInputsProps) => {
    const [state, setState] = useState<ITrainsCharacteristic>({ ...data })

    return (
        <tr className={clsx(className, styles.row, styles.rowWithInputs)}  {...props}>
            <td>
                <input type="number" value={state.engineAmperage} onChange={(e) => {
                    setState({ ...state, engineAmperage: +e.target.value })
                }} />
            </td>
            <td>
                <input type="number" value={state.force} onChange={(e) => {
                    setState({ ...state, force: +e.target.value })
                }} />
            </td>
            <td><input type="number" value={state.speed} onChange={(e) => {
                setState({ ...state, speed: +e.target.value })
            }} /></td>
        </tr>
    )
}


export default TableRowInputs;