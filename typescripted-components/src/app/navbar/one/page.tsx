import Component from "./Component";

type Props = {};

export default function page({}: Props) {
  return (
    <main className="relative flex h-screen">
      <Component />
    </main>
  );
}
