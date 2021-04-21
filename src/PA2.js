import { useEffect, useState } from "react";
const PA2 = () => {
  const [data, setData] = useState({ title: "hello mf" });
  const [blockSize, setBlockSize] = useState(16);
  const [round, setRound] = useState(1);
  const [cipher,setCipher]=useState('');
  const [plaintext,setPlaintext]=useState('');
  const [key,setKey]=useState('BBBBB');
  const arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    const handleChange = async (msg) => {
       setPlaintext(msg);
    await fetch("/api", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({'round':round,'bsize':blockSize,'text':plaintext,'key':key}),
        cache: "no-cache",
        headers: new Headers({
          "content-type": "application/json",
        }),
      })
        .then((response) => response.json())
        .then(async (dati) => {
          await setCipher(dati.code);
          console.log(dati.code);
        });
  };
  return (
    <div>
        <h2>Data Encryption Algorithm</h2>
        <br/><br/>
    <div >
        <label>Block Size: </label>
      <select name="" onChange={async (e)=>{await setBlockSize(e.target.value);console.log(blockSize);}}>
        <option value="16">16 Bits</option>
        <option value="32">32 Bits</option>
        <option value="64">64 Bits</option>
      </select>
      
      </div>
      <br/><br/><br/>
      <div >
          <label>Number of Rounds: </label>
      <select onChange={async (e)=>{await setRound(e.target.value);console.log(round);}}>{arr.map((x)=>{
          return(<option>{x}</option>)
      })}</select>
      </div>
      <br/><br/><br/>
      <div >
      <label>Key: </label>
      <input type="text" onChange={async (e)=>{await setKey(e.target.value);console.log(key);}}/>
      </div>
      <br/><br/><br/>
      <div>
      <h3>Plaintext</h3>
      <textarea
        className="inpit"
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        value={plaintext}
      />
      </div>
      <div>
      <h3>Ciphertext</h3>
      <textarea
        className="inpit"
        
        value={cipher}
      />
      </div>
    </div>
  );
};

export default PA2;
