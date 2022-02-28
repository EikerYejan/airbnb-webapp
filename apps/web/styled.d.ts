import { Theme } from "ui";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
