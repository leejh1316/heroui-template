import IconName from "./IconName";
interface IconProps {
  iconName: IconName;
  fill?: number;
  wght?: number;
  grad?: number;
  opsz?: number;
}

// const StyledIcon = styled.i<PrefixWithDollar<IconProps, "iconName">>`
//   user-select: none;
//   font-family: "Material Symbols Rounded";
//   font-size: inherit;
//   display: inline-block;

//   font-style: normal;

//   transition: all 0.225s var(--ease-in-out);

//   font-variation-settings:
//     "FILL" ${props => props?.$fill ?? 0},
//     "wght" ${props => props?.$wght ?? 400},
//     "GRAD" ${props => props?.$grad ?? 0},
//     "opsz" ${props => props?.$opsz ?? 24};
// `;

function Icon({ iconName, fill, grad, opsz, wght }: IconProps) {
  return { iconName };
}

export default Icon;
