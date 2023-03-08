import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:4000/graphql",
  documents: "src/**/*.graphql",
  ignoreNoDocuments: true,
  generates: {
    "src/__generated__/types.ts": {
      plugins: ["typescript"],
    },
    "src/": {
      preset: "near-operation-file",
      presetConfig: { extension: ".tsx", baseTypesPath: "__generated__/types.ts", folder: "__generated__" },
      plugins: ["typescript-operations", "typescript-react-apollo"],
      config: { withHooks: true },
    },
  },
};

export default config;
