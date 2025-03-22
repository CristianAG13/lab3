import WelcomeWidget from './welcomeWidget';

export default function Home({ email }) {
    return (
        <>
            <h1>You are at home</h1>
            <WelcomeWidget email={email} />
        </>
    );
}