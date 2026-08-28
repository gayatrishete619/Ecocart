import AdmZip from "adm-zip";
import fs from "fs";
import path from "path";

const zip = new AdmZip();

function addDirectoryToZip(dirPath, zipPath = "") {
  const items = fs.readdirSync(dirPath);
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const itemZipPath = zipPath ? `${zipPath}/${item}` : item;
    
    // Exclude patterns
    if (
      item === "node_modules" ||
      item === ".git" ||
      item === "dist" ||
      item === ".next"
    ) {
      continue;
    }
    
    // Prevent self-loop with the generated zip inside public/
    if (item === "ecocart-project.zip" || item === "ecocart-codebase.zip") {
      continue;
    }

    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      addDirectoryToZip(fullPath, itemZipPath);
    } else {
      // In adm-zip, addLocalFile(localPath, zipPath) takes localPath (full path to the local file)
      // and zipPath (the folder path *within* the zip archive where this file should be placed)
      zip.addLocalFile(fullPath, zipPath);
    }
  }
}

// Ensure public directory exists
if (!fs.existsSync("public")) {
  fs.mkdirSync("public");
}

console.log("📦 Starting to package the EcoCart project files...");
try {
  addDirectoryToZip(".");
  zip.writeZip("public/ecocart-project.zip");
  console.log("✨ Successfully created public/ecocart-project.zip!");
} catch (error) {
  console.error("❌ Error generating project zip:", error);
  process.exit(1);
}
