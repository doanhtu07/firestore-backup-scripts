1. Get project id

```
gcloud projects list
```

2. Check role I'm having

```
gcloud projects get-iam-policy [PROJECT_ID]
```

PROJECT_ID = hackutd-2024-prod

3. List database ids

```
gcloud firestore databases list
```

4. List backup schedules

```
gcloud firestore backups schedules list \
--database='DATABASE_ID'
```

DATABASE_ID = '(default)'

5. Create a backup schedule

```
gcloud firestore backups schedules create \
--database='DATABASE_ID' \
--recurrence=daily \
--retention=RETENTION_PERIOD
```

DATABASE_ID = '(default)'
RETENTION_PERIOD = 1w

6. List backup schedules

```
gcloud firestore backups schedules list \
--database='DATABASE_ID'
```

DATABASE_ID = '(default)'

7. List backups

```
gcloud firestore backups list \
--format="table(name, database, state)"
```
