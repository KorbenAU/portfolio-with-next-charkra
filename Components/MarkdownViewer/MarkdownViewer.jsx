import ReactMarkdown from "react-markdown";
import {
    aRender,
    blockquoteRender, codeRender,
    h1Render,
    h2Render,
    h3Render,
    h4Render, hrRender, imgRender,
    liRender,
    olRender, pRender,
    preRender,
    ulRender
} from "./MarkdownRenders";
import {tableRender, tbodyRender, tdRender, theadRender, thRender, trRender} from "./TableRenders";
import remarkGfm from "remark-gfm";
import a11yEmoji from "@fec/remark-a11y-emoji";



const MarkdownViewer = ({children}) => {

    const renders = {
        p: pRender,
        h1: h1Render,
        h2: h2Render,
        h3: h3Render,
        h4: h4Render,
        ul: ulRender,
        ol: olRender,
        li: liRender,
        pre: preRender,
        blockquote: blockquoteRender,
        code: codeRender,
        img: imgRender,
        hr: hrRender,
        table: tableRender,
        th: thRender,
        tr: trRender,
        td: tdRender,
        tbody: tbodyRender,
        theand: theadRender,
        a: aRender
    };

    return (
        <ReactMarkdown components={renders} remarkPlugins={[remarkGfm, a11yEmoji]}>
            {children}
        </ReactMarkdown>
    );
};

export default MarkdownViewer;
