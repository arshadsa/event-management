import React, { useMemo } from 'react';
import axiosRequest from "../../utils/axios.service";
import { useEffect } from "react";
import { toast } from 'react-hot-toast';
import Table from "./Table";
import { useQuery } from 'react-query';

const Events = () => {
  const fetchEvents = async () => {
    return axiosRequest.get('/events');
  };
  const { isLoading, error, isError, data } = useQuery('events', fetchEvents);

  const tableHeader = ["Event Name", "Date", "Location", "Description"];

	const processedData = useMemo(() => {
		if (!isLoading && data) {
			return data?.map((event) => ({
				name: event?.name,
				date: event?.labels?.date,
				location: event?.labels?.location,
				description: event?.labels?.description,
			}));
		} else {
			return [];
		}
	}, [data, isLoading]);

  return (
    !isLoading && <div>
      <Table data={processedData} header={tableHeader}/>
    </div>
  );
};

export default Events;