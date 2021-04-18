import { useState } from "react";
const PA1 = () => {
  const [cipher, setCipher] = useState("");
  const [plaintext, setplaintext] = useState("");
  const handleEncryption = (msg) => {
    let l = msg.length;
    var nmsg = "";
    setplaintext(msg);
    for (let i = 0; i < l; i++) {
      let x = msg.charCodeAt(i);
      if (x >= 65 && x <= 90) {
        nmsg += String.fromCharCode(90 - (x - 65));
      } else if (x >= 97 && x <= 122) {
        nmsg += String.fromCharCode(122 - (x - 97));
      } else {
        nmsg += msg[i];
      }
    }
    setCipher(nmsg);
  };
  const handleDecryption = (msg) => {
    let l = msg.length;
    var nmsg = "";
    setCipher(msg);
    for (let i = 0; i < l; i++) {
      let x = msg.charCodeAt(i);
      if (x >= 65 && x <= 90) {
        nmsg += String.fromCharCode(90 - (x - 65));
      } else if (x >= 97 && x <= 122) {
        nmsg += String.fromCharCode(122 - (x - 97));
      } else {
        nmsg += msg[i];
      }
    }
    setplaintext(nmsg);
  };
  return (
    <div>
      <h3>Plaintext</h3>
      <textarea
        className="inpit"
        onChange={(e) => {
          handleEncryption(e.target.value);
        }}
        value={plaintext}
      />
      <h3>Ciphertext</h3>
      <textarea
        className="inpit"
        onChange={(e) => {
          handleDecryption(e.target.value);
        }}
        value={cipher}
      />
    </div>
  );
};

export default PA1;
