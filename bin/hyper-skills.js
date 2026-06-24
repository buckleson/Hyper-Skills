#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(__dirname, "..");
const sourceRoot = path.join(packageRoot, "skills");
const skillNames = ["owl", "hvisualizerr", "hyper-map"];

function copyDir(source, target) {
  fs.mkdirSync(target, { recursive: true });
  for (const entry of fs.readdirSync(source, { withFileTypes: true })) {
    const from = path.join(source, entry.name);
    const to = path.join(target, entry.name);
    if (entry.isDirectory()) {
      copyDir(from, to);
    } else if (entry.isFile()) {
      fs.copyFileSync(from, to);
    }
  }
}

function install(cwd) {
  const targetRoot = path.join(cwd, ".agents", "skills");
  for (const name of skillNames) {
    copyDir(path.join(sourceRoot, name), path.join(targetRoot, name));
  }
  console.log(`Installed Hyper Skills into ${targetRoot}`);
}

const command = process.argv[2] || "install";

if (command === "list") {
  for (const name of skillNames) console.log(name);
} else if (command === "install") {
  install(process.cwd());
} else {
  console.error("Usage: hyper-agent-skills [install|list]");
  process.exit(1);
}
