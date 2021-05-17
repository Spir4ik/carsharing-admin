import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import classes from './Referrals.module.scss';
import Select from "../selectComp/Select.jsx";
import CarsList from "../carList/CarsList.jsx";
import Spinner from "../Spinner/Spinner.jsx";
import Pagination from "../pagination/Pagination.jsx";
import getCars from "../../redux/thunk/getCars";
import getCarsSelector from "../../redux/selectors/getCarsSelector";

export default function() {
  const dispatch = useDispatch();
  const cars = useSelector(getCarsSelector()).car;
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(7);

  useEffect(() => {
    dispatch(getCars());
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = cars.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className={classes.container}>
      <div className={classes.filter__block}>
        <div className={classes.filter__selected}>
          <Select />
          <Select />
          <Select />
        </div>
        <div className={classes.filter__buttons}>
          <button>Сбросить</button>
          <button>Принять</button>
        </div>
      </div>
      <div className={classes.carList__block}>
        {cars.length === 0 ? <Spinner /> : <CarsList cars={currentPosts} />}
      </div>
      <div className={classes.pagination__block}>
        {cars.length !== 0 &&
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={cars.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        }
      </div>
    </div>
  )
}
