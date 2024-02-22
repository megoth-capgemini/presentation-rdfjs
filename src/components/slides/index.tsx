import Intro from "./00-intro.mdx";
import Overview from "./10-overview.mdx";
import Motivation from "./20-motivation.mdx";
import MotivationChallenge from "./21-challenge.mdx";
import RdfIntro from "./30-rdf-intro.mdx";
import RdfSemantics from "./31-semantics.mdx";
import RdfTriples from "./32-triples.mdx";
import RdfModels from "./33-models.mdx";
import RdfVocabularies from "./34-vocabularies.mdx";
import RdfSerializations from "./35-serializations.mdx";
import RdfTurtle from "./36-turtle.mdx";
import RdfJsonLD from "./37-jsonld.mdx";
import RdfJsonLDPart2 from "./38-jsonld-cont.mdx";
import JavaScriptIntro from "./40-javascript-intro.mdx";
import JavaScriptSyntax from "./41-syntax.mdx";
import JavaScriptTypes from "./42-typescript.mdx";
import ToolsIntro from "./50-tools-intro.mdx";
import ToolsRdflib from "./51-rdflib.mdx";
import ToolsLDO from "./52-ldo.mdx";
import ToolsShapes from "./53-ldo-cont.mdx";
import ConclusionIntro from "./60-conclusion.mdx";
import ConclusionMore from "./61-more.mdx";
import ConclusionThanks from "./62-thanks.mdx";
import "./theme.css";

export default function Slides() {
    return <div className="slides">
        <section id="intro"><Intro/></section>
        <section id="overview"><Overview/></section>
        <section>
            <section id="motivation"><Motivation/></section>
            <section id="motivation-challenge"><MotivationChallenge/></section>
        </section>
        <section>
            <section id="rdf"><RdfIntro/></section>
            <section id="rdf-semantics"><RdfSemantics/></section>
            <section id="rdf-triples"><RdfTriples/></section>
            <section id="rdf-models"><RdfModels/></section>
            <section id="rdf-vocabularies"><RdfVocabularies/></section>
            <section id="rdf-serializations"><RdfSerializations/></section>
            <section id="rdf-turtle"><RdfTurtle/></section>
            <section id="rdf-jsonld"><RdfJsonLD/></section>
            <section id="rdf-jsonld-part2"><RdfJsonLDPart2/></section>
        </section>
        <section>
            <section id="javascript"><JavaScriptIntro/></section>
            <section id="javascript-syntax"><JavaScriptSyntax/></section>
            <section id="javascript-types"><JavaScriptTypes/></section>
        </section>
        <section>
            <section id="tools"><ToolsIntro/></section>
            <section id="tools-rdflib"><ToolsRdflib/></section>
            <section id="tools-ldo"><ToolsLDO/></section>
            <section id="tools-shapes"><ToolsShapes/></section>
        </section>
        <section>
            <section id="conclusion"><ConclusionIntro/></section>
            <section id="conclusion-more"><ConclusionMore/></section>
            <section id="conclusion-thanks"><ConclusionThanks/></section>
        </section>
    </div>
}