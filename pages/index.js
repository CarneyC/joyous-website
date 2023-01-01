import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Bulldozer from "@components/Bulldozer";

export default function Home() {
    return (<div className="container">
            <Head>
                <title>Joyoustw</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                <Bulldozer />
            </main>
        </div>)
}
