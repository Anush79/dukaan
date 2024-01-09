export default function Pagination({pageNumber}) {
  return (
    <div className="flex items-center m-auto">
      <button className=" flex gap-3 border-2 border-slate-300 p-[6px] rounded text-[#4D4D4D] "><span>{"<"}</span> Previous</button>
      <div className="pages flex gap-[2px]">

     
      <span>1</span>

      <span>...</span>
      <span className="active-page">10</span>
      <span>11</span>
      <span>12</span>
      <span>13</span>
      <span>14</span>
      <span>15</span>
      <span>16</span>
      <span>17</span>
      <span>18</span>
      </div>
      <button className=" flex gap-3 border-2 border-slate-300 p-[6px] rounded text-[#4D4D4D] ">Next {">"}</button>
    </div>
  );
}
