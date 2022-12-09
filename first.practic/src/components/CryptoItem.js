import "./CryptoItem.css";
import CryptoNumber from "./CryptoNumber";

function CryptoItem(props) {
    return (
        <div className="main">
            <div className="center">
                <h1>Crypto</h1>
            </div>
            <div>
                <CryptoNumber title={props.name} />
                <div>
                    <div>{props.course} </div>
                    <div>{props.wallet}</div>
                </div>
            </div>
        </div>
    );
}

export default CryptoItem;
