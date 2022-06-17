import GetData from "./GetData.js"

function Chart() {
    return (
        <main>
            <section className="data-display">
                <h3>Spending - Last 7 days</h3>
                <div className="chart">
                    <GetData />
                </div>
            </section>
            <hr />
            <section className="data-footer">
                <div className="total">
                    <p>Total this month</p>
                    <h1>$478.33</h1>
                </div>
                <div className="interest">
                    <p><strong>+2.4%</strong></p>
                    <p>from last month</p>
                </div>
            </section>
        </main>
    )
}

export default Chart