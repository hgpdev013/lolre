"use client";
import { useEffect, useState } from "react";
export default function Home() {
  const [champions, setChampions] = useState([]);

  async function getData() {
    const response = await fetch(
      "https://ddragon.leagueoflegends.com/cdn/13.18.1/data/en_US/champion.json"
    );
    const data = await response.json().then((r) => r.data);
    setChampions(data);
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <main>
      {Object.keys(champions).map((champion) => {
        return (
          <img
            onMouseOver={() => console.log(champions[champion].name)}
            src={`http://ddragon.leagueoflegends.com/cdn/13.18.1/img/champion/${champions[champion].image.full}`}
          />
        );
      })}
    </main>
  );
}
