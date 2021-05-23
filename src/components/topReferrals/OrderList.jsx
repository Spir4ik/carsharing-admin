import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import classes from './Referrals.module.scss';
import getOrdersSelector from "../../redux/selectors/getOrdersSelector";
import countOrderSelector from "../../redux/selectors/countOrderSelector";
import currentPageOrderSelector from "../../redux/selectors/currentPageOrderSelector";
import getCitiesSelector from "../../redux/selectors/getCitiesSelector";
import filterModelSelector from "../../redux/selectors/filtersReferralsSelector";
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
  addCurrentCity,
  filterStatus,
  addCurrentStatus,
  clearFiltersState
} from "../../redux/actions/filtersReferralsAction";

export default function() {
  const dispatch = useDispatch();
  const currentOrder = useSelector(getOrdersSelector());
  const count = useSelector(countOrderSelector());
  const currentPage = useSelector(currentPageOrderSelector());
  const currentModel = useSelector(filterModelSelector());
  const cities = useSelector(getCitiesSelector()).cities;
  const orderStatusArray = useSelector(getOrderStatusSelector()).orderStatus;
  useEffect(() => dispatch(getOrderStatusRequest()), []);
  useEffect(() => dispatch(getCitiesRequest()), []);
  useEffect(() => dispatch(getOrdersRequest(currentPage, currentModel.currentCity, currentModel.currentStatus)), [currentPage, currentModel.currentCity, currentModel.currentStatus]);
  useEffect(() => {
    if (currentOrder.order.length !== 0) dispatch(countOrderAction(currentOrder.count));
    else dispatch(countOrderAction(0));
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
      if (currentOrder.order.length === 0) {
        return(
          <Spinner />
        )
      }
      return <Order orders={currentOrder.order} />
  }
  console.log(count);
  return (
    <div className={classes.container}>
      <div className={classes.filter__block}>
        <div className={classes.filter__selected}>
          <Select optionName="Статус" currentArray={orderStatusArray} currentFunc={filterStatus} value={currentModel.status.hasOwnProperty("name") ? currentModel.status.name : ""} />
          <Select optionName="Город" currentArray={cities} currentFunc={filterCities} value={currentModel.cities.hasOwnProperty("name") ? currentModel.cities.name : ""} />
        </div>
        <div className={classes.filter__buttons}>
          <button onClick={() => dispatch(clearFiltersState())}>Сбросить</button>
          <button onClick={() => {
            const currentUrlCity = currentModel.cities.hasOwnProperty("name") ? currentModel.cities.id : "";
            const currentUrlStatus = currentModel.status.hasOwnProperty("name") ? currentModel.status.id : "";
            dispatch(currentPageOrderAction(1));
            dispatch(addCurrentCity(currentUrlCity));
            dispatch(addCurrentStatus(currentUrlStatus));
          }}>Принять</button>
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
