import {addDoc, collection, getDocs, query, where, orderBy, startAfter, startAt, limit} from "firebase/firestore/lite";
import db from "./firebase";

const parseData = (dataSnapshot) => {
    const data = dataSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
    return JSON.parse(JSON.stringify(data));
};

export const getProfileData = async () => {
    const testCollection = collection(db, "profile");
    const testSnapshot = await getDocs(testCollection);
    return parseData(testSnapshot);
};

export const createPost = async (post) => {
    const docRef = await addDoc(collection(db, "posts"), post);
    return docRef.id;
};

export const getPosts = async () => {
    const testCollection = collection(db, "posts");
    const testSnapshot = await getDocs(testCollection);
    return parseData(testSnapshot);
};

export const getPostIds = async () => {
    const testCollection = collection(db, "posts");
    const testSnapshot = await getDocs(testCollection);
    const data = testSnapshot.docs.map(doc => doc.id);
    return JSON.parse(JSON.stringify(data));
};

export const getPostById = async (postId) => {
    const q = query(collection(db, "posts"), where("__name__", "==", postId));
    const querySnapshot = await getDocs(q);
    const parsedData = parseData(querySnapshot);
    return parsedData[0];
};
