import React from "react";
import NextLink from "next/link";
import {
    Badge,
    Box,
    Divider,
    Flex,
    Heading,
    Image,
    LinkBox,
    LinkOverlay,
    Spacer,
    Text,
    useColorModeValue,
    Wrap
} from "@chakra-ui/react";
import {Global} from "@emotion/react";
import {WorkImage} from "./Work";
import PostTag from "./PostTag";

const GridItem = ({children, href, title, thumbnail}) => {
    return (
        <Box w={"100%"} align={"center"}>
            <LinkBox cursor={"pointer"}>
                <Image src={thumbnail}
                       alt={title}
                       className={"grid-item-thumbnail"}
                       placeholder={"blur"}
                       loading={"lazy"}/>
                <LinkOverlay href={href} target={"_blank"}>
                    <Text mt={2}>{title}</Text>
                </LinkOverlay>
                <Text fontSize={14}>
                    {children}
                </Text>
            </LinkBox>
        </Box>
    );
};

export const WorkGridItem = ({children, id, title, thumbnail}) => {
    return (
        <Box w={"100%"} align={"center"}>
            <NextLink href={`/works/${id}`}>
                <LinkBox cursor={"pointer"}>
                    <WorkImage src={thumbnail}
                               alt={title}
                               className="grid-item-thumbnail"
                               placeholder={"blur"}/>
                    <LinkOverlay href={`/works/${id}`}>
                        <Text mt={2} fontSize={20}>
                            {title}
                        </Text>
                    </LinkOverlay>
                    <Text fontSize={14}>
                        {children}
                    </Text>
                </LinkBox>
            </NextLink>
        </Box>
    );
};

export const TechStackItem = ({techName, level, colorSchema, text, logo}) => {
    let thumbnail = `/logo/${logo}`;

    return (
        <Box w={"100%"}
             borderColor={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
             bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
             borderWidth={1}
             borderStyle={"solid"}
             borderRadius={"md"}
             px={4}
             pt={2}
             pb={4}
        >
            <Flex direction={"column"} h={"100%"}>
                <Box>
                    <Heading as={"h2"} mt={2} fontSize={19}>
                        {techName}
                    </Heading>
                    {/*<Paragraph>*/}
                    {/*    {text}*/}
                    {/*</Paragraph>*/}
                </Box>
                <Spacer/>
                <Box align={"center"} mt={4}>
                    <Image src={thumbnail}
                           alt={techName}
                           placeholder={"blur"}
                           height={"80px"}
                           display={"inline-block"}
                           borderRadius={"lg"}

                    />
                </Box>
                <Divider my={1}/>
                <Box w={"100%"} mt={4} display={"flex"} align={"left"}>
                    <Badge colorScheme={colorSchema}>
                        {level}
                    </Badge>
                </Box>
            </Flex>
        </Box>
    );
};

export const PostGridItem = ({title, description, tags, date, href}) => {
    return (
        <Box w={"100%"}>
            <Flex alignItems={"center"}>
                <NextLink href={href}>
                    <LinkBox cursor={"pointer"}>
                        <LinkOverlay href={`/posts/sample`}>
                            <Text mt={2} fontSize={20}>
                                {title}
                            </Text>
                        </LinkOverlay>
                        <Box>
                            <Text fontSize={14}>
                                {description}
                            </Text>
                        </Box>
                    </LinkBox>
                </NextLink>
                <Spacer minWidth={"10px"}/>
                <Text minWidth={["50px", "80px", "120px"]}>
                    {date}
                </Text>
            </Flex>
            <Divider my={2}/>
            <Wrap>
                {
                    tags.map((tag, index) => (<PostTag key={index} tagName={tag}/>))
                }
            </Wrap>
        </Box>
    );
};

export const GridItemStyle = () => (
    <Global styles={`
        .grid-item-thumbnail {
           border-radius: 12px; 
        }
    `}/>
);


export default GridItem;
