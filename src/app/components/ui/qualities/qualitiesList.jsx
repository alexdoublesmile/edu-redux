import React from "react";
import PropTypes from "prop-types";
import Quality from "./quality";
import { useSelector } from "react-redux";
import {
    getQualitiesByIds,
    getQualitiesLoadingStatus
} from "../../../store/qualities";

const QualitiesList = ({ qualities }) => {
    // const dispatch = useDispatch();
    const isLoading = useSelector(getQualitiesLoadingStatus());
    const qualitiesList = useSelector(getQualitiesByIds(qualities));
    // useEffect(() => {
    //     dispatch(loadQualitiesList());
    // }, []);

    if (isLoading) return "Loading...";

    return (
        <>
            {qualitiesList.map((qual) => (
                <Quality key={qual._id} {...qual} />
            ))}
        </>
    );
};

QualitiesList.propTypes = {
    qualities: PropTypes.array
};

export default QualitiesList;
