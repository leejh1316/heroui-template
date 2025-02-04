import IconName from "./IconName";
interface IconProps {
  iconName: IconName;
  className?: string;
  fill?: number;
  wght?: number;
  grad?: number;
  opsz?: number;
}

function Icon({ iconName, fill, grad, opsz, wght, className }: IconProps) {
  const style = {
    fontVariationSettings: `
    'FILL' ${fill ?? 0}, 
    'wght' ${wght ?? 400}, 
    'GRAD' ${grad ?? 0}, 
    'opsz' ${opsz ?? 24}`,
  };
  return (
    <i className={`material-symbols-rounded select-none transition-all ${className}`} style={style}>
      {iconName}
    </i>
  );
}

export default Icon;
