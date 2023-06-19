import '../styles/summary.css'
import reactionLogo from '../assets/images/icon-reaction.svg'
import memoryLogo from '../assets/images/icon-memory.svg'
import verbalLogo from '../assets/images/icon-verbal.svg'
import visualLogo from '../assets/images/icon-visual.svg'
import Button from './Button'

export default function Summary() {
    return (
       <section className="summary">
            <h2 className="summary-title">Summary</h2>
            <div className='summary-categories'>
                <div className="summary-category reaction">
                    <div className="summary-category-title">
                        <img src={reactionLogo}
                        className="summary-category-image"
                        alt="" 
                        width="20px"
                        />
                        <p>Reaction</p>
                    </div>
                    <div className="summary-score">
                        <p>80 <span className="summary-score-max">/ 100</span></p>
                    </div>
                </div>
                <div className="summary-category memory">
                    <div className="summary-category-title">
                        <img src={memoryLogo}
                        className="summary-category-image"
                        alt="" 
                        width="20px"
                        />
                        <p>Memory</p>
                    </div>
                    <div className="summary-score">
                        <p>92 <span className="summary-score-max">/ 100</span></p>
                    </div>
                </div>
                <div className="summary-category verbal">
                    <div className="summary-category-title">
                        <img src={verbalLogo}
                        className="summary-category-image"
                        alt="" 
                        width="20px"
                        />
                        <p>Verbal</p>
                    </div>
                    <div className="summary-score">
                        <p>61 <span className="summary-score-max">/ 100</span></p>
                    </div>
                </div>
                <div className="summary-category visual">
                    <div className="summary-category-title">
                        <img src={visualLogo}
                        className="summary-category-image"
                        alt="" 
                        width="20px"
                        />
                        <p>Visual</p>
                    </div>
                    <div className="summary-score">
                        <p>73 <span className="summary-score-max">/ 100</span></p>
                    </div>
                </div>
            </div>
            <Button>Continue</Button>
       </section>
    )
}