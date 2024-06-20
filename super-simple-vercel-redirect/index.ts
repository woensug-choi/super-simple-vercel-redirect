// index.ts

import { serve } from "bun";

serve({
  fetch(request) {
    return new Response(null, {
      status: 301,
      headers: {
        Location: 'https://chatgee.notion.site/86a629fdccf64af48a23f1408d7f519e/',
      },
    });
  },
  port: process.env.PORT || 3000,
});