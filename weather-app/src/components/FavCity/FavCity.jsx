

function FavCity({change}) {
  
  return (
    <div>
      <h2 className="fav-h2">Favorite Cities</h2>
      <div className="cities-container">
        <label htmlFor="cities">Choose a city: </label>
        <select name="cities" id="cities" onChange={change}>
          <option value="Budapest">Budapest</option>
          <option value="Batman">Batman</option>
          <option value="Bugyi">Bugyi</option>
          <option value="Sonkád">Sonkád</option>
          <option value="Makkoshotyka">Makkoshotyka</option>
        </select>
      </div>
    </div>
  )
}

export default FavCity;
