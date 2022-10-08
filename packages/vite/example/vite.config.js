import react from "@vitejs/plugin-react";
import replaceModulePlugin from "../index";

export default {
  jsx: "react",
  server: {
    host: "0.0.0.0",
    port: 3003,
    open: "/",
    https: false,
  },
  plugins: [
    react(),
    replaceModulePlugin({
      rules: [
        {
          originModule: "test",
          replaceModule: "lodash-es",
        },
        {
          originModule: "tdesign-react",
          replaceModule: "tdesign-react/lib/",
        },
        {
          originModule: "tdesign-icons-react",
          replaceModule: "tdesign-icons-react-tea",
          context: /node_modules\/tdesign-react/,
        },
      ],
    }),
  ],
};
