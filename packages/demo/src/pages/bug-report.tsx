// cspell: ignore bugreport
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function BugReportRedirect() {
    const router = useRouter();
    useEffect(() => {
        router.replace("/device-info");
    }, [router]);
    return (
        <>
            <Head>
                <title>Bug Report - Moved</title>
            </Head>
            <p>Bug Report has moved to Device Info. Redirecting…</p>
        </>
    );
}
