import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import styles from "./Box.module.scss";
import clsx from "clsx";

interface IBoxProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode
}

const Box = ({ children, className, ...props }: IBoxProps) => {
    return <div className={clsx(className, styles.box)} {...props}>{children}</div>
}

export default Box;