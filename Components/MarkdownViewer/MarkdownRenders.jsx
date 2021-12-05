import React from "react";
import {
    Box,
    Code,
    Divider,
    Heading,
    Image, Link,
    ListItem,
    OrderedList, Text,
    UnorderedList,
    useColorModeValue
} from "@chakra-ui/react";
import SyntaxHighlighter from "react-syntax-highlighter";
// import {darcula} from "react-syntax-highlighter/dist/esm/styles/hljs";

export const pRender = props => {
    return (
        <Text my={"0.5em"}>
            {props.children}
        </Text>
    );
};

export const h1Render = props => {
    return (
        <Heading as="h1" size="3xl" fontSize={{base: "2.5em", md: "3em", lg: "3.5em"}} isTruncated my={"0.5em"}
                 id={(props.children + "").toLowerCase().replaceAll(" ", "-")}>
            {props.children}
        </Heading>
    );
};

export const h2Render = props => {
    return (
        <Heading as="h2" size="2xl" fontSize={{base: "2em", md: "2.5em", lg: "3em"}} my={"0.5em"}
                 id={(props.children + "").toLowerCase().replaceAll(" ", "-")}>
            {props.children}
        </Heading>
    );
};

export const h3Render = props => {
    return (
        <Heading as="h3" size="xl" fontSize={{base: "1.5em", md: "2em", lg: "2.5em"}} my={"0.5em"}
                 id={(props.children + "").toLowerCase().replaceAll(" ", "-")}>
            {props.children}
        </Heading>
    );
};

export const h4Render = props => {
    return (
        <Heading as="h4" size="md" fontSize={{base: "1em", md: "1.5em", lg: "2em"}} my={"0.5em"}
                 id={(props.children + "").toLowerCase().replaceAll(" ", "-")}>
            {props.children}
        </Heading>
    );
};

export const ulRender = props => {
    return (
        <UnorderedList pl={"1em"}>
            {props.children}
        </UnorderedList>
    );
};

export const olRender = props => {
    return (
        <OrderedList pl={"1em"}>
            {props.children}
        </OrderedList>
    );
};

export const liRender = props => {
    return (
        <ListItem>
            {props.children}
        </ListItem>
    );
};

export const preRender = props => {
    return (
        <>{props.children}</>
    );
};

export const blockquoteRender = (props) => {
    return (
        <Box borderLeft={"solid"}
             borderLeftColor={"green.500"}
             pl={"1em"}
             py={"0.5em"}
             my={"1em"}
             bgColor={useColorModeValue("green.100", "green.900")}>
            {props.children}
        </Box>
    );
};

export const codeRender = ({node, inline, className, children, ...props}) => {

    if (inline) {
        return (
            <Code colorScheme="blue">
                {children}
            </Code>
        );
    }

    // className = className ? className : "afas-javascript";
    const match = /language-(\w+)/.exec(className || "");

    return (
        <Box overflowX="auto">
            <SyntaxHighlighter language={match}
                               // style={darcula}
                               showLineNumbers={true}
                               {...props}
            >
                {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
        </Box>
    );
};

export const imgRender = props => {

    return (
        <Image src={props.src}
               alt={props.alt}
               placeholder={"blur"}
               display={"inline-block"}
               borderRadius={"lg"}/>
    );
};

export const hrRender = () => {
    return (
        <Divider my={"1em"}/>
    );
};

export const aRender = ({children, href}) => {
    return (
        <Link href={href} isExternal>
            {children}
        </Link>
    );
};

