import CryptoItem from "./components/CryptoItem";

function App() {
    const token = [
        {
            name: "Atom",
            course: 10,
            wallet: "OKX",
        },
        {
            name: "Eth",
            course: 250,
            wallet: "SFP",
        },
        {
            name: "Atom",
            course: 99,
            wallet: "Metta",
        },
    ];

    return (
        <div>
            <h1>Go</h1>
            <CryptoItem name={token.name[0]}></CryptoItem>
            <CryptoItem name={token.course[0]}></CryptoItem>
            <CryptoItem name={token.wallet[0]}></CryptoItem>
        </div>
    );
}

export default App;
