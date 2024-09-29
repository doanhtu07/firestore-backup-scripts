import { writeToPath } from "./write-file";

function forceString(value: any): string {
  if (typeof value === "object") {
    return JSON.stringify(value);
  } else {
    return String(value);
  }
}

// Function to escape commas in CSV fields
function escapeCommas(value: any): string {
  // https://stackoverflow.com/questions/51394514/how-to-escape-json-string-for-csv-parsing
  return `"${value.replace(/"/g, '""')}"`;
}

// Convert the data array to CSV format
function convertToCSV(data: any[]): string {
  if (data.length === 0) {
    return "";
  }

  const keys = Object.keys(data[0]).sort();
  const headers = keys.join(","); // Extract headers

  const rows = data.map((row) => {
    const values = keys.map((k) => row[k]);
    return values.map(forceString).map(escapeCommas).join(",");
  });
  return [headers, ...rows].join("\n"); // Join headers and rows
}

export async function writeCsv(outputPath: string, data: any[]) {
  const csv = convertToCSV(data);
  await writeToPath(outputPath, csv);
}
