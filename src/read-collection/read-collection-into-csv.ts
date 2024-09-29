import admin from "firebase-admin";
import initializeApi from "../init-admin";
import { writeCsv } from "./utils/write-csv";
import * as path from "path";

initializeApi();

const firestore = admin.firestore();

async function readCollectionIntoCsv() {
  try {
    const collectionName = "registrations"; // NOTE: CHANGE THIS

    const outputBase = path.join(__dirname, "../../outputs");
    const outputName = "registrations"; // NOTE: CHANGE THIS
    const outputPath = `${outputBase}/${outputName}.csv`;

    const snapshot = await firestore.collection(collectionName).get();
    let data: any[] = [];

    snapshot.forEach((doc) => {
      data.push(doc.data());
    });

    if (data.length > 0) {
      console.log("DEBUG - read collection into csv -", data[0], "\n");
    } else {
      console.log("DEBUG - read collection into csv - no data found\n");
    }

    writeCsv(outputPath, data);
  } catch (error) {
    console.error(error);
    throw new Error("Reading collection into CSV failed");
  }
}

readCollectionIntoCsv();
