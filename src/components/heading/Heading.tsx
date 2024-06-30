import clsx from "clsx";
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import styles from "./Heading.module.scss"

interface IHeadingProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
    tag: "h1" | "h2" | "h3"
    children: ReactNode
}


const Heading = ({ tag, children, className, ...props }: IHeadingProps) => {
    switch (tag) {
        case "h1": {
            return <h1 className={clsx(className, styles.heading, styles.h1)} {...props}>{children}</h1>
        }
        case "h2": {
            return <h2 className={clsx(className, styles.heading, styles.h2)} {...props}>{children}</h2>
        }
        case "h3": {
            return <h2 className={clsx(className, styles.heading, styles.h3)} {...props}>{children}</h2>
        }
        default: {
            return <></>
        }
    }
}


export default Heading;