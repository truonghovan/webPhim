import { Button } from "antd";
import { Result } from "antd";
import React from "react";

export default function TransferHistory() {
  return (
    <div>
      <Result
        title="Your operation has been executed"
        extra={
          <Button type="primary" key="console">
            Go Console
          </Button>
        }
      />
    </div>
  );
}
