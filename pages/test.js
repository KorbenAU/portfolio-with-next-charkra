import React, {useEffect} from "react";
import db, {app} from "../firebase";
import {getFirestore, collection} from "firebase/firestore";
import {useCollection} from "react-firebase-hooks/firestore";

const Test = () => {

    const [value, loading, error] = useCollection(
        collection(getFirestore(app), "test"),
        {
            snapshotListenOptions: {includeMetadataChanges: true},
        }
    );

    // async function getCities() {
    //     const testCollection = collection(db, "test");
    //     const testSnapshot = await getDocs(testCollection);
    //     const itemList = testSnapshot.docs.map(doc => doc.data());
    //     return itemList;
    // }
    //
    // useEffect(() => {
    //     getCities().then(items => {
    //         console.log(items);
    //     });
    // }, []);

    return (
        <div>
            <p>
                {error && <strong>Error: {JSON.stringify(error)}</strong>}
                {loading && <span>Collection: Loading...</span>}
                {value && (
                    <span>
            Collection:{" "}
                        {value.docs.map((doc) => (
                            <React.Fragment key={doc.id}>
                                {JSON.stringify(doc.data())},{" "}
                            </React.Fragment>
                        ))}
          </span>
                )}
            </p>
        </div>
    );
};

export default Test;
