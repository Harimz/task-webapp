import { Button } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <p>TEST</p>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign Out</button>
      </>
    );
  }

  return (
    <>
      Not signed in <br />
      <Button onClick={() => signIn()}>Sign In</Button>
    </>
  );
}
