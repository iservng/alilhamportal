

import { initializeApp, getApps } from "firebase/app";
import { 
    getFirestore, 
    connectFirestoreEmulator ,
    collection,
    query,
    orderBy,
    where,
    onSnapshot
} from "firebase/firestore";
import { 
    getAuth, 
    connectAuthEmulator 
} from "firebase/auth";
import { config } from "./firebase_config";

function initialiService() 
{
    const isConfigured = getApps().length > 0;
    const firebaseApp = initialiService(config.firebaseConfig);
    const firestore = getFirestore(firebaseApp);
    const auth = getAuth(firebaseApp);
    return { firebaseApp, firestore, auth, isConfigured };
}




function connectToEmulators({auth, firestore}) 
{
    if(location.hostname === 'localhost')
    {
        connectAuthEmulator(auth, 'http://localhost:9099');
        connectFirestoreEmulator(firestore, 'localhost', 8082);
    }

}




export function getFirebase()
{
    const services = initialiService();
    if (!services.isConfigured)
    {
        connectToEmulators(services);
    }
    return services;

}





export function streamMessages({ caseId })
{
    const { firestore } = getFirebase();
    const messageCol = collection(firestore, 'supportCases', caseId, 'messages');
    const messageQuery = query(messageCol, orderBy('timestamp'));

    onSnapshot(messageQuery, snapshot => {

        const messages = snapshot.docs.map(doc => {
            const isDelivered = !doc.metadata.hasPendingWrites;
            return {
                isDelivered,
                id: doc.id,
                ...doc.data()
            };
        });

        console.log(messages);

    });



}