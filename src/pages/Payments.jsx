import { SearchOutlined } from "@mui/icons-material";
import DataTable from "../components/DataTable";
import Header from "../components/Header";
import Pagination from "../components/Pagination";

export default function Payments() {
  return (<>
    <Header />
    <div className="flex flex-col pl-8 pr-8 pt-3 pb-3 gap-5">
      <div className="text-lg text-[#1A181E] font-semibold flex justify-between">
        
        Overview
        <select name="month" id="" className="text-sm font-normal border  shadow-md p-2">
          <option value="Last Month">Last Month</option>
          <option value="Last week">Last Week</option>
          <option value="Last year">Last year</option>
        </select>
      </div>
      <div className="flex gap-8 text-lg">
        <span className="active">Razorpay</span>
        <span>Cashfree</span>
      </div>
      <div className="grid grid-cols-2 text-left gap-5 ">
        <div className="flex flex-col shadow gap-4 p-5">
          <span className="text-md">Total orders</span>
          <span className="text-2xl font-semibold">231</span>
        </div>
        <div className="flex flex-col shadow gap-4 p-5">
          <span>Amount received</span>
          <span className="text-2xl font-semibold">₹23,92,312.19</span>
        </div>
      </div>
      <div>
        <h5 className="font-semibold text-left my-3 text-lg ">Transactions | This Month</h5>

      <DataTable/>
      </div>
   <Pagination pageNumber ={10}/>
    </div>
  </>
  );
}
