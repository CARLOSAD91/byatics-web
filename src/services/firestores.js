import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvvU1vJhfzfg19NUL7a2jJhKOT7bO27T4",
  authDomain: "byaticsapp.firebaseapp.com",
  projectId: "byaticsapp",
  storageBucket: "byaticsapp.appspot.com",
  messagingSenderId: "411680392636",
  appId: "1:411680392636:web:d3daabea3fbe39016857b9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// iniciar database
const db = getFirestore(app);

// Hacer la peticion para poder traer los productos
export const getProjects = async () => {
  const collectionProyects = collection(db, "proyectos");
  const documentsProyects = await getDocs(collectionProyects);
  const proyects = documentsProyects.docs.map((doc) => doc.data());
  return proyects;
};

export const storeProyect = async (proyect) => {
  const id = uuidv4().replaceAll("-", "");
  proyect.id = id;
  await setDoc(doc(db, "proyectos", id), proyect);
};

// actualizar un datos en firebase
export const updateProyectos = async (proyect) => {
  const productRef = doc(db, "proyectos", proyect.id);
  await updateDoc(productRef, proyect);
};

// eliminar un registros de la db
export const deleteProyect = async (id) => {
  await deleteDoc(doc(db, "proyectos", id));
};
