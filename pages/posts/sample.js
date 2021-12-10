import React, {useRef} from "react";
import {Badge, Box, Container, Heading, Wrap} from "@chakra-ui/react";
import Layout from "../../Components/Layouts/Article";
import {TableOfContents, Title} from "../../Components/Post";
import PostTag from "../../Components/PostTag";
import MarkdownViewer from "../../Components/MarkdownViewer/MarkdownViewer";


const SamplePost = () => {
    const markdown = "A simple markdown editor with preview, implemented with React.js and TypeScript. This React Component aims to provide a simple Markdown editor with syntax highlighting support. This is based on `textarea` encapsulation, so it does not depend on any modern code editors such as Acs, CodeMirror, Monaco etc.\n" +
        "\n" +
        "# Features\n" +
        "\n" +
        "- 📑 Indent line or selected text by pressing tab key, with customizable indentation.\n" +
        "- ♻️ Based on `textarea` encapsulation, does not depend on any modern code editors.\n" +
        "- 🚧 Does not depend on the [`uiw`](https://github.com/uiwjs/uiw) component library.\n" +
        "- 🚘 Automatic list on new lines.\n" +
        "- 😻 GitHub flavored markdown support.\n" +
        "- 💡 Support [next.js](https://github.com/uiwjs/react-md-editor/issues/52#issuecomment-848969341), [Use examples](#support-nextjs) in [next.js](https://nextjs.org/).\n" +
        "\n" +
        "# Quick Start\n" +
        "\n" +
        "```bash\n" +
        "npm i @uiw/react-md-editor\n" +
        "```\n" +
        "\n" +
        "# Using\n" +
        "\n" +
        "[![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?logo=codesandbox)](https://codesandbox.io/embed/markdown-editor-for-react-izdd6?fontsize=14&hidenavigation=1&theme=dark)\n" +
        "[![Open in Github gh-pages](https://img.shields.io/badge/Open%20In-Github%20gh--pages-blue?logo=github)](https://uiwjs.github.io/react-md-editor/)\n" +
        "[![Open in Gitee gh-pages](https://img.shields.io/badge/Open%20In-Gitee%20gh--pages-blue?logo=web)](https://uiw.gitee.io/react-md-editor/)\n" +
        "\n" +
        "```js\n" +
        "import React from \"react\";\n" +
        "import MDEditor from '@uiw/react-md-editor';\n" +
        "\n" +
        "export default function App() {\n" +
        "  const [value, setValue] = React.useState(\"**Hello world!!!**\");\n" +
        "  return (\n" +
        "    <div className=\"container\">\n" +
        "      <MDEditor\n" +
        "        value={value}\n" +
        "        onChange={setValue}\n" +
        "      />\n" +
        "      <MDEditor.Markdown source={value} />\n" +
        "    </div>\n" +
        "  );\n" +
        "}\n" +
        "```\n" +
        "\n" +
        "# Custom Toolbars\n" +
        "\n" +
        "[![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?logo=codesandbox)](https://codesandbox.io/embed/react-md-editor-custom-toolbars-m2n10?fontsize=14&hidenavigation=1&theme=dark)\n" +
        "\n" +
        "```tsx\n" +
        "import React from \"react\";\n" +
        "import ReactDOM from \"react-dom\";\n" +
        "import MDEditor, { commands, ICommand, TextState, TextAreaTextApi } from '@uiw/react-md-editor';\n" +
        "\n" +
        "const title3: ICommand = {\n" +
        "  name: 'title3',\n" +
        "  keyCommand: 'title3',\n" +
        "  buttonProps: { 'aria-label': 'Insert title3' },\n" +
        "  icon: (\n" +
        "    <svg width=\"12\" height=\"12\" viewBox=\"0 0 520 520\">\n" +
        "      <path fill=\"currentColor\" d=\"M15.7083333,468 C7.03242448,468 0,462.030833 0,454.666667 L0,421.333333 C0,413.969167 7.03242448,408 15.7083333,408 L361.291667,408 C369.967576,408 377,413.969167 377,421.333333 L377,454.666667 C377,462.030833 369.967576,468 361.291667,468 L15.7083333,468 Z M21.6666667,366 C9.69989583,366 0,359.831861 0,352.222222 L0,317.777778 C0,310.168139 9.69989583,304 21.6666667,304 L498.333333,304 C510.300104,304 520,310.168139 520,317.777778 L520,352.222222 C520,359.831861 510.300104,366 498.333333,366 L21.6666667,366 Z M136.835938,64 L136.835937,126 L107.25,126 L107.25,251 L40.75,251 L40.75,126 L-5.68434189e-14,126 L-5.68434189e-14,64 L136.835938,64 Z M212,64 L212,251 L161.648438,251 L161.648438,64 L212,64 Z M378,64 L378,126 L343.25,126 L343.25,251 L281.75,251 L281.75,126 L238,126 L238,64 L378,64 Z M449.047619,189.550781 L520,189.550781 L520,251 L405,251 L405,64 L449.047619,64 L449.047619,189.550781 Z\" />\n" +
        "    </svg>\n" +
        "  ),\n" +
        "  execute: (state: TextState, api: TextAreaTextApi) => {\n" +
        "    let modifyText = `# ${state.selectedText}\\n`;\n" +
        "    if (!state.selectedText) {\n" +
        "      modifyText = `# `;\n" +
        "    }\n" +
        "    api.replaceSelection(modifyText);\n" +
        "  },\n" +
        "};\n" +
        "\n" +
        "export default function App() {\n" +
        "  const [value, setValue] = React.useState(\"**Hello world!!!**\");\n" +
        "  return (\n" +
        "    <div className=\"container\">\n" +
        "      <MDEditor\n" +
        "        value=\"Hello Markdown!\"\n" +
        "        onChange={(val) => {\n" +
        "          setValue(val!);\n" +
        "        }}\n" +
        "        commands={[\n" +
        "          // Custom Toolbars\n" +
        "          title3,\n" +
        "          commands.group([commands.title1, commands.title2, commands.title3, commands.title4, commands.title5, commands.title6], {\n" +
        "            name: 'title',\n" +
        "            groupName: 'title',\n" +
        "            buttonProps: { 'aria-label': 'Insert title'}\n" +
        "          }),\n" +
        "          commands.divider,\n" +
        "          commands.group([], {\n" +
        "            name: 'update',\n" +
        "            groupName: 'update',\n" +
        "            icon: (\n" +
        "              <svg viewBox=\"0 0 1024 1024\" width=\"12\" height=\"12\">\n" +
        "                <path fill=\"currentColor\" d=\"M716.8 921.6a51.2 51.2 0 1 1 0 102.4H307.2a51.2 51.2 0 1 1 0-102.4h409.6zM475.8016 382.1568a51.2 51.2 0 0 1 72.3968 0l144.8448 144.8448a51.2 51.2 0 0 1-72.448 72.3968L563.2 541.952V768a51.2 51.2 0 0 1-45.2096 50.8416L512 819.2a51.2 51.2 0 0 1-51.2-51.2v-226.048l-57.3952 57.4464a51.2 51.2 0 0 1-67.584 4.2496l-4.864-4.2496a51.2 51.2 0 0 1 0-72.3968zM512 0c138.6496 0 253.4912 102.144 277.1456 236.288l10.752 0.3072C924.928 242.688 1024 348.0576 1024 476.5696 1024 608.9728 918.8352 716.8 788.48 716.8a51.2 51.2 0 1 1 0-102.4l8.3968-0.256C866.2016 609.6384 921.6 550.0416 921.6 476.5696c0-76.4416-59.904-137.8816-133.12-137.8816h-97.28v-51.2C691.2 184.9856 610.6624 102.4 512 102.4S332.8 184.9856 332.8 287.488v51.2H235.52c-73.216 0-133.12 61.44-133.12 137.8816C102.4 552.96 162.304 614.4 235.52 614.4l5.9904 0.3584A51.2 51.2 0 0 1 235.52 716.8C105.1648 716.8 0 608.9728 0 476.5696c0-132.1984 104.8064-239.872 234.8544-240.2816C258.5088 102.144 373.3504 0 512 0z\" />\n" +
        "              </svg>\n" +
        "            ),\n" +
        "            children: ({ close, execute, getState, textApi }) => {\n" +
        "              return (\n" +
        "                <div style={{ width: 120, padding: 10 }}>\n" +
        "                  <div>My Custom Toolbar</div>\n" +
        "                  <button type=\"button\" onClick={() => console.log('> execute: >>>>>', getState!())}>State</button>\n" +
        "                  <button type=\"button\" onClick={() => close()}>Close</button>\n" +
        "                  <button type=\"button\" onClick={() => execute()}>Execute</button>\n" +
        "                </div>\n" +
        "              );\n" +
        "            },\n" +
        "            execute: (state: TextState, api: TextAreaTextApi)  => {\n" +
        "              console.log('>>>>>>update>>>>>', state)\n" +
        "            },\n" +
        "            buttonProps: { 'aria-label': 'Insert title'}\n" +
        "          }),\n" +
        "        ]}\n" +
        "      />\n" +
        "    </div>\n" +
        "  );\n" +
        "}\n" +
        "```\n" +
        "\n" +
        "# Preview Markdown\n" +
        "\n" +
        "[![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?logo=codesandbox)](https://codesandbox.io/embed/react-md-editor-preview-markdown-vrucl?fontsize=14&hidenavigation=1&theme=dark)\n" +
        "\n" +
        "```jsx\n" +
        "import React from \"react\";\n" +
        "import ReactDOM from \"react-dom\";\n" +
        "import MDEditor from '@uiw/react-md-editor';\n" +
        "\n" +
        "export default function App() {\n" +
        "  return (\n" +
        "    <div className=\"container\">\n" +
        "      <MDEditor.Markdown source=\"Hello Markdown!\" />\n" +
        "    </div>\n" +
        "  );\n" +
        "}\n" +
        "```\n" +
        "\n" +
        "# Support Custom KaTeX Preview\n" +
        "\n" +
        "KaTeX is a fast, easy-to-use JavaScript library for TeX math rendering on the web, We perform math rendering through [`KaTeX`](https://github.com/KaTeX/KaTeX).\n" +
        "\n" +
        "The following example is preview in [CodeSandbox](https://codesandbox.io/s/markdown-editor-katex-for-react-7v3vl).\n" +
        "\n" +
        "[![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?logo=codesandbox)](https://codesandbox.io/embed/headless-frog-em8yg?fontsize=14&hidenavigation=1&theme=dark)\n" +
        "\n" +
        "> ⚠️ Upgrade v2 to v3 [d025430](https://github.com/uiwjs/react-md-editor/blob/d02543050c9abd8f7c72ae02b6421ac2e6ae421a/website/ExmapleKaTeX.tsx#L1-L59)\n" +
        "\n" +
        "```bash\n" +
        "npm install katex\n" +
        "```\n" +
        "\n" +
        "```jsx\n" +
        "import React from \"react\";\n" +
        "import ReactDOM from \"react-dom\";\n" +
        "import MDEditor from '@uiw/react-md-editor';\n" +
        "import katex from 'katex';\n" +
        "import 'katex/dist/katex.css';\n" +
        "\n" +
        "const mdKaTeX = `This is to display the \n" +
        "\\`\\$\\$\\c = \\\\pm\\\\sqrt{a^2 + b^2}\\$\\$\\`\n" +
        " in one line\n" +
        "\n" +
        "\\`\\`\\`KaTeX\n" +
        "c = \\\\pm\\\\sqrt{a^2 + b^2}\n" +
        "\\`\\`\\`\n" +
        "`;\n" +
        "\n" +
        "export default function App() {\n" +
        "  return (\n" +
        "    <MDEditor\n" +
        "      value={mdKaTeX}\n" +
        "      previewOptions={{\n" +
        "        components: {\n" +
        "          code: ({ inline, children = [], className, ...props }) => {\n" +
        "            const txt = children[0] || '';\n" +
        "            if (inline) {\n" +
        "              if (typeof txt === 'string' && /^\\$\\$(.*)\\$\\$/.test(txt)) {\n" +
        "                const html = katex.renderToString(txt.replace(/^\\$\\$(.*)\\$\\$/, '$1'), {\n" +
        "                  throwOnError: false,\n" +
        "                });\n" +
        "                return <code dangerouslySetInnerHTML={{ __html: html }} />;\n" +
        "              }\n" +
        "              return <code>{txt}</code>;\n" +
        "            }\n" +
        "            if (\n" +
        "              typeof txt === 'string' &&\n" +
        "              typeof className === 'string' &&\n" +
        "              /^language-katex/.test(className.toLocaleLowerCase())\n" +
        "            ) {\n" +
        "              const html = katex.renderToString(txt, {\n" +
        "                throwOnError: false,\n" +
        "              });\n" +
        "              return <code dangerouslySetInnerHTML={{ __html: html }} />;\n" +
        "            }\n" +
        "            return <code className={String(className)}>{txt}</code>;\n" +
        "          },\n" +
        "        },\n" +
        "      }}\n" +
        "    />\n" +
        "  );\n" +
        "}\n" +
        "```\n" +
        "\n" +
        "# Markdown text to Image\n" +
        "\n" +
        "[![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?logo=codesandbox)](https://codesandbox.io/embed/react-md-editor-text-to-images-ijqmx?fontsize=14&hidenavigation=1&theme=dark)\n" +
        "\n" +
        "```jsx\n" +
        "import React from \"react\";\n" +
        "import MDEditor, { commands, ICommand, TextState, TextAreaTextApi } from \"@uiw/react-md-editor\";\n" +
        "import domToImage from \"dom-to-image\";\n" +
        "\n" +
        "const textToImage: ICommand = {\n" +
        "  name: \"Text To Image\",\n" +
        "  keyCommand: \"text2image\",\n" +
        "  buttonProps: { \"aria-label\": \"Insert title3\" },\n" +
        "  icon: (\n" +
        "    <svg width=\"12\" height=\"12\" viewBox=\"0 0 20 20\">\n" +
        "      <path fill=\"currentColor\" d=\"M15 9c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4-7H1c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 13l-6-5-2 2-4-5-4 8V4h16v11z\" ></path>\n" +
        "    </svg>\n" +
        "  ),\n" +
        "  execute: (state: TextState, api: TextAreaTextApi) => {\n" +
        "    const dom = document.getElementsByClassName(\"w-md-editor\")[0];\n" +
        "    if (dom) {\n" +
        "      domToImage.toJpeg(dom, {}).then((dataUrl) => {\n" +
        "        const link = document.createElement(\"a\");\n" +
        "        link.download = \"image.jpg\";\n" +
        "        link.href = dataUrl;\n" +
        "        link.click();\n" +
        "      });\n" +
        "    }\n" +
        "  }\n" +
        "};\n" +
        "\n" +
        "export default function App() {\n" +
        "  return (\n" +
        "    <div className=\"container\">\n" +
        "      <MDEditor\n" +
        "        value=\"**Hello world!!!**\"\n" +
        "        commands={[\n" +
        "          textToImage,\n" +
        "          commands.divider\n" +
        "        ]}\n" +
        "      />\n" +
        "    </div>\n" +
        "  );\n" +
        "}\n" +
        "```\n" +
        "\n" +
        "# Support Custom Mermaid Preview\n" +
        "\n" +
        "Using [mermaid](https://github.com/mermaid-js/mermaid) to generation of diagram and flowchart from text in a similar manner as markdown\n" +
        "\n" +
        "[![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?logo=codesandbox)](https://codesandbox.io/embed/markdown-editor-mermaid-for-react-uvtsx?fontsize=14&hidenavigation=1&theme=dark)\n" +
        "\n" +
        "```bash\n" +
        "npm install mermaid\n" +
        "```\n" +
        "\n" +
        "```jsx\n" +
        "import React from \"react\";\n" +
        "import ReactDOM from \"react-dom\";\n" +
        "import MDEditor from \"@uiw/react-md-editor\";\n" +
        "import mermaid from \"mermaid\";\n" +
        "\n" +
        "const mdMermaid = `The following are some examples of the diagrams, charts and graphs that can be made using Mermaid and the Markdown-inspired text specific to it. \n" +
        "\n" +
        "\\`\\`\\`mermaid\n" +
        "graph TD\n" +
        "A[Hard] -->|Text| B(Round)\n" +
        "B --> C{Decision}\n" +
        "C -->|One| D[Result 1]\n" +
        "C -->|Two| E[Result 2]\n" +
        "\\`\\`\\`\n" +
        "\n" +
        "\\`\\`\\`mermaid\n" +
        "sequenceDiagram\n" +
        "Alice->>John: Hello John, how are you?\n" +
        "loop Healthcheck\n" +
        "    John->>John: Fight against hypochondria\n" +
        "end\n" +
        "Note right of John: Rational thoughts!\n" +
        "John-->>Alice: Great!\n" +
        "John->>Bob: How about you?\n" +
        "Bob-->>John: Jolly good!\n" +
        "\\`\\`\\`\n" +
        "`;\n" +
        "\n" +
        "const getCode = (arr = []) => arr.map(dt => {\n" +
        "  if (typeof dt === 'string') {\n" +
        "    return dt;\n" +
        "  }\n" +
        "  if (dt.props && dt.props.children) {\n" +
        "    return getCode(dt.props.children);\n" +
        "  }\n" +
        "}).filter(Boolean).join('');\n" +
        "\n" +
        "export default function App() {\n" +
        "  return (\n" +
        "    <MDEditor\n" +
        "      height={500}\n" +
        "      value={mdMermaid || \"\"}\n" +
        "      previewOptions={{\n" +
        "        components: {\n" +
        "          code: ({ inline, children = [], className, ...props }) => {\n" +
        "            const code = getCode(children);\n" +
        "            if (\n" +
        "              typeof code === 'string' &&\n" +
        "              typeof className === 'string' &&\n" +
        "              /^language-mermaid/.test(className.toLocaleLowerCase())\n" +
        "            ) {\n" +
        "              const Elm = document.createElement(\"div\");\n" +
        "              Elm.id = \"demo\";\n" +
        "              const svg = mermaid.render(\"demo\", code);\n" +
        "              return <code dangerouslySetInnerHTML={{ __html: svg }} />\n" +
        "            }\n" +
        "            return <code className={String(className)}>{children}</code>;\n" +
        "          },\n" +
        "        },\n" +
        "      }}\n" +
        "    />\n" +
        "  );\n" +
        "}\n" +
        "\n" +
        "ReactDOM.render(<App />, document.getElementById(\"container\"));\n" +
        "```\n" +
        "\n" +
        "# Support Nextjs\n" +
        "\n" +
        "Use examples in [nextjs](https://nextjs.org/). [#52](https://github.com/uiwjs/react-md-editor/issues/52#issuecomment-848969341) [#224](https://github.com/uiwjs/react-md-editor/issues/224#issuecomment-901112079)\n" +
        "\n" +
        "[![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?logo=codesandbox)](https://codesandbox.io/embed/nextjs-example-react-md-editor-qjhn7?fontsize=14&hidenavigation=1&theme=dark) [![Open in StackBlitz](https://img.shields.io/badge/Open%20In-StackBlitz-green)](https://stackblitz.com/edit/nextjs-react-md-editor?embed=1&file=pages/index.js&hideExplorer=1&hideNavigation=1&theme=dark)\n" +
        "\n" +
        "```bash\n" +
        "npm install next-remove-imports\n" +
        "npm install @uiw/react-md-editor@v3.6.0\n" +
        "```\n" +
        "\n" +
        "```js\n" +
        "// next.config.js\n" +
        "const removeImports = require('next-remove-imports')();\n" +
        "module.exports = removeImports({});\n" +
        "```\n" +
        "\n" +
        "```jsx\n" +
        "import \"@uiw/react-md-editor/markdown-editor.css\";\n" +
        "import \"@uiw/react-markdown-preview/markdown.css\";\n" +
        "import dynamic from \"next/dynamic\";\n" +
        "import { useState } from \"react\";\n" +
        "\n" +
        "const MDEditor = dynamic(\n" +
        "  () => import(\"@uiw/react-md-editor\"),\n" +
        "  { ssr: false }\n" +
        ");\n" +
        "\n" +
        "function HomePage() {\n" +
        "  const [value, setValue] = useState(\"**Hello world!!!**\");\n" +
        "  return (\n" +
        "    <div>\n" +
        "      <MDEditor value={value} onChange={setValue} />\n" +
        "    </div>\n" +
        "  );\n" +
        "}\n" +
        "\n" +
        "export default HomePage;\n" +
        "```\n" +
        "\n" +
        "# Props\n" +
        "\n" +
        "- `value: string`: The Markdown value.\n" +
        "- `onChange?: (value: string)`: Event handler for the `onChange` event.\n" +
        "- `commands?: ICommand[]`: An array of [`ICommand`](https://github.com/uiwjs/react-md-editor/blob/d02543050c9abd8f7c72ae02b6421ac2e6ae421a/src/commands/index.ts#L39-L57), which, each one, contain a [`commands`](https://github.com/uiwjs/react-md-editor/blob/d02543050c9abd8f7c72ae02b6421ac2e6ae421a/src/commands/index.ts#L155-L180) property. If no commands are specified, the default will be used. Commands are explained in more details below.\n" +
        "- `commandsFilter?: (command: ICommand, isExtra: boolean) => false | ICommand`: Filter or modify your commands.\n" +
        "- `extraCommands?: ICommand[]`: Displayed on the right side of the toolbar.\n" +
        "- `autoFocus?: true`: Can be used to make `Markdown Editor` focus itself on initialization.\n" +
        "- `previewOptions?: ReactMarkdown.ReactMarkdownProps`: This is reset [@uiw/react-markdown-preview](https://github.com/uiwjs/react-markdown-preview/tree/e6e8462d9a5c64a7045e25adcb4928095d74ca37#options-props) settings.\n" +
        "- `textareaProps?: TextareaHTMLAttributes`: Set the `textarea` related props.\n" +
        "- `renderTextarea?: (props, opts) => JSX.Element;`: Use div to replace TextArea or re-render TextArea. [#193](https://github.com/uiwjs/react-md-editor/issues/193)\n" +
        "- `height?: number=200`: The height of the editor.\n" +
        "- `visiableDragbar?: boolean=true`: Show drag and drop tool. Set the height of the editor.\n" +
        "- `highlightEnable?: boolean=true`: Disable editing area code highlighting. The value is `false`, which increases the editing speed.\n" +
        "- `fullscreen?: boolean=false`: Show markdown preview.\n" +
        "- `preview?: 'live' | 'edit' | 'preview'`: Default value `live`, Show markdown preview.\n" +
        "- `maxHeight?: number=1200`: Maximum drag height. The `visiableDragbar=true` value is valid.\n" +
        "- `minHeights?: number=100`: Minimum drag height. The `visiableDragbar=true` value is valid.\n" +
        "- `tabSize?: number=2`: The number of characters to insert when pressing tab key. Default `2` spaces.\n" +
        "- `hideToolbar?: boolean=false`: Option to hide the tool bar.\n" +
        "- `enableScroll?: boolean=true`: Whether to enable scrolling.\n" +
        "\n" +
        "# Development\n" +
        "\n" +
        "```bash\n" +
        "npm run watch     # Listen create type and .tsx files.\n" +
        "npm run css:watch # listen to the component compile and output the .css file\n" +
        "npm run start  # Preview code example.\n" +
        "```\n" +
        "\n" +
        "# Related\n" +
        "\n" +
        "- [@uiw/react-textarea-code-editor](https://github.com/uiwjs/react-textarea-code-editor): A simple code editor with syntax highlighting.\n" +
        "- [@uiw/react-md-editor](https://github.com/uiwjs/react-md-editor): A simple markdown editor with preview, implemented with React.js and TypeScript.\n" +
        "- [@uiw/react-codemirror](https://github.com/uiwjs/react-codemirror): CodeMirror component for React. @codemirror\n" +
        "- [@uiw/react-monacoeditor](https://github.com/jaywcjlove/react-monacoeditor): Monaco Editor component for React.\n" +
        "- [@uiw/react-markdown-editor](https://github.com/uiwjs/react-markdown-editor): A markdown editor with preview, implemented with React.js and TypeScript.\n" +
        "- [@uiw/react-markdown-preview](https://github.com/uiwjs/react-markdown-preview): React component preview markdown text in web browser. \n" +
        "\n" +
        "# License\n" +
        "\n" +
        "Licensed under the MIT License.\n";

    const contentRef = useRef();

    return (
        <Layout title={"That's a sample post"}>
            <Container>
                <Title>
                    This is a sample Post <Badge>2021</Badge>
                </Title>

                <Wrap>
                    <PostTag tagName={"Zabbix"}/>
                    <PostTag tagName={"React"}/>
                    <PostTag tagName={"JavaScript"}/>
                    <PostTag tagName={"TypeScript"}/>
                    <PostTag tagName={"Java"}/>
                    <PostTag tagName={"Git"}/>
                    <PostTag tagName={"Redux"}/>
                    <PostTag tagName={"Figma"}/>
                </Wrap>

                <Box my={"2em"}>
                    <Heading>Table of content:</Heading>
                    <TableOfContents contentRef={contentRef}/>
                </Box>

                <Box ref={contentRef}>
                    <MarkdownViewer>
                        {markdown}
                    </MarkdownViewer>
                </Box>

            </Container>

        </Layout>
    );
};

export default SamplePost;
