import CatCard from "@/components/cards/cat/CatCard";
import type { NextPage } from "next";
import { mockCatCardProps } from "@/components/cards/cat/CatCard.mocks";

const Home: NextPage = () => {
  return (
    <section className="bg-gradient-to-r from-cyan-500 to-blue-500">
      <CatCard {...mockCatCardProps.base} />
    </section>
  );
};

export default Home;
