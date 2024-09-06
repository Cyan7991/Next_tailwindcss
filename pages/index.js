import Head from "next/head";
import Link from "next/link";
import { Router, useRouter } from "next/router";

function HomePage(props) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Welcome to Next.js!</title>
      </Head>
      <div>Welcome to Next.js!</div>
      <span
        onClick={() =>
          router.push("/posts/first", undefined, { shallow: true })
        }
      >
        Reload
      </span>
      <div>Next stars: {props.stars}</div>
      <br />
      <button
        className="bg-green-300 border-green-600 border-b p-3 m-2 rounded"
        onClick={() => {
          router.push("/posts/first");
        }}
      >
        Tailwind Css
      </button>
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const json = await res.json();
  return {
    props: { stars: json.stargazers_count },
  };
}

export default HomePage;
