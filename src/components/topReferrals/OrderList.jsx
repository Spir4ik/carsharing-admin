import React, {useEffect} from 'react';
import classes from './Referrals.module.scss';
import {useDispatch, useSelector} from "react-redux";
import getOrdersSelector from "../../redux/selectors/getOrdersSelector";
import Order from "../OrderComponent/Order.jsx";
import Pagination from "../pagination/Pagination.jsx";
import getOrdersRequest from "../../redux/thunk/getOrdersRequest";
import currentPageOrderAction from "../../redux/actions/currentPageOrderAction";

export default function() {
  const dispatch = useDispatch();
  const order = useSelector(getOrdersSelector()).order;
  const count = useSelector(getOrdersSelector()).count;
  const currentPage = useSelector(state => state.currentPageOrderReducer)
  useEffect(() => dispatch(getOrdersRequest(currentPage)), [currentPage]);

  const paginationOrder = pageNumber => dispatch(currentPageOrderAction(pageNumber));

  return (
    <div className={classes.container}>
      <div className={classes.filter__block}>
        <div className={classes.filter__selected}>

        </div>
        <div className={classes.filter__buttons}>
          <button>Сбросить</button>
          <button>Принять</button>
        </div>
      </div>
      <div className={classes.carList__block}>
        <Order orders={order}/>
      </div>
      <div className={classes.pagination__block}>
        <Pagination
          postsPerPage={3}
          totalPosts={count}
          paginate={paginationOrder}
          currentPage={currentPage}
        />
      </div>
    </div>
  )
}
