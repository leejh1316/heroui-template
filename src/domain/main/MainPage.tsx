import { Code } from "@heroui/react";
import { Icon } from "@src/components/common";

function MainPage() {
  return (
    <div>
      <h1>Main Page</h1>
      <div className="flex items-center text-red-500">
        <Icon iconName="home" fill={1} />
        <Code color="danger">Code Test</Code>
      </div>
    </div>
  );
}

export default MainPage;
