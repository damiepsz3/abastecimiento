import app from "firebase/app";
//import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/functions";
import { configFirebase } from "../config";

class Firebase {
  constructor() {
    app.initializeApp(configFirebase);

    this.auth = app.auth();
    this.db = app.database();
    this.functions = app.functions();
  }

  // *** User API ***
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  // currentUser = () => this.auth().currentUser;
  doAnonymousSignIn = () =>
    this.auth.signInAnonymously().catch(function(error) {
      // Handle Errors here.
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
    this.db.ref(`solicitudes/`).push({
      createdDate: app.database.ServerValue.TIMESTAMP,
      razon: "",
      ...solicitud
    });

  getSolicitudes = () =>
    this.db.ref("solicitudes").then(snapShot => {
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
    this.db.ref(`solicitudes/${id}`).update({ estado, razon });

  // updateCaracteristica = (id, caracteristica, valor) => {
  //   let obj = {};
  //   obj[caracteristica] = valor;
  //   this.db.ref(`solicitudes/${id}/camposDinamicos/`).update(obj);
  // };
  updateCaracteristica = (id, updatedObj) => {
    return new Promise((res, rej) => {
      this.db
        .ref(`solicitudes/${id}/camposDinamicos/`)
        .set(updatedObj, error => {
          if (error) rej(error);
          res("successfull");
        });
    });
  };

  updateField = (id, field, value) => {
    let obj = {};
    obj[field] = value;
    this.db.ref(`solicitudes/${id}`).update(obj);
  };
  deleteSolicitudes = ids => {
    return Promise.all(
      ids.map(id => this.db.ref(`solicitudes/${id}`).remove())
    );
  };
}

export default Firebase;
