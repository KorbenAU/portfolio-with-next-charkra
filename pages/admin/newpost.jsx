import React, {useState} from "react";
import "react-markdown-editor-lite/lib/index.css";
import Head from "next/head";
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Switch,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Textarea,
    useColorModeValue,
    Wrap
} from "@chakra-ui/react";
import MarkdownViewer from "../../Components/MarkdownViewer/MarkdownViewer";
import {createPost} from "../../API";
import PostTag from "../../Components/PostTag";

const NewPost = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState([]);
    const [tagInput, setTagInput] = useState("");
    const [date, setDate] = useState("");
    const [isPublished, setIsPublished] = useState(true);
    const [mdText, setMdText] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const color = useColorModeValue("#202023", "#f0e7db");

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
        if (e.key !== ",") {
            setTagInput(e.target.value);
        }
    };

    const handleSubmit = async () => {
        setIsLoading(true);
        await createPost({
            title,
            description,
            tags,
            date,
            isPublished,
            mdText
        });
        setIsLoading(false);
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
                    <PostTag key={index} tagName={tag} onClick={() => handleTagDelete(tag)}/>
                ))}
            </Wrap>

            <FormControl id="date" my={"1em"}>
                <FormLabel>Date</FormLabel>
                <Input variant="filled" type="date" onChange={e => setDate(e.target.value)}/>
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
                                  onChange={e => setMdText(e.target.value)} borderColor={color} borderWidth={"1px"}/>
                    </TabPanel>
                    <TabPanel px={0}>
                        <Box h={"600px"} px={"1em"} borderColor={color} borderWidth={"1px"} borderRadius={"md"}
                             overflow={"scroll"}>
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
                    isLoading={isLoading}
                    onClick={handleSubmit}
                >
                    Submit
                </Button>
            </Box>
        </>

    );
};

export default NewPost;
