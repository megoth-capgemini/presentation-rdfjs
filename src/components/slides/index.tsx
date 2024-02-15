import Intro from "./00-intro.mdx";
import Overview from "./10-overview.mdx";
import RdfIntro from "./20-rdf-intro.mdx";
import RdfSemantics from "./21-semantics.mdx";
import RdfTriples from "./22-triples.mdx";
import RdfModels from "./23-models.mdx";
import RdfSerializations from "./24-serializations.mdx";
import RdfVocabularies from "./25-vocabularies.mdx";
import RdfTurtle from "./26-turtle.mdx";
import JavaScriptIntro from "./30-javascript-intro.mdx";
import JavaScriptSyntax from "./31-syntax.mdx";
import JavaScriptTypes from "./32-typescript.mdx";
import ToolsIntro from "./40-tools-intro.mdx";
import ToolsRdflib from "./41-rdflib.mdx";
import ToolsLDO from "./42-ldo.mdx";
import ToolsShapes from "./43-ldo-cont.mdx";
import "./theme.css";

export default function Slides() {
    return <div className="slides">
        <section id="intro"><Intro/></section>
        <section id="overview"><Overview/></section>
        <section>
            <section id="rdf-intro"><RdfIntro/></section>
            <section id="rdf-semantic"><RdfSemantics/></section>
            <section id="rdf-triples"><RdfTriples/></section>
            <section id="rdf-models"><RdfModels/></section>
            <section id="rdf-serializations"><RdfSerializations/></section>
            <section id="rdf-vocabularies"><RdfVocabularies/></section>
            <section id="rdf-turtle"><RdfTurtle/></section>
        </section>
        <section>
            <section id="javascript-intro"><JavaScriptIntro/></section>
            <section id="javascript-syntax"><JavaScriptSyntax/></section>
            <section id="javascript-types"><JavaScriptTypes/></section>
        </section>
        <section>
            <section id="tools-intro"><ToolsIntro/></section>
            <section id="tools-rdflib"><ToolsRdflib/></section>
            <section id="tools-ldo"><ToolsLDO/></section>
            <section id="tools-shapes"><ToolsShapes/></section>
        </section>
    </div>
}