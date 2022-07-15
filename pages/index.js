import { Button } from "@chakra-ui/react";
import { useSession, signIn, signOut, getSession } from "next-auth/react";

export default function Home() {
  return <>Home</>;
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  console.log(session);

  if (session) {
    return {
      props: {},
      redirect: {
        permanent: false,
        destination: "/dashboard",
      },
    };
  } else {
    return {
      props: {},
    };
  }
};
