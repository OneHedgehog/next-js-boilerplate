import Image from "next/image";

export default function Home({message}) {
  return (
    <h1>{message}</h1>
  );
}


export function getServerSideProps() {
  return {
    props: {
      message: "I've renderen on server", // This will be passed to your component as props
    },
  };
}
