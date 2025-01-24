import React, { useState, ReactNode, MouseEvent } from "react";

const ScaleInteraction: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const handleInteractionStart = () => setIsActive(true);
  const handleInteractionEnd = () => setIsActive(false);

  return 1;
};

export default ScaleInteraction;
