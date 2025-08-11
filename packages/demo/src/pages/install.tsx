import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function InstallRedirect() {
    const router = useRouter();
    useEffect(() => {
        router.replace("/device-info");
    }, [router]);
    return (
        <>
            <Head>
                <title>Install APK - Moved</title>
            </Head>
            <p>Install APK has moved to Device Info. Redirecting…</p>
        </>
    );
}
