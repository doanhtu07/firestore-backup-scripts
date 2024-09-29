import * as fs from "fs";
import * as path from "path";

/**
 * Writes content to a file, creating the file and its directory structure if they don't exist.
 * @param filePath The path to the file
 * @param content The content to write to the file
 * @returns A promise that resolves when the write operation is complete
 */
export async function writeToPath(
  filePath: string,
  content: string
): Promise<void> {
  try {
    // Ensure the directory exists
    const directory = path.dirname(filePath);
    await fs.promises.mkdir(directory, { recursive: true });

    // Write the file
    await fs.promises.writeFile(filePath, content, "utf8");

    console.log(`Successfully wrote to ${filePath}`);
  } catch (error) {
    console.error(`Error writing to ${filePath}:`, error);
    throw error;
  }
}
