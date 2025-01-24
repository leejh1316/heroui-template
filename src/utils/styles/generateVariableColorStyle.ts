import { ColorType } from "@src/types/ComponentStyleTypes";
import { css } from "styled-components";

/**
 *
 * @param variableName css 변수명
 * @param baseColor theme에 지정한 컬러명
 * @param colorStates theme에 지정한 각 컬러 스테이트
 * @returns --${varaiableName}${colorState}: var(--color-${baseColor}${colorState});
 */
function generateVariableColorStyle(
  variableName: string,
  baseColor: ColorType,
  colorStates: Array<string> = ["", "-hover", "-active"],
): ReturnType<typeof css> {
  return css`
    ${colorStates.map(state => `--${variableName}${state}: var(--color-${baseColor}${state});`)}
  `;
}

export default generateVariableColorStyle;
