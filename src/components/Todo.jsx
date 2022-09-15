import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from './Firebase'

const Todo = () => {
  /*const inputElement = useRef();

    const focusInput = () => {
      console.log(inputElement.current.value);
    };
  
    return (
      <>
        <input type="text" ref={inputElement} />
        <button onClick={focusInput}>Ekleme</button>
      </>
    );*/

  const [input, setInput] = useState("");
    console.log(input);
  const [load, setLoad] = useState([]);

  const ekle = (e) => {
    e.preventDefault()
    /*
    setLoad([
      ...load,
      {
        id: nanoid(),
        text: input, // degiskeni text atadik
        // date: Date.now()
      },
    ]);
    setInput("");*/

    const addRef = collection(db, "adana")
    addDoc(addRef, {adanali:input})
    .then(res => {
      console.log(res)
      setLoad([...load, {adanali:input, id:res.id}])
    })
  };

  const sileyimAbimi = (id) => {
    const abc = load.filter((gelen) => gelen.id !== id);
    setLoad(abc);
  };

  const degistirBeni = (id) => {
    alert(`Olur öyle ${id}`);
  };

  

  const getTodos = async (db) => {

  const collRe = collection(db, "adana")

  const todoSch = await getDocs(collRe)

    console.log(todoSch);
  }
  
  useEffect(() => {
    getTodos();
  }, [])

  return (
    <div>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={ekle}>Ekleme</button>
        {load.map((el) => (
          <div>
            {el.id}
            {el.text}
            <button onClick={() => sileyimAbimi(el.id)}>
              Sil beni adamsan
              </button>
            <button onClick={() => degistirBeni(el.id)}>Güncelle</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Todo;
