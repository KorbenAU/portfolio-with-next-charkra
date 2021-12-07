import {collection, getDocs} from "firebase/firestore/lite";
import db from "./firebase";

const parseData = (data) => {
    return JSON.parse(JSON.stringify(data));
};

export const getProfileData = async () => {
    const testCollection = collection(db, "profile");
    const testSnapshot = await getDocs(testCollection);
    const itemList = testSnapshot.docs.map(doc => doc.data());
    return parseData(itemList);
};
