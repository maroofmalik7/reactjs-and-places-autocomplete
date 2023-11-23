import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database'; 

  const firebaseConfig = {
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  };

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export function readAllAddresses() {
    return new Promise((resolve, reject) => {
        const dbRef = ref(db);
        debugger
        onValue(dbRef, (snapshot) => {
            debugger
            const data = snapshot.val();
            const addresses = Object.values(data).map(item => item.address);
            resolve(addresses);
        }, (error) => {
            reject(error);
        });
    });
}
