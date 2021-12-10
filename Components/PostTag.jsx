import React from "react";
import {Center, HStack, Image, Tag, TagLabel} from "@chakra-ui/react";
import {LOGOS} from "../Constants";

const PostTag = ({tagName, onClick}) => {
    const icon = LOGOS[tagName.toLowerCase()] || null;

    return (
        <HStack spacing={4}>
            <Tag size={"sm"} variant="outline" colorScheme="blue" onClick={onClick}>
                {tagName && <TagLabel>
                    {tagName}
                </TagLabel>}
                {icon && <Center>
                    <Image src={icon}
                           ml={tagName ? 1.5 : 0}
                           alt={"tag name"}
                           placeholder={"blur"}
                           height={"13px"}
                           display={"inline-block"}
                           borderRadius={"sm"}/>
                </Center>}
            </Tag>
        </HStack>
    );
};

export default PostTag;
