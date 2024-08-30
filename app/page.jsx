import Head from "next/head";
import Link from "next/link";
export default function Home() {
  return (
    <div>
    <Head>
      <title>My Awesome Next.js App</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
<Link href="/dashboard">DASHBOARD</Link>
  </div>
  );
}
