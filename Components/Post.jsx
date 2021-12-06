import React, {useEffect, useState} from "react";
import {Box, Heading, Link, ListItem, UnorderedList} from "@chakra-ui/react";
import NextLink from "next/link";
import {ChevronRightIcon} from "@chakra-ui/icons";

export const Title = ({children}) => {
    return (
        <Box>
            <NextLink href={"/posts"}>
                <Link>Posts</Link>
            </NextLink>

            <span>
                &nbsp;
                <ChevronRightIcon/>
                &nbsp;
            </span>
            <Heading display={"inline-block"} as={"h3"} fontSize={20} mb={4}>
                {children}
            </Heading>
        </Box>
    );
};

export const TableOfContents = ({contentRef}) => {
    const [nestedHeadings, setNestedHeadings] = useState([]);

    const getNestedHeadings = (headingElements) => {
        const nestedHeadings = [];

        headingElements.forEach((heading, index) => {
            const {innerText: title, id} = heading;

            if (heading.nodeName === "H1") {
                nestedHeadings.push({id, title, items: []});
            } else if (heading.nodeName === "H2" && nestedHeadings.length > 0) {
                nestedHeadings[nestedHeadings.length - 1].items.push({
                    id,
                    title,
                });
            }
        });

        return nestedHeadings;
    };

    useEffect(() => {
        const headingElements = Array.from(
            contentRef.current.querySelectorAll("h1,h2,h3")
        );

        const newNestedHeadings = getNestedHeadings(headingElements);
        setNestedHeadings(newNestedHeadings);
    }, [contentRef.current]);

    const Headings = ({headings}) => (
        <UnorderedList>
            {headings.map((heading) => (
                <ListItem key={heading.id}>
                    <a
                        href={`#${heading.id}`}
                        onClick={(e) => {
                            e.preventDefault();
                            contentRef.current.querySelector(`#${heading.id}`).scrollIntoView({
                                behavior: "smooth"
                            });
                        }}
                    >
                        {heading.title}
                    </a>
                    {heading.items.length > 0 && (
                        <UnorderedList>
                            {heading.items.map((child) => (
                                <ListItem key={child.id}>
                                    <a
                                        href={`#${child.id}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            contentRef.current.querySelector(`#${child.id}`).scrollIntoView({
                                                behavior: "smooth"
                                            });
                                        }}
                                    >
                                        {child.title}
                                    </a>
                                </ListItem>
                            ))}
                        </UnorderedList>
                    )}
                </ListItem>
            ))}
        </UnorderedList>
    );

    return (
        <Box>
            <Headings headings={nestedHeadings}/>
        </Box>
    );
};
