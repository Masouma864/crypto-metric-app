import './TvSeriesList.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchSeries } from '../../redux/TvSeries/tvSeriesListSlice';

const TvSeriesList = () => {
  const dispatch = useDispatch();
  const seriesList = useSelector((state) => state.list);
  useEffect(() => {
    if (!seriesList.length) {
      dispatch(fetchSeries());
    }
  });

  const [searchseries, setSearchseries] = useState('');
  const onSearch = (e) => {
    e.preventDefault();
    setSearchseries(e.target.value);
  };

  const searched = seriesList.filter(
    (filteredSeries) => filteredSeries.name.toLowerCase().includes(searchseries.toLowerCase()),
  );

  return (

    <div className="container">
      <div className="search">
        <input
          type="text"
          placeholder="Search for Tv shows"
          value={searchseries}
          onChange={onSearch}
        />
      </div>
      <div className="series">
        {searched.map((series) => (
          <div
            className="series-section"
            key={`${series.series_id}${Math.random * 10}`}
          >
            <Link
              className="series-section"
              Key={series.series_id}
              to={`/tvseries/${series.id}`}
            >
              <div className="name">
                <p>{series.name}</p>
              </div>
              <div>
                <div>
                  <img className="image" src={series.image.medium} alt={series.url} />
                </div>
              </div>
            </Link>
          </div>
        ))}
        ;
      </div>
    </div>
  );
};

export default TvSeriesList;
