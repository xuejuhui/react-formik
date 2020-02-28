import React, { useCallback, useEffect, useReducer, useState } from "react";
import { Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import * as serviceActions from "../../store/actions/ServiceActions";
import MUIDataTable from "mui-datatables";

const columns = [
  {
    name: "name",
    label: "Name",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "serviceType",
    label: "Service Type",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "aircraft",
    label: "Aircraft",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "status",
    label: "Status",
    options: {
      filter: true,
      sort: false
    }
  }
];

const options = {
  filterType: "checkbox"
};

const Service = props => {
  const dispatch = useDispatch();
  const services = useSelector(state => state.service.services);
  //console.log(services);


  useEffect(() => {
    dispatch(serviceActions.load_services());
  }, [dispatch]);

  return (
    <MUIDataTable
      title={"Service List"}
      data={services}
      columns={columns}
      options={options}
    />
  );
};

export default Service;
