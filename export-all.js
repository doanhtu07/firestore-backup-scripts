const admin = require("firebase-admin");
const initializeApi = require("./init-admin");

initializeApi();

const client = new admin.firestore.v1.FirestoreAdminClient({
  projectId: process.env.SERVICE_ACCOUNT_PROJECT_ID,
  credentials: {
    client_email: process.env.SERVICE_ACCOUNT_CLIENT_EMAIL,
    private_key: process.env.SERVICE_ACCOUNT_PRIVATE_KEY.replace(/\\n/g, "\n"),
  },
});

async function exportFirestoreData() {
  const projectId = process.env.SERVICE_ACCOUNT_PROJECT_ID;
  const databaseName = client.databasePath(projectId, "(default)");

  const baseBucketName = "gs://hackutd-2024-prod-firestore-backup";
  const exportFolder = "all-collections";
  const outputName = `backup-${new Date().getTime().toString()}`;
  const bucketName = `${baseBucketName}/${exportFolder}/${outputName}`;

  console.log(
    "DEBUG - exporting firestore data -",
    projectId,
    databaseName,
    bucketName,
    "\n"
  );

  return client
    .exportDocuments({
      name: databaseName,
      outputUriPrefix: bucketName,
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
      throw new Error("Export operation failed");
    });
}

exportFirestoreData();
