import React from "react";
import { useState } from "react";
import QRCode from "react-qr-code";

function QrGenerator() {
  const [value, setValue] = useState("");
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      {value && <QRCode value={value} size="100" />}
    </div>
  );
}

export default QrGenerator;
