#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(__dirname, "..");
const sourceRoot = path.join(packageRoot, "skills");
const commandsRoot = path.join(packageRoot, "commands", "opencode");
const installRoot = process.env.INIT_CWD || process.cwd();
const targetRoot = path.join(installRoot, ".agents", "skills");
const opencodeCommandRoot = path.join(installRoot, ".opencode", "commands");
const skip = process.env.HYPER_SKILLS_SKIP_INSTALL === "1";

const skillNames = ["owl", "hvisualizerr", "hyper-map"];
const opencodeCommands = ["owl.md", "hvisualizerr.md", "hyper-mapper.md"];

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

if (skip) {
  console.log("[hyper-agent-skills] skipped skill install because HYPER_SKILLS_SKIP_INSTALL=1");
  process.exit(0);
}

try {
  for (const name of skillNames) {
    copyDir(path.join(sourceRoot, name), path.join(targetRoot, name));
  }
  fs.mkdirSync(opencodeCommandRoot, { recursive: true });
  for (const name of opencodeCommands) {
    fs.copyFileSync(path.join(commandsRoot, name), path.join(opencodeCommandRoot, name));
  }
  console.log(`[hyper-agent-skills] installed ${skillNames.length} skills into ${targetRoot}`);
  console.log(`[hyper-agent-skills] installed ${opencodeCommands.length} OpenCode commands into ${opencodeCommandRoot}`);
} catch (error) {
  console.warn(`[hyper-agent-skills] package installed, but skill copy failed: ${error.message}`);
  console.warn("[hyper-agent-skills] run `npx hyper-agent-skills install` from your project to retry.");
}
