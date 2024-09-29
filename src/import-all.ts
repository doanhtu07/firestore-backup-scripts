import admin from "firebase-admin";
import initializeApi from "./init-admin";

initializeApi();

if (
  !process.env.SERVICE_ACCOUNT_PROJECT_ID ||
  !process.env.SERVICE_ACCOUNT_CLIENT_EMAIL ||
  !process.env.SERVICE_ACCOUNT_PRIVATE_KEY
) {
  throw new Error(
    "Missing service account credentials. Set environment variables in .env file."
  );
}

const {
  SERVICE_ACCOUNT_PROJECT_ID,
  SERVICE_ACCOUNT_CLIENT_EMAIL,
  SERVICE_ACCOUNT_PRIVATE_KEY,
} = process.env;

const client = new admin.firestore.v1.FirestoreAdminClient({
  projectId: SERVICE_ACCOUNT_PROJECT_ID,
  credentials: {
    client_email: SERVICE_ACCOUNT_CLIENT_EMAIL,
    private_key: SERVICE_ACCOUNT_PRIVATE_KEY.replace(/\\n/g, "\n"),
  },
});

async function importFirestoreData() {
  const projectId = SERVICE_ACCOUNT_PROJECT_ID;
  const databaseName = client.databasePath(projectId, "(default)");

  const baseBucketName = "gs://hackutd-2024-prod-firestore-backup";
  const exportFolder = "all-collections";
  const outputName = `backup-${"<INPUT TIMESTAMP>"}`; // NOTE: CHANGE THIS
  const bucketName = `${baseBucketName}/${exportFolder}/${outputName}`;

  console.log(
    "DEBUG - importing firestore data -",
    projectId,
    databaseName,
    bucketName,
    "\n"
  );

  return client
    .importDocuments({
      name: databaseName,
      inputUriPrefix: bucketName,
      // Leave collectionIds empty to export all collections
      // or set to a list of collection IDs to export,
      // collectionIds: ['users', 'posts']
      collectionIds: [],
    })
    .then((responses) => {
      const response = responses[0];
      console.log(`Operation Name: ${response["name"]}`);
    })
    .catch((err) => {
      console.error(err);
      throw new Error("Import operation failed");
    });
}

importFirestoreData();
