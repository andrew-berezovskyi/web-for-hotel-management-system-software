import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
    site: "https://thekyivhotel-serm.onrender.com", // <-- вставляєш свою реальну адресу
    integrations: [preact(), tailwind(), compress()],
});
