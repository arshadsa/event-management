import { useQuery } from "react-query";
import DashboardLayout from "../../dashboardLayout/DashboardLayout";
import axiosRequest from "../../utils/axios.service";
import { useEffect } from "react";
import { toast } from 'react-hot-toast';
import Table from "./Table";

const Dashboard = () => {
	const fetchUsers = async () => {
		return axiosRequest.get('/user');
	};

	const { isLoading, error, isError, data } = useQuery('users', fetchUsers);

	useEffect(() => {
    if (isError) {
      toast.error(error, { id: "user" });
    }
  }, [isError])

	console.log(data);

	return (
		<>
			<DashboardLayout>
								
			</DashboardLayout>
		</>
	);
}


export default Dashboard;