
export const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
        <div>
            <p>{Year}</p>
        </div>

        <div>
            <img src={movie !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} 
                 alt={movie.Title} />  
        </div>  

        <div>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
        </div>
    </div>
  )
}
