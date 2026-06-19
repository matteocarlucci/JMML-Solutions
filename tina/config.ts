import { defineConfig } from "tinacms";

// The branch that edits are saved to. Locally this is ignored (local mode);
// in production it is set by the build environment (see the deploy workflow).
const branch =
  process.env.TINA_BRANCH ||
  process.env.GITHUB_REF_NAME ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // These two come from your free Tina Cloud account (added in Phase 3).
  // Left undefined for local editing, which works without them.
  clientId: process.env.TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin", // the editor is served at /admin
    publicFolder: "public",
  },

  media: {
    tina: {
      mediaRoot: "images", // uploads are saved to public/images
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      // -------------------------------------------------------------
      // HOME PAGE — all the words on the single page
      // -------------------------------------------------------------
      {
        name: "home",
        label: "Home Page",
        path: "content/pages",
        format: "json",
        match: { include: "home" },
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Top Banner (Hero)",
            fields: [
              { type: "string", name: "eyebrow", label: "Small label above the headline" },
              { type: "string", name: "title", label: "Main headline" },
              {
                type: "string",
                name: "subtitle",
                label: "Supporting sentence",
                ui: { component: "textarea" },
              },
              { type: "string", name: "primaryButton", label: "Blue button text" },
              { type: "string", name: "secondaryButton", label: "Outline button text" },
            ],
          },
          {
            type: "object",
            name: "services",
            label: "Services Section",
            fields: [
              { type: "string", name: "heading", label: "Section heading" },
              {
                type: "string",
                name: "lead",
                label: "Intro sentence",
                ui: { component: "textarea" },
              },
              {
                type: "object",
                name: "items",
                label: "Service cards",
                list: true,
                ui: {
                  itemProps: (item) => ({ label: item?.title || "Service" }),
                },
                fields: [
                  { type: "string", name: "title", label: "Service name" },
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
                    ui: { component: "textarea" },
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "about",
            label: "About Section",
            fields: [
              { type: "string", name: "heading", label: "Heading" },
              {
                type: "string",
                name: "paragraphs",
                label: "Paragraphs",
                list: true,
                ui: { component: "textarea" },
              },
              {
                type: "object",
                name: "stats",
                label: "Highlight numbers",
                list: true,
                ui: {
                  itemProps: (item) => ({ label: item?.label || "Stat" }),
                },
                fields: [
                  { type: "string", name: "value", label: "Number (e.g. 50+)" },
                  { type: "string", name: "label", label: "Caption" },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "contact",
            label: "Contact Section",
            fields: [
              { type: "string", name: "heading", label: "Heading" },
              {
                type: "string",
                name: "intro",
                label: "Intro text",
                ui: { component: "textarea" },
              },
              { type: "string", name: "email", label: "Email address" },
              { type: "string", name: "phone", label: "Phone number" },
              { type: "string", name: "location", label: "Location" },
            ],
          },
        ],
      },

      // -------------------------------------------------------------
      // SITE SETTINGS — logo, company name, and menu links
      // -------------------------------------------------------------
      {
        name: "settings",
        label: "Site Settings (logo & menu)",
        path: "content/settings",
        format: "json",
        match: { include: "index" },
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "companyName", label: "Company name" },
          { type: "image", name: "logo", label: "Logo image" },
          { type: "string", name: "ctaLabel", label: "Header button text" },
          {
            type: "object",
            name: "nav",
            label: "Menu links",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.label || "Link" }),
            },
            fields: [
              { type: "string", name: "label", label: "Link text" },
              { type: "string", name: "target", label: "Section (e.g. #about)" },
            ],
          },
        ],
      },
    ],
  },
});
