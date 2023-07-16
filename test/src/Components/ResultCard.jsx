const ResultCard = ({ result }) => {
    return (
        <div>
           {result ? (
        <h2 className="text-3xl font-semibold text-red-800">"{result}"</h2>
      ) : (
        <h2 className="text-2xl text-center text-red-800">
          If you write something, I will give you an answer.
        </h2>
      )}
        </div>
    )
}
export default ResultCard
