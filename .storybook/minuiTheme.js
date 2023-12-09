import { create } from "@storybook/theming/create";
import logoText from "../src/stories/assets/logo-text.svg";

export default create({
  base: "light",
  brandTitle: "MinUI",
  brandUrl: "https://github.com/loic-prosi/minui",
  brandImage: logoText,
  brandTarget: "_self"
});
