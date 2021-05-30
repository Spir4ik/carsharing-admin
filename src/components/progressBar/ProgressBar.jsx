import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import progressSelector from "../../redux/selectors/progressSelector";
import carStoreSelector from "../../redux/selectors/carStoreSelector";
import {
  progressModel,
  progressSum,
  progressNumber,
  progressTank,
  progressType,
  progressColor,
  progressThumbnail,
  progressPrice
} from "../../redux/actions/progressAction"

export default function() {
  const progressValue = useSelector(progressSelector());
  const carStore = useSelector(carStoreSelector());
  const dispatch = useDispatch();
  useEffect(() => {
    carStore.name !== "" ? dispatch(progressModel(14)) : dispatch(progressModel(0));
    carStore.number !== "" ? dispatch(progressNumber(14)) : dispatch(progressNumber(0));
    carStore.tank !== 0 && carStore.tank !== "" ? dispatch(progressTank(14)) : dispatch(progressTank(0));
    carStore.categoryId !== null ? dispatch(progressType(14)) : dispatch(progressType(0));
    carStore.colors.length !== 0 ? dispatch(progressColor(14)) : dispatch(progressColor(0));
    carStore.priceMin !== 0 ? dispatch(progressPrice(14)) : dispatch(progressPrice(0));
    carStore.thumbnail.hasOwnProperty("path") ? dispatch(progressThumbnail(16)) : dispatch(progressThumbnail(0));
    dispatch(progressSum())
  }, [carStore])
  return(
    <>
      <progress value={progressValue.sum} max="100"> </progress>
    </>
  )
}
