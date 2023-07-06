import React from "react";

const DropDownComp = (data) => {
  //const [tempDate, setTempDate] = useState("30/05/2015");
  //const dispatch = useDispatch();
  //const allDatesList = useSelector(getAllDatesList);

  const changeDate = (e) => {
    console.log(e.target.value);
  };
  /*
  useEffect(() => {
    dispatch(fetchAllDatesList());
  }, []);

  useEffect(() => {
    dispatch(fetchDailyAnimaData(tempDate));
  }, [tempDate]); */

  return (
    <>
      <div id="dateSelector" className="border-l-gray-100">
        <select
          onChange={changeDate}
          id="dates"
          className="bg-gray-50 
          border border-gray-300 
          text-gray-900 text-xs 
          rounded-lg 
          focus:ring-blue-500 focus:border-blue-500 
          block px-3 py-1
          dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
          dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {/*  {allDatesList &&
            allDatesList.map((tempDate, i) => {
              return (
                <option key={i} value={tempDate}>
                  {tempDate}
                </option>
              );
            })} */}
        </select>
      </div>
    </>
  );
};

export default DropDownComp;
