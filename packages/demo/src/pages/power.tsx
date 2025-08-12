import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function PowerRedirect() {
    const router = useRouter();
    useEffect(() => {
        router.replace("/device-info");
    }, [router]);
    return (
        <>
            <Head>
                <title>Power Menu - Moved</title>
            </Head>
            <p>Power controls have moved to Device Info. Redirecting…</p>
        </>
    );
}
