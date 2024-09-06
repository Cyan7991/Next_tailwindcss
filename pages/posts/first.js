import Link from "next/link";
import Container from "../../component/container";
import Head from "next/head";

export default function FirstPost(props) {
  return (
    <>
      <Container>
        <Head>
          <title>My first Post</title>
        </Head>
        <h1>My First Post</h1>
        <h2>
          <Link href="/">
            <p>Home</p>
          </Link>
          <div>Next stars: {props.stars}</div>
        </h2>
        <button className="bg-green-300 border-green-600 p-2 m-2 rounded">
          Tailwind
        </button>
        <div class="p-6 max-w-md mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-8">
          <div class="">
            <img class="size-12" src="/avatar.png" alt="ChitChat Logo" />
          </div>
          <div>
            <div class="text-xl font-medium text-black">ChitChat</div>
            <p class="text-slate-500">You have a new message!</p>
          </div>
        </div>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const json = await res.json();
  return {
    props: { stars: json.stargazers_count },
  };
}
