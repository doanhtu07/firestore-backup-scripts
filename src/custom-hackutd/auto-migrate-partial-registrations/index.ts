import admin from "firebase-admin";
import initializeApi from "../../init-admin";
import { PartialRegistration, Registration } from "../types";
import { convertToRegistration } from "./convert-to-registration";

initializeApi();

const firestore = admin.firestore();

async function autoMigratePartialRegistrations() {
  try {
    const srcCollectionName = "partial-registrations";
    const targetCollectionName = "registrations";

    await firestore.runTransaction(async (transaction) => {
      const allPartialSnapshots = await firestore
        .collection(srcCollectionName)
        .get();

      let partialRegistrations: PartialRegistration[] = [];

      allPartialSnapshots.forEach((doc) => {
        partialRegistrations.push(doc.data() as PartialRegistration);
      });

      const newRegistrations: Registration[] = partialRegistrations.map(
        (pr) => {
          return convertToRegistration(pr);
        },
      );

      // https://googleapis.dev/nodejs/firestore/latest/CollectionReference.html#doc
      // Auto-generated ID
      const newDocRefs = newRegistrations.map((r) => {
        return firestore.collection(targetCollectionName).doc(r.id);
      });

      for (let i = 0; i < newDocRefs.length; ++i) {
        transaction.set(newDocRefs[i], newRegistrations[i], {
          merge: true,
        });
      }
    });

    console.log(
      "Transaction to auto migrate partial registrations successfully committed!",
    );
  } catch (error) {
    console.error(error);
    throw new Error(
      "Transaction to auto migrate partial registrations failed!",
    );
  }
}

autoMigratePartialRegistrations();
