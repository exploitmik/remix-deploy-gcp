import { json, LoaderFunction, useLoaderData } from "remix";
import axios from "axios";

export const loader: LoaderFunction = async () => {
  const { data } = await axios.get(
    "https://rickandmortyapi.com/api/character/1"
  );
  return data;
};

export default function Index() {
  const data = useLoaderData();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      {JSON.stringify(data)}
      <h1>WELCOME TO REMIxxxxxxxxxxxX!!!!!!!!!</h1>
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
