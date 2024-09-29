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
