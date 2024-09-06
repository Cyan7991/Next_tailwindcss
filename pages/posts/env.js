import Head from "next/head";
import Container from "../../component/container";

export default function FirstPost(props) {
  return (
    <>
      <Container>
        <Head>
          <title>Environment Variable</title>
        </Head>
        <h1>Database Credential</h1>
        <p>Host: {props.host}</p>
        <p>Host: {props.username}</p>
        <p>Host: {props.password}</p>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      host: process.env.DB_HOST,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
    },
  };
}
