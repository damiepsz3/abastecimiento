import app from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { configFirebase } from "../config";

class Firebase {
  constructor() {
    console.log(configFirebase);
    app.initializeApp(configFirebase);

    this.auth = app.auth();
    this.db = app.database();
  }

  // *** User API ***
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  // *** Solicitudes API ***

  solicitud = uid => this.db.ref(`solicitudes/${uid}`);

  solicitudes = () => this.db.ref("solicitudes");
}

export default Firebase;
