# Manual export + import

Together with using managed backup, we can export and import data from Firestore manually.

## Sources

- https://firebase.google.com/docs/firestore/manage-data/export-import
- https://firebase.google.com/docs/firestore/solutions/schedule-export

## Set up service account with gcloud

```
gcloud auth activate-service-account --key-file=/path/to/your-service-account-key.json
```

## Export all documents

### gcloud

```
gcloud firestore export gs://[BUCKET_NAME] \
--database=[DATABASE]
```

- BUCKET_NAME = hackutd-2024-prod-firestore-backup
- DATABASE = '(default)'

### Script

Run `/dist/export-all.js` script to export all collections

- You can adjust collections in there to export only certain collections.

## Import all documents

### gcloud

```
gcloud firestore import gs://[BUCKET_NAME]/[EXPORT_PREFIX]/ --database=[DATABASE]
```

- BUCKET_NAME = hackutd-2024-prod-firestore-backup
- EXPORT_PREFIX = ''
- DATABASE = '(default)'

### Script

Run `/dist/import-all.js` script to import all collections

## Read collection into csv file

### Script

Run `/dist/read-collection/read-collection-into-csv.js` script to read collection into csv file
