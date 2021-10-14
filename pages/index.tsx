import Head from "next/head";
import Nav from "../components/Nav/Nav";

import Header from "../components/Header/Header";
import Results from "../components/Results/Results";
import { requests } from "../utils/requests";

import { GetServerSideProps } from "next";

import { ResultsProps } from "../components/Results/Results";

export default function Home({ results }: ResultsProps): JSX.Element {
  return (
    <div>
      <Head>
        <title>Hulu2.0</title>
        <link href="/favicon.ico" />
      </Head>
      <Header />
      <Nav />
      <Results results={results} />
    </div>
  );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const genre = context.query.genre as string;

  const response = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTopRated.url
    }`
  );

  const data = await response.json();

  return {
    props: { results: data.results },
  };
};
