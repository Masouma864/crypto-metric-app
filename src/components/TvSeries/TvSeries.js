import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchDetail } from '../../redux/TvSeries/tvSeriesSlice';
import './TvSeries.css';

const TvSeries = () => {
  const data = useParams();
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchDetail(data.id));
  });
  const htmlRemoveRegex = /(<([^>]+)>)/gi;
  return (
    <div>
      <div className="link">
        <a href="../"><p>Back to search result</p></a>
      </div>
      <div className="tv-series-container">
        <div className="info">
          <img src={detail?.image?.medium} alt={detail.url} />
        </div>
        <div className="more-info">
          <div className="detail-col">
            <p className="name">
              {detail.name}
            </p>
            <p className="genres">
              Genres:
              {detail.genres}
            </p>
            <p className="desc">
              {detail.summary?.replace(htmlRemoveRegex, '')}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TvSeries;
