import {ReactNode} from "react";

interface Props {
    children: ReactNode
}

export default function Fragment({children}: Props) {
    return <li className="fragment">{children}</li>
}