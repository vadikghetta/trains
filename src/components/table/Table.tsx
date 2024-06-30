import { DetailedHTMLProps, HTMLAttributes, ReactElement } from "react";
import styles from "./Table.module.scss";
import clsx from "clsx";

interface ITableProps extends DetailedHTMLProps<HTMLAttributes<HTMLTableElement>, HTMLTableElement> {
    headerTitles: string[]
    data: ReactElement<HTMLTableRowElement>[]
}

const Table = ({ headerTitles, data, className, ...props }: ITableProps) => {
    return (
        <table {...props} className={clsx(className, styles.table)}>
            <thead >
                <tr>
                    {headerTitles.map((el, index) => (
                        <th key={index}>
                            {el}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data}
            </tbody>
        </table >
    )
}

export default Table;