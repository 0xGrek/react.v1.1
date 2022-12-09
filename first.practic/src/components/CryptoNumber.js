import "./CryptoNumber.css";

function CryptoNumber(props) {
    const title = props.date.toLocaleString("en-US", { month: "long" });
    const course = props.date.toLocaleString(`en-US`, { day: `2-digit` });
    const wallet = props.date.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__month">{title}</div>
            <div className="expanse-date__yaer">{course}</div>
            <div className="expanse-date__day">{wallet}</div>
        </div>
    );
}

export default CryptoNumber;
