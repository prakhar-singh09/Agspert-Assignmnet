import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


const Api = () => {
 const { data, } = useQuery({
  queryKey: ["cat"],
  queryFn: () => {
   return axios.get('./Data/saleOrderSchema.json').then((res) => res.data);
   },
 });

 return (
    <p>{data ? data.customer_id: 'No data available'}</p>
 )
}

export default Api;