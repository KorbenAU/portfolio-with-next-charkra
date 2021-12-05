import React from "react";
import {Box, Center, Flex, HStack, Image, Tag, TagLabel, TagRightIcon} from "@chakra-ui/react";

const PostTag = ({tagName, icon}) => {
    return (
        <HStack spacing={4}>
            <Tag size={"sm"} variant="outline" colorScheme="blue">
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
