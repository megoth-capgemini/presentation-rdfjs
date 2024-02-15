import {HTMLAttributes, useMemo} from "react";
import styles from "./styles.module.css";
import {clsx} from "clsx";

interface CodeProps extends HTMLAttributes<HTMLPreElement> {
    code: string;
    language: "bash" | "javascript" | "json" | "sparql" | "tsx" | "turtle" | "typescript";
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Prism = (window as unknown as any).Prism;

export default function Code({code, language, ...props}: CodeProps) {
    const formattedCode = useMemo(() => Prism.highlight(code, Prism.languages[language], language), [code, language]);
    return (
        <div className={styles.container}>
            <pre className={clsx(`language-${language}`, styles.code)} {...props}>
                <code className={`language-${language}`} dangerouslySetInnerHTML={{__html: formattedCode}} />
            </pre>
        </div>
    )
}