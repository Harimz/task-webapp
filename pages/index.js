import { Button } from "@chakra-ui/react";
import { useSession, signIn, signOut, getSession } from "next-auth/react";

export default function Home() {
  return <>Home</>;
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    return {
      props: {},
      redirect: {
        permanent: false,
        destination: "/list",
      },
    };
  } else {
    return {
      props: {},
    };
  }
};
