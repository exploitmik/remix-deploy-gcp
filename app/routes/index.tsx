import { json, LoaderFunction, useLoaderData } from "remix";
import axios from "axios";
import { useProductStore } from "../store";

export const loader: LoaderFunction = async () => {
  const { data } = await axios.get(
    "https://rickandmortyapi.com/api/character/1"
  );
  return data;
};

export default function Index() {
  const data = useLoaderData();
  const { products, arroz, addProduct } = useProductStore();

  const handleAddProduct = () =>
    addProduct({
      id: Math.round(Math.random() * 10),
      name: "Produto " + Math.round(Math.random() * 10),
    });

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      {JSON.stringify(data)}
      <h1>WELCOME TO REMIX!</h1>
      {JSON.stringify(products)}
      {arroz + " parbolizado"}
      <button onClick={handleAddProduct}>adicionar product</button>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorialss
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
