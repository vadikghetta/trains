import { ITrainsCharacteristic } from "@/types/trains.interfaces";
import { useState } from "react";


const TableRowInputs = ({ data }: { data: ITrainsCharacteristic }) => {
    const [state, setState] = useState<ITrainsCharacteristic>({ ...data })

    return (
        <>
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
        </>
    )
}


export default TableRowInputs;