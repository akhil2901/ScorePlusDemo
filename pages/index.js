import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export async function getStaticProps() {
  const res = await fetch(
    `https://eb69c8de-c627-47d4-b0bd-246d961cbfd3.mock.pstmn.io/youtube?class=10th&subject=Maths`
  );
  const data = await res.json();
  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Score Plus</title>
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h6 className={styles.title}>Lectures</h6>
        <div className={styles.grid}>
          {data.map((item) => {
            return (
              <Link href={"/" + item.id} key={item.id + item.title}>
                <a href="https://nextjs.org/docs" className={styles.card}>
                  <h2>{item.title} &rarr;</h2>
                  <p>{item.description}</p>
                </a>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}
