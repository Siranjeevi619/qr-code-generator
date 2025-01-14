import React, { useState } from "react";
import QRCode from "react-qr-code";

function QrGenerator() {
  const [url, setUrl] = useState("");
  const [size, setSize] = useState(100);

  return (
    <div className="d-flex align-items-center justify-content-center my-auto mt-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            {/* QR Code Display */}
            <div>
              <QRCode value={url || "https://www.google.com"} size={size} />
            </div>
            <br />
            <div>
              <input
                type="text"
                placeholder="Enter URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="form-control w-25 mx-auto"
              />
            </div>
            <br />

            <div>
              <input
                type="number"
                value={size}
                onChange={(e) => setSize(parseInt(e.target.value))}
                className="form-control w-25 mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QrGenerator;
