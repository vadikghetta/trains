import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import styles from "./Button.module.scss";
import clsx from "clsx";

interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode
}


const Button = ({ children, className, ...props }: IButtonProps) => {
    return (
        <button className={clsx(className, styles.button)} {...props}>{children}</button>
    )
}



export default Button;