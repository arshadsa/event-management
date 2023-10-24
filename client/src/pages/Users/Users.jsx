import React from 'react';
import axiosRequest from "../../utils/axios.service";
import { useEffect } from "react";
import { toast } from 'react-hot-toast';
import Table from "./Table";
import { useQuery } from 'react-query';

const Users = () => {
	const fetchUsers = async () => {
		return axiosRequest.get('/user');
	};
	const { isLoading, error, isError, data } = useQuery('users', fetchUsers);
	useEffect(() => {
    if (isError) {
      toast.error(error, { id: "user" });
    }
  }, [isError])
	
	return (
		<div>
			<Table data={data?.users}/>
		</div>
	);
};

export default Users;