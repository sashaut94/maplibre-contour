import { readdirSync, unlinkSync, existsSync } from "node:fs";
import { join } from "node:path";

const dir = join(process.cwd(), "dist");
if (!existsSync(dir)) process.exit(0);

for (const name of readdirSync(dir)) {
  if (name.endsWith(".test.d.ts") || name.endsWith("-jest.d.ts")) {
    unlinkSync(join(dir, name));
  }
}