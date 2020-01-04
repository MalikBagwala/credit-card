export default {
  primary: "rgb(218, 65, 103)",
  secondary: "#FFD6E0",
  shadowPrimary: "rgba(218, 65, 103, 0.3)",
  "gray-100": "#F5F8FA",
  "gray-200": "#EBF1F5",
  "gray-300": "#CED9E0",
  "gray-400": "#BFCCD6",
  "gray-500": "#394B59",
  "gray-600": "#293742",
  "gray-700": "#182026"
};

export interface ThemeInterface {
  primary?: string;
  secondary?: string;
  "gray-100"?: string;
  "gray-200"?: string;
  "gray-300"?: string;
  "gray-400"?: string;
  "gray-500"?: string;
  "gray-600"?: string;
  "gray-700"?: string;
}
