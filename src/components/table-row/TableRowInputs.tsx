import { ITrainsCharacteristic } from "@/types/trains.interfaces";
import { DetailedHTMLProps, HTMLAttributes, SetStateAction, useState } from "react";
import styles from "./TableRow.module.scss";
import clsx from "clsx";
import { Dispatch } from "@reduxjs/toolkit";

interface ITableRowInputsProps extends DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> {
    data: ITrainsCharacteristic
}
interface IErrorStatus {
    engineAmperage: boolean
    force: boolean
    speed: boolean
}

const checkValueMoreZero = (val: string, key: keyof IErrorStatus, setState: React.Dispatch<SetStateAction<IErrorStatus>>) => {
    if (!isNaN(+val)) {
        setState(state => {
            return {
                ...state,
                [key]: true
            }
        })
    } else {
        console.log("here")
        setState(state => {
            return {
                ...state,
                [key]: false
            }
        })
    }
}

const TableRowInputs = ({ data, className, ...props }: ITableRowInputsProps) => {
    const [state, setState] = useState<ITrainsCharacteristic>({ ...data });
    const [error, setError] = useState<IErrorStatus>({
        engineAmperage: false,
        force: false,
        speed: false
    });

    console.log(error)

    return (
        <tr className={clsx(className, styles.row, styles.rowWithInputs)}  {...props}>
            <td>
                <input
                    type="number"
                    onChange={(e) => {
                        setState({ ...state, engineAmperage: e.target.value })
                        checkValueMoreZero(e.target.value, "engineAmperage", setError)
                    }}
                    value={state.engineAmperage}
                    className={clsx({
                        [styles.rowError]: error.engineAmperage
                    })}
                />
            </td>
            <td>
                <input
                    type="number"
                    onChange={(e) => {
                        setState({ ...state, force: e.target.value })
                        checkValueMoreZero(e.target.value, "force", setError)
                    }}
                    className={clsx({
                        [styles.rowError]: error.force
                    })}
                    value={state.force}
                />
            </td>
            <td>
                <input
                    className={clsx({
                        [styles.rowError]: error.speed
                    })}
                    type="number"
                    onChange={(e) => {
                        setState({ ...state, speed: e.target.value })
                        checkValueMoreZero(e.target.value, "speed", setError)
                    }}
                    value={state.speed}

                />

            </td>
        </tr>
    )
}


export default TableRowInputs;