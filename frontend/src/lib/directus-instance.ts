import { DIRECTUS_URL } from "@/constants/url";
import { authentication, createDirectus, rest } from "@directus/sdk";

// interface Global {
//   title: string;
//   description: string;
// }

// interface Page {
//   title: string;
//   content: string;
//   slug: string;
// }

// type Schema = {
//   global: Global;
//   pages: Page[];
// };

export const directus = createDirectus(DIRECTUS_URL)
  .with(rest())
  .with(authentication("cookie", { credentials: "include" }));
