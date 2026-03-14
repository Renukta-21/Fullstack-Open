const Statistics = ({ total, reviews }) => {
    if (total == 0) return <p>No reviews yet</p>

    return (
        <div>
            <p>Good {reviews.good}</p>
            <p>Neutral {reviews.neutral}</p>
            <p>Bad {reviews.bad}</p>
            <p>All {reviews.bad + reviews.neutral + reviews.good}</p>
            <Average total={total} reviews={reviews} />
            <Positive total={total} good={reviews.good}/>
        </div>
    )
}
export default Statistics

const Average = ({ total, reviews }) => {
    return <p>{(reviews.good * 1 + reviews.neutral * 0 + reviews.bad * -1) / total}</p>
}
const Positive = ({ good, total }) => {
    return <p>Positive {(good / total) * 100} %</p>
}