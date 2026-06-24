import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const expected = ["owl", "hyper-agnos", "hvisualizerr", "hyper-map", "hsave"];
const skillsRoot = path.join(root, "skills");
const commandsRoot = path.join(root, "commands", "opencode");

const failures = [];

for (const name of expected) {
  const dir = path.join(skillsRoot, name);
  const skill = path.join(dir, "SKILL.md");
  const readme = path.join(dir, "README.md");
  if (!fs.existsSync(skill)) failures.push(`missing ${path.relative(root, skill)}`);
  if (!fs.existsSync(readme)) failures.push(`missing ${path.relative(root, readme)}`);
  if (fs.existsSync(skill)) {
    const text = fs.readFileSync(skill, "utf8");
    if (!text.startsWith("---\n")) failures.push(`${name}/SKILL.md missing frontmatter`);
    if (!/^name:\s*\S+/m.test(text)) failures.push(`${name}/SKILL.md missing name`);
    if (!/^description:\s*.+/m.test(text)) failures.push(`${name}/SKILL.md missing description`);
  }
}

const actual = fs.readdirSync(skillsRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();
const extra = actual.filter((name) => !expected.includes(name));
if (extra.length) failures.push(`unexpected skill folders: ${extra.join(", ")}`);

for (const command of ["owl.md", "hyper-agnos.md", "hvisualizerr.md", "hyper-mapper.md", "hsave.md"]) {
  const commandPath = path.join(commandsRoot, command);
  if (!fs.existsSync(commandPath)) failures.push(`missing ${path.relative(root, commandPath)}`);
}

const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
if (pkg.name !== "hyper-agent-skills") failures.push("package name must be hyper-agent-skills");
if (pkg.private) failures.push("package must not be private");

if (failures.length) {
  console.error(failures.map((failure) => `- ${failure}`).join("\n"));
  process.exit(1);
}

console.log("Hyper Skills check passed");
