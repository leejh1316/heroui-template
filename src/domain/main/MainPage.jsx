import { Code, Link, Button } from "@heroui/react";

import { Icon } from "@src/components/common";

function MainPage() {
  return (
    <div>
      <h1>Main Page</h1>
      <div className="flex items-center text-red-500">
        <Icon iconName="home" fill={1} />
        <Code color="danger">Code Test</Code>
        <Button showAnchorIcon as={Link} color="primary" href="https://github.com/heroui-inc/heroui" variant="bordered">
          Button Link
        </Button>
      </div>
    </div>
  );
}

export default MainPage;
