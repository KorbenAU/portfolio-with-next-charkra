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
