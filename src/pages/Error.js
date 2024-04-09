import MainNavigation from "../components.js/MainNavigation";

export default function ErrorPage() {
    return <>
        <MainNavigation />
        <main>
            <h1>An error occured!</h1>
            <p>Could not ifnd this page!</p>
        </main>
    </>
}