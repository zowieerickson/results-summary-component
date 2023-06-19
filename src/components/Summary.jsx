import '../styles/summary.css'
import Button from './Button'
import SummaryData from '../data.json'


export function SummaryCategory(props) {
    let categoryClass = props.item.category.toLowerCase()

    return (
        <div className={`summary-category ${categoryClass}`}>
            <div className="summary-category-title">
                <img src={props.item.icon}
                className="summary-category-image"
                alt="" 
                width="20px"
                />
                <p>{props.item.category}</p>
            </div>
            <div className="summary-score">
                <p>{props.item.score} <span className="summary-score-max">/ 100</span></p>
            </div>
        </div>
    )
}

export default function Summary() {
    const summaryElements = SummaryData.map(item => {
        return <SummaryCategory
          key={item.id}
          item={item}
        />
      })

    return (
       <section className="summary">
            <h2 className="summary-title">Summary</h2>
            <div className='summary-categories'>
                {summaryElements}
            </div>
            <Button>Continue</Button>
       </section>
    )
}