import app from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";
import { configFirebase } from "../config";

class Firebase {
  constructor() {
    app.initializeApp(configFirebase);

    this.auth = app.auth();
    this.db = app.firestore();
  }

  // *** User API ***
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  // currentUser = () => this.auth().currentUser;
  doAnonymousSignIn = () =>
    this.auth.signInAnonymously().catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      // ...
    });

  doSignOut = () => this.auth.signOut();

  // *** Rest API ***
  generateToken = () => this.auth().currentUser.getIdToken(true);
  verifyToken = idToken => this;

  // *** Solicitudes API ***

  addSolicitud = solicitud =>
    this.db.collection(`solicitudes`).add({
      createdDate: app.firestore.Timestamp.fromDate(new Date()),
      ...solicitud
    });
  getSolicitudes = () =>
    this.db
      .collection("solicitudes")
      .get()
      .then(snapShot => {
        const resp = [];
        snapShot.forEach(snap => {
          const { createdDate, ...rest } = snap.data();
          resp.push({
            id: snap.id,
            createdDate: createdDate.toDate(),
            ...rest
          });
        });
        return resp;
      });
}

export default Firebase;
