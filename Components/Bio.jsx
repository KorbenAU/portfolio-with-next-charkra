import React from "react";
import styled from "@emotion/styled";
import {Box} from "@chakra-ui/react";

export const BioSection = styled(Box)`
   padding-left: 3.4em;
   //text-indent: -3.4em;
   margin-bottom: 1em;
`;

export const BioYear = styled.span`
   font-weight: bold;
   margin-right: 1em;
`;


const BioItem = ({year, text}) => {
    return (
        <>
            <BioYear>{year}</BioYear>
            <BioSection>
                {text}
            </BioSection>
        </>
    );
};

export default BioItem;

