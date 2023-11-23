import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database'; // Example of how you might use the Realtime Database

const firebaseConfig = {
    databaseURL: "https://place-search-405814-default-rtdb.firebaseio.com",
    projectId: "place-search-405814",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
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

// Get a list of cities from your database
// async function getAddresses(db) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;database
// }