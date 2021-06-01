import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import classes from './Referrals.module.scss';
import Select from "../selectComp/Select.jsx";
import CarsList from "../carList/CarsList.jsx";
import Spinner from "../Spinner/Spinner.jsx";
import Pagination from "../pagination/Pagination.jsx";
import getCars from "../../redux/thunk/getCars";
import {
  filterModel,
  clearFiltersCars,
  filterArray,
  filterCategory
} from "../../redux/actions/filtersReferralsAction";
import getCarsSelector from "../../redux/selectors/getCarsSelector";
import filterModelSelector from "../../redux/selectors/filtersReferralsSelector";
import categorySelector from "../../redux/selectors/categorySelector";
import getCategory from "../../redux/thunk/getCategory";

export default function() {
  const dispatch = useDispatch();
  const cars = useSelector(getCarsSelector()).car;
  const category = useSelector(categorySelector()).category;
  const currentModel = useSelector(filterModelSelector());
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(7);
  const [arrayCarNames, setArrayCarNames] = useState([]);

  useEffect(() => {
    dispatch(getCars());
    category.length === 0 ? dispatch(getCategory()) : null
  }, []);

  useEffect(() => {
    const arrayModel = cars.reduce((tally, total) => {
      const splitFunc = (array, paramSplit) => array.split(paramSplit).slice(0, 1).join('');
      const removeSpaces = splitFunc(total.name, " ");
      const removeCommas = splitFunc(removeSpaces, ",");
      tally.push(removeCommas);
      return tally;
    }, []);
    const allModels = arrayModel.filter((item, index) => {
      return arrayModel.indexOf(item) === index;
    });
    setArrayCarNames(allModels);
  }, [cars]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = cars.slice(indexOfFirstPost, indexOfLastPost);
  const filteredArray = currentModel.array.slice(indexOfFirstPost, indexOfLastPost);

  const updateFilters = () => {
    const updateArray = cars.filter(item => {
      let result = true;
      if (currentModel.category !== null) result = result && item.categoryId.name.includes(currentModel.category);
      if (currentModel.model !== "") result = result && item.name.includes(currentModel.model);

      return result;
    });
    setCurrentPage(1);
    return dispatch(filterArray(updateArray));
  };

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className={classes.container}>
      <div className={classes.filter__block}>
        <div className={classes.filter__selected}>
          {cars.length !== 0 &&
            <>
              <Select optionName="Модель" currentArray={arrayCarNames} currentFunc={filterModel} value={currentModel.model} />
              <Select optionName="Категория" currentArray={category} currentFunc={filterCategory} value={currentModel.category} />
            </>
          }
        </div>
        <div className={classes.filter__buttons}>
          <button onClick={() => dispatch(clearFiltersCars())}>Сбросить</button>
          <button onClick={() => updateFilters()}>Принять</button>
        </div>
      </div>
      <div className={classes.carList__block}>
        {cars.length === 0 ? <Spinner /> : <CarsList cars={currentModel.array.length !== 0 ? filteredArray : currentPosts} />}
      </div>
      <div className={classes.pagination__block}>
        {cars.length !== 0 &&
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={currentModel.array.length !== 0 ? currentModel.array.length : cars.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        }
      </div>
    </div>
  )
}
