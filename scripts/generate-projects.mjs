import fs from "node:fs";
import path from "node:path";

const rootDir = path.resolve(process.cwd());
const appPath = path.join(rootDir, "src", "App.tsx");
const outputPath = path.join(
  rootDir,
  "src",
  "pages",
  "all-projects",
  "data",
  "projects.tsx"
);

const excludePaths = new Set(["/", "/projects", "*"]);

const titleFromPath = (routePath) => {
  const slug = routePath.replace(/^\//, "");
  if (!slug) return "Home";
  return slug
    .split(/[/-]/)
    .filter(Boolean)
    .map((word) =>
      word.length <= 2
        ? word.toUpperCase()
        : word[0].toUpperCase() + word.slice(1)
    )
    .join(" ");
};

const appContent = fs.readFileSync(appPath, "utf8");
const pathRegex = /path:\s*["']([^"']+)["']/g;

const paths = new Set();
let match;
while ((match = pathRegex.exec(appContent)) !== null) {
  const routePath = match[1];
  if (!routePath.startsWith("/")) continue;
  if (excludePaths.has(routePath)) continue;
  if (routePath.includes(":")) continue;
  if (routePath.includes("*")) continue;
  paths.add(routePath);
}

const projects = Array.from(paths)
  .sort((a, b) => a.localeCompare(b))
  .map((routePath) => ({
    path: routePath,
    title: titleFromPath(routePath),
  }));

const fileContent = `export const allProjects = [
  {
    type: "All Projects",
    projects: ${JSON.stringify(projects, null, 2)}
  }
]
`;

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, fileContent, "utf8");

console.log(`Generated ${projects.length} projects into ${outputPath}`);
