import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import classes from './Referrals.module.scss';
import getOrdersSelector from "../../redux/selectors/getOrdersSelector";
import countOrderSelector from "../../redux/selectors/countOrderSelector";
import currentPageOrderSelector from "../../redux/selectors/currentPageOrderSelector";
import getCitiesSelector from "../../redux/selectors/getCitiesSelector";
import filtersReferralsSelector from "../../redux/selectors/filtersReferralsSelector";
import getOrderStatusSelector from "../../redux/selectors/getOrderStatusSelector";
import Order from "../OrderComponent/Order.jsx";
import Select from "../selectComp/Select.jsx";
import Spinner from "../Spinner/Spinner.jsx";
import Pagination from "../pagination/Pagination.jsx";
import getOrdersRequest from "../../redux/thunk/getOrdersRequest";
import getCitiesRequest from "../../redux/thunk/getCitiesRequest";
import getOrderStatusRequest from "../../redux/thunk/getOrderStatusRequest";
import currentPageOrderAction from "../../redux/actions/currentPageOrderAction";
import countOrderAction from "../../redux/actions/countOrderAction";
import {
  filterCities,
  filterStatus,
  clearFiltersState,
  filterDate,
} from "../../redux/actions/filtersReferralsAction";
import dateObj from '../../constDate'


export default function() {
  const dispatch = useDispatch();
  const currentOrder = useSelector(getOrdersSelector());
  const count = useSelector(countOrderSelector());
  const currentPage = useSelector(currentPageOrderSelector());
  const currentModel = useSelector(filtersReferralsSelector());
  const cities = useSelector(getCitiesSelector()).cities;
  const orderStatusArray = useSelector(getOrderStatusSelector()).orderStatus;
  const [urlCity, setUrlCity] = useState(currentModel.cities?.name ? currentModel.cities.id : "");
  const [urlStatus, setUrlStatus] = useState(currentModel.status?.name ? currentModel.status.id : "")
  const [urlDateValue, setDateValue] = useState(currentModel.date.value ? currentModel.date.value : 0)
  useEffect(() => dispatch(getOrderStatusRequest()), []);
  useEffect(() => dispatch(getCitiesRequest()), []);
  useEffect(() =>
    dispatch(getOrdersRequest(currentPage, urlCity, urlStatus, urlDateValue)),
    [currentPage, urlCity, urlStatus, urlDateValue]
  );
  useEffect(() => {
    if (currentOrder.order.length !== count) dispatch(countOrderAction(currentOrder.count));
  }, [currentOrder.count]);

  const paginationOrder = pageNumber => dispatch(currentPageOrderAction(pageNumber));

  const renderOrders = () => {
      if (currentOrder.count === 0 && currentOrder.loading === false) {
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
      if (currentOrder.loading !== false) {
        return(
          <Spinner />
        )
      }
      return <Order orders={currentOrder.order} />
  };

  const handleClickClear = () => {
    setUrlCity("");
    setUrlStatus("");
    setDateValue(0);
    dispatch(currentPageOrderAction(0));
    return dispatch(clearFiltersState());
  }

  const handleClickToAccept = () => {
    const currentUrlCity = currentModel.cities?.name ? currentModel.cities.id : "";
    const currentUrlStatus = currentModel.status?.name ? currentModel.status.id : "";
    dispatch(currentPageOrderAction(0));
    setUrlCity(currentUrlCity);
    setUrlStatus(currentUrlStatus);
    setDateValue(currentModel.date.value);
  }

  return (
    <div className={classes.container}>
      <div className={classes.filter__block}>
        <div className={classes.filter__selected}>
          <Select optionName="Период" currentArray={dateObj.arrayDate()} currentFunc={filterDate} value={currentModel.date?.name ? currentModel.date.name : "" }/>
          <Select optionName="Статус" currentArray={orderStatusArray} currentFunc={filterStatus} value={currentModel.status.hasOwnProperty("name") ? currentModel.status.name : ""} />
          <Select optionName="Город" currentArray={cities} currentFunc={filterCities} value={currentModel.cities.hasOwnProperty("name") ? currentModel.cities.name : ""} />
        </div>
        <div className={classes.filter__buttons}>
          <button onClick={() => handleClickClear()}>Сбросить</button>
          <button onClick={() => handleClickToAccept()}>Принять</button>
        </div>
      </div>
      <div className={classes.carList__block}>
        {renderOrders()}
      </div>
      <div className={classes.pagination__block}>
        {count !== 0 && <Pagination
          postsPerPage={4}
          totalPosts={count}
          paginate={paginationOrder}
          currentPage={currentPage}
        />}
      </div>
    </div>
  )
}
