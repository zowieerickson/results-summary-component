import '../styles/result.css'

export default function Result() {
    return (
        <section className="results">
            <h2 className="result-title light-blue">Your Result</h2>
            <div className="result-score">
                <p className="result-score-exact">76</p>
                <p className="result-score-max light-blue">of 100</p>
            </div>
            <p className="result-assessment">Great</p>
            <p className="result-description light-blue">You scored higher than 65% of the people who have taken these&nbsp;tests.</p>
        </section>
    )
}