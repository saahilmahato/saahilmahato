import { execSync } from "child_process";

try {
  execSync(
    `npx github-readme-stats --username saahilmahato --output assets/stats.svg`,
    { stdio: "inherit" }
  );

  execSync(
    `npx github-readme-stats --username saahilmahato --output assets/top-langs.svg --langs`,
    { stdio: "inherit" }
  );

} catch (err) {
  console.error(err);
  process.exit(1);
}
