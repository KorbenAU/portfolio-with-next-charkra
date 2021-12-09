import React, {useState} from "react";
import dynamic from "next/dynamic";
import "react-markdown-editor-lite/lib/index.css";
import MarkdownIt from "markdown-it";
import Head from "next/head";
import {
    Box, Button,
    Container, Divider,
    FormControl,
    FormHelperText,
    FormLabel, HStack,
    Input,
    Select,
    Switch, Tab, Table, TabList, TabPanel, TabPanels, Tabs, Tag, TagCloseButton, TagLabel, Td, Textarea, Tr,
    useColorModeValue, Wrap
} from "@chakra-ui/react";
import MarkdownViewer from "../../Components/MarkdownViewer/MarkdownViewer";

const MdEditor = dynamic(() => import("react-markdown-editor-lite"), {
    ssr: false,
});

const mdParser = new MarkdownIt(/* Markdown-it options */);

const NewPost = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState([]);
    const [tagInput, setTagInput] = useState("");
    const [date, setDate] = useState("");
    const [isPublished, setIsPublished] = useState(true);
    const [mdText, setMdText] = useState("");

    const color = useColorModeValue("#202023", "#f0e7db");

    const handleMdChange = ({text}) => {
        setMdText(text);
    };

    const handleTagDelete = (tag) => {
        setTags(tags.filter(t => t !== tag));
    };

    const handleTagAdd = (e) => {
        if (e.key === "," || e.key === "Enter") {
            const tagSet = new Set([...tags, tagInput]);
            setTags(Array.from(tagSet));
            setTagInput("");
        }
    };

    const tagInputChange = (e) => {
        if (e.key !== "," && e.key !== "Enter") {
            setTagInput(e.target.value);
        }
    };

    return (
        <>
            <Head>
                <title>Korben Gao - New Post</title>
            </Head>

            <FormControl id="title" my={"1em"}>
                <FormLabel>Title</FormLabel>
                <Input variant="filled" type="text" value={title} onChange={e => setTitle(e.target.value)}/>
            </FormControl>

            <FormControl id="description" my={"1em"}>
                <FormLabel>Description</FormLabel>
                <Input variant="filled" type="text" value={description} onChange={e => setDescription(e.target.value)}/>
            </FormControl>

            <FormControl id="tags" my={"1em"}>
                <FormLabel>Tags</FormLabel>
                <Input variant="filled" type="text" value={tagInput} onKeyPress={handleTagAdd}
                       onChange={tagInputChange}/>
            </FormControl>

            <Wrap spacing={1}>
                {tags.map((tag, index) => (
                    <Tag size={"sm"} key={index} variant="solid" colorScheme="teal">
                        <TagLabel>{tag}</TagLabel>
                        <TagCloseButton onClick={() => handleTagDelete(tag)}/>
                    </Tag>
                ))}
            </Wrap>

            <FormControl id="date" my={"1em"}>
                <FormLabel>Date</FormLabel>
                <Input variant="filled" type="date"/>
            </FormControl>

            <FormControl display="flex" my={"2em"} alignItems="center">
                <FormLabel htmlFor="email-alerts" mb="0">
                    Publish this article?
                </FormLabel>
                <Switch id="email-alerts" isChecked={isPublished} onChange={e => setIsPublished(e.target.checked)}/>
            </FormControl>

            <Tabs>
                <TabList>
                    <Tab>Editor</Tab>
                    <Tab>Preview</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel px={0}>
                        <Textarea h={"600px"} m={0} placeholder="Here is a sample placeholder" value={mdText}
                                  onChange={e => setMdText(e.target.value)}/>
                    </TabPanel>
                    <TabPanel px={0}>
                        <Box h={"500px"}>
                            <MarkdownViewer>
                                {mdText}
                            </MarkdownViewer>
                        </Box>
                    </TabPanel>
                </TabPanels>
            </Tabs>

            <Box align={"center"}>
                <Button
                    mt={4}
                    colorScheme="teal"
                    type="submit"
                >
                    Submit
                </Button>
            </Box>


            {/*<MdEditor style={{height: "500px"}} renderHTML={text => mdParser.render(text)} onChange={handleMdChange}/>*/}
        </>

    );
};

export default NewPost;
