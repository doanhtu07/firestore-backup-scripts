# Backup data

## Firestore database

https://firebase.google.com/docs/firestore/backups

- Pricing: Backup data -> $0.03/GiB/month

## Setup gcloud CLI

https://cloud.google.com/sdk/docs/install

- Recommended Python version is 3.11
- You can use Pyenv to easily to switch between Python versions

## Manage schedules

### Create a backup schedule with the following command:

#### DAILY

```
gcloud firestore backups schedules create \
--database='DATABASE_ID' \
--recurrence=daily \
--retention=RETENTION_PERIOD
```

- `DATABASE_ID`: The ID of the database to back up. Set to '(default)' for the default database.
- `RETENTION_PERIOD`: Set this to a value up to 14 weeks (14w).

#### WEEKLY

```
gcloud firestore backups schedules create \
--database='DATABASE_ID' \
--recurrence=weekly \
--retention=RETENTION_PERIOD \
--day-of-week=DAY
```

### List backup schedules

```
gcloud firestore backups schedules list \
--database='DATABASE_ID'
```

### Describe backup schedule

```
gcloud firestore backups schedules describe \
--database='DATABASE_ID' \
--backup-schedule=BACKUP_SCHEDULE_ID
```

### Update backup schedule

```
gcloud firestore backups schedules update \
--database='DATABASE_ID' \
--backup-schedule=BACKUP_SCHEDULE_ID \
--retention=RETENTION_PERIOD
```

### Delete backup schedule

```
gcloud firestore backups schedules delete \
--database='DATABASE_ID' \
--backup-schedule=BACKUP_SCHEDULE_ID
```

## Manage backups (not schedule itself)

### List backups

```
gcloud firestore backups list \
--format="table(name, database, state)"
```

```
gcloud firestore backups list \
--location=LOCATION \
--format="table(name, database, state)"
```

### Describe backup

```
gcloud firestore backups describe \
--location=LOCATION \
--backup=BACKUP_ID
```

### Delete backup

```
gcloud firestore backups delete \
--location=LOCATION \
--backup=BACKUP_ID
```

## Restore

```
gcloud firestore databases restore \
--source-backup=projects/PROJECT_ID/locations/LOCATION/backups/BACKUP_ID \
--destination-database='DATABASE_ID'
```
