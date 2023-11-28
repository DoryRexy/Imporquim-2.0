
import ResponsiveTest from "@/components/utils/ResponsiveTest";
import Spinner from "@/components/utils/Spinner";
import { useEffect, useState } from "react";


export async function getServerSideProps() {

  const DEBUG = process.env.DEBUG_MODE == null ? false :
    (process.env.DEBUG_MODE == "true" ? true : false)

  if (DEBUG) {
    console.log(process.env)
  }
  return ({
    props: {
      ...process.env
    }
  })
}


export default function Home(props: NodeJS.ProcessEnv) {

  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    <Spinner />
  }



  return (
    <ResponsiveTest />
  );
}
