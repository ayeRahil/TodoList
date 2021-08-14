/* const firebaseConfig = {
  apiKey: "AIzaSyAsEg_xqanvsdKZpc38PHoZEWEbFLNjMb8",
  authDomain: "todo-app-f90b7.firebaseapp.com",
  projectId: "todo-app-f90b7",
  storageBucket: "todo-app-f90b7.appspot.com",
  messagingSenderId: "50523340630",
  appId: "1:50523340630:web:1a469bb26f40ddca9b60f7",
  measurementId: "G-MR0PTEBMTB"
};*/

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBJYsZ-tExHJYoWEW_3XnxrJh2OEWaabiY",
  authDomain: "todo-app-rahil.firebaseapp.com",
  databaseURL: "https://todo-app-rahil.firebaseio.com",
  projectId: "todo-app-rahil",
  storageBucket: "todo-app-rahil.appspot.com",
  messagingSenderId: "897619567022",
  appId: "1:897619567022:web:02c582a4daac77029de83f",
  measurementId: "G-G9037JZTX5"
});

const db = firebaseApp.firestore();

export default db;
