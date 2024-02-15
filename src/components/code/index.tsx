import {HTMLAttributes, useMemo} from "react";
import styles from "./styles.module.css";
import {clsx} from "clsx";

interface CodeProps extends HTMLAttributes<HTMLPreElement> {
    code: string;
    className?: string;
    hideLines?: boolean;
    language: "bash" | "javascript" | "json" | "sparql" | "tsx" | "turtle" | "typescript";
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Prism = (window as unknown as any).Prism;

export default function Code({className, code, hideLines, language, ...props}: CodeProps) {
    const formattedCode = useMemo(() => Prism.highlight(code, Prism.languages[language], language), [code, language]);
    return (
        <div className={styles.container}>
            <pre className={clsx(`language-${language}`, {
                "line-numbers": !hideLines
            }, styles.code, className)} {...props}>
                <code className={`language-${language}`} dangerouslySetInnerHTML={{__html: formattedCode}}/>
            </pre>
        </div>
    )
}