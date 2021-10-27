import React from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function MenuTopo2() {
    const { data, error } = useSWR(
      "https://www.yurioliveira.tec.br/api/categorias",
      fetcher
    );
  
    if (error) return "An error has occurred.";
    if (!data) return "Loading...";
    
    const categorias = data.data;

    console.log(categorias)
    
    return (
      <div>
          <h2>asdasdsa</h2>
        <ul>
            {categorias.map((cat) => (
                <li key={cat._id}>
                    <p>{ cat.nome_categoria}</p>
                </li>
            ))}
        </ul>
      </div>
    );
  }
  