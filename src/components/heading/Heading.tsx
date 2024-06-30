import clsx from "clsx";
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import styles from "./Heading.module.scss"

interface IHeadingProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
    tag: "h1" | "h2"
    children: ReactNode
}


const Heading = ({ tag, children, ...props }: IHeadingProps) => {
    switch (tag) {
        case "h1": {
            return <h1 className={clsx(styles.heading, styles.h1, props.className)} {...props}>{children}</h1>
        }
        case "h2": {
            return <h2 className={clsx(styles.heading, styles.h2, props.className)} {...props}>{children}</h2>
        }
        default: {
            return <></>
        }
    }
}