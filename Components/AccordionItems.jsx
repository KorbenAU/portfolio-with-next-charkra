import {AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box} from "@chakra-ui/react";
import Paragraph from "./Paragraph";

export const BioAccordionItem = ({year, role, company}) => {
    return (
        <AccordionItem>
            <h2>
                <AccordionButton style={{borderRadius: "10px"}} border={0} borderTopStyle={"none"}>
                    <Box flex="1" textAlign="left">
                        Section 1 title
                    </Box>
                    <AccordionIcon/>
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4} px={0}>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                </Paragraph>
            </AccordionPanel>
        </AccordionItem>
    );
};
