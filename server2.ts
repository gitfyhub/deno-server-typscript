import { serve } from "https://deno.land/std@v0.5/http/server.ts";

async function main() {
  const body = new TextEncoder().encode("Hello Earth\n");
  for await (const req of serve(":8800")) {
    req.respond({ body });
  }
}

main();