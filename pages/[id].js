import Head from "next/head";
import ReactPlayer from "react-player";
import moment from "moment";

export async function getStaticPaths() {
  const res = await fetch(
    `https://eb69c8de-c627-47d4-b0bd-246d961cbfd3.mock.pstmn.io/youtube?class=10th&subject=Maths`
  );
  const data = await res.json();
  const paths = data.map((item) => {
    return {
      params: {
        id: item.id.toString(),
      },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const res = await fetch(
    `https://eb69c8de-c627-47d4-b0bd-246d961cbfd3.mock.pstmn.io/youtube/id?id=` +
      id
  );
  const data = await res.json();
  return {
    props: { item: data }, // will be passed to the page component as props
  };
}

const Details = ({ item }) => {
  const tags = item.tags.split(",");
  return (
    <div>
      <Head>
        <title>Score Plus</title>
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="video">
        <ReactPlayer
          url={"https://www.youtube.com/watch?v=Edoass0xKwU"}
          controls
          height={"100%"}
          width={"100%"}
        />
      </div>
      <div className="info">
        <h1>{item.title}</h1>
        <p>{moment(item.createdAt).format("MMM DD, YYYY")}</p>
        <h3>{item.description}</h3>
        <div className="tagContainer">
          {tags.map((tag, index) => (
            <p className="tag" key={index}>
              #{tag}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
