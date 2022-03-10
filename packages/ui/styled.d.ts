import { Theme } from "./src/styles/theme";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
