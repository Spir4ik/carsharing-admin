import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import classes from './Referrals.module.scss';
import Select from "../selectComp/Select.jsx";
import CarsList from "../carList/CarsList.jsx";
import Spinner from "../Spinner/Spinner.jsx";
import Pagination from "../pagination/Pagination.jsx";
import getCars from "../../redux/thunk/getCars";
import getFilterCars from "../../redux/thunk/getFilterCars";
import {
  filterModel,
  clearFiltersCars,
  filterCategory
} from "../../redux/actions/filtersReferralsAction";
import getCarsSelector from "../../redux/selectors/getCarsSelector";
import filterModelSelector from "../../redux/selectors/filtersReferralsSelector";
import categorySelector from "../../redux/selectors/categorySelector";
import getCategory from "../../redux/thunk/getCategory";

export default function() {
  const dispatch = useDispatch();
  const cars = useSelector(getCarsSelector()).car;
  const paginationCars = useSelector(state => state.filterCarsReducer)
  const category = useSelector(categorySelector()).category;
  const currentModel = useSelector(filterModelSelector());
  const [currentPage, setCurrentPage] = useState(0);
  const [urlCategory, setUrlCategory] = useState(currentModel.category?.id ? currentModel.category.id : "");
  const [urlId, setUrlId] = useState(currentModel.model?.id ? currentModel.model.id : "")

  useEffect(() => {
    dispatch(getCars());
    category.length === 0 ? dispatch(getCategory()) : null
  }, []);

  useEffect(() => {
    dispatch(getFilterCars(currentPage, urlId, urlCategory))
  }, [currentPage, urlCategory, urlId]);

  const updateFilters = () => {
    setUrlCategory(currentModel.category.id);
    setUrlId(currentModel.model.id);
    return setCurrentPage(0)
  };

  const clearFilter = () => {
    setUrlCategory("");
    setUrlId("");
    setCurrentPage(0);
    return dispatch(clearFiltersCars());
  }

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const renderCarList = () => {
    if (paginationCars.count === 0 && paginationCars.loading === false) {
      return(
        <div className={classes.notFound}>
          <div className={classes.header}>
            <h1>Ничего не найдено!</h1>
          </div>
          <div className={classes.body}>
            <p>Попробуйте изменить параметры поиска</p>
          </div>
        </div>
      )
    }
    if (paginationCars.loading !== false) {
      return(
        <Spinner />
      )
    }
    return <CarsList cars={paginationCars.cars} />
  }

  return (
    <div className={classes.container}>
      <div className={classes.filter__block}>
        <div className={classes.filter__selected}>
          <>
            <Select optionName="Модель" currentArray={cars} currentFunc={filterModel} value={currentModel.model?.name ? currentModel.model.name : ""} />
            <Select optionName="Категория" currentArray={category} currentFunc={filterCategory} value={currentModel.category?.name ? currentModel.category.name : ""} />
          </>
        </div>
        <div className={classes.filter__buttons}>
          <button onClick={() => clearFilter()}>Сбросить</button>
          <button onClick={() => updateFilters()}>Принять</button>
        </div>
      </div>
      <div className={classes.carList__block}>
        {renderCarList()}
      </div>
      <div className={classes.pagination__block}>
        {paginationCars.count !== 0 &&
          <Pagination
          postsPerPage={7}
          totalPosts={paginationCars.count}
          paginate={paginate}
          currentPage={currentPage}
          />
        }
      </div>
    </div>
  )
}
