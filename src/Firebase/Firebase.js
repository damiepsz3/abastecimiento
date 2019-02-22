import app from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/functions";
import { configFirebase } from "../config";

class Firebase {
  constructor() {
    app.initializeApp(configFirebase);

    this.auth = app.auth();
    this.db = app.firestore();
    this.functions = app.functions();
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
      razon: "",
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

  updateSolicitud = (id, estado, razon = null) =>
    this.db
      .collection("solicitudes")
      .doc(id)
      .update({ estado, razon });

  // *** Storage API ***
  uploadCSV = file => {
    // const metadata = {
    //   contentType: "text/csv"
    // };
    //
    // return this.storage
    //   .ref()
    //   .child("procesadas/" + "test")
    //   .put(new Blob(file), metadata);
    this.functions.https.onRequest((request, response) => {
      response.setHeader(
        "Content-disposition",
        "attachment; filename=report.csv"
      );
      response.set("Content-Type", "text/csv");
      response.status(200).send(file);
    });
  };
}

export default Firebase;
