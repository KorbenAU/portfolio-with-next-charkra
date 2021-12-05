import React from "react";
import {Box, Heading, Link} from "@chakra-ui/react";
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
