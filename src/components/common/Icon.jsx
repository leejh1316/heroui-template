function Icon({ iconName, fill, grad, opsz, wght }) {
  const style = {
    fontVariationSettings: `
    'FILL' ${fill ?? 0}, 
    'wght' ${wght ?? 400}, 
    'GRAD' ${grad ?? 0}, 
    'opsz' ${opsz ?? 24}`,
  };
  return (
    <i className="material-symbols-rounded transition-all" style={style}>
      {iconName}
    </i>
  );
}

export default Icon;
