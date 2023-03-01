import React, { useEffect, useRef, useState } from "react";
const Salom = () => {
  const [colored,setColored]=useState(true)
  const style={
    color:colored?"red":"yellow"
  }
  const userTel = useRef();
  const userPost = () => {
    const user = userTel.current.value;
    fetch("http://azizbek.samandardev.uz/v1/user/register", {
      method: "POST",
      body: JSON.stringify({
        phone_number: user,
      }),
      headers: {
        "Content-Type": "applicatin/json",
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  return (
    <div>
      <h1>Salom Kamoliddin</h1>
      <form>
        <input type="text" placeholder="tel" ref={userTel} />
        <button type="reset" onClick={userPost}>POST TEL</button>
      </form>
      <h1 style={style}>Hi Kamoliddin</h1>
      <button onClick={()=>setColored(!colored)}>ok</button>
    </div>
  );
};
export default Salom;
