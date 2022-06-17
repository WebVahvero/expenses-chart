import Values from "./data.json"

export default function GetData() {
    return (
        Values.map(value => {
            return(
                <div key={value.day} className="chart-wrapper">
                    <div className="value">
                        { value.amount}
                    </div>
                    <div className={`chart-block ${value.day}`} style={{height: value.amount + 20}}></div>
                </div>
            )
        })
    )
}