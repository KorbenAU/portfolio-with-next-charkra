import {Box, Table, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";

export const tableRender = props => {
    return (
        <Box overflowX="auto">
            <Table size={"sm"}
                   variant="simple"
                   colorScheme="black"
                   my={"2em"}
                // border={"solid"}
                // borderColor={"teal"}
                // borderWidth={"1px"}
            >
                {props.children}
            </Table>
        </Box>
    );
};

export const trRender = props => {
    return (
        <Tr>
            {props.children}
        </Tr>
    );
};

export const tdRender = props => {
    return (
        <Td style={props.style}>
            {props.children}
        </Td>
    );
};

export const theadRender = props => {
    return (
        <Thead>
            {props.children}
        </Thead>
    );
};

export const tbodyRender = props => {
    return (
        <Tbody>
            {props.children}
        </Tbody>
    );
};

export const thRender = props => {
    return (
        <Th style={props.style}>
            {props.children}
        </Th>
    );
};

