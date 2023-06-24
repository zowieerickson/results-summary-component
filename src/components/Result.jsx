import '../styles/result.css'
import data from '../data.json'

export default function Result() {
    let scores = []
    data.map(resultScore => scores.push(resultScore.score))

    const averageScore = Math.floor(
        scores.reduce( 
            (a,b) => a + b, 0
        ) / scores.length
    )

    return (
        <section className="results">
            <h2 className="result-title light-blue">Your Result</h2>
            <div className="result-score">
                <p className="result-score-exact">{averageScore}</p>
                <p className="result-score-max light-blue">of 100</p>
            </div>
            <p className="result-assessment">Great</p>
            <p className="result-description light-blue">You scored higher than 65% of the people who have taken these&nbsp;tests.</p>
        </section>
    )
}