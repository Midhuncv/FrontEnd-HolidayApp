import { useState } from "react";
import HomePage from "./assets/components/HomePage";
import HolidayListPage from "./assets/components/HolidayListPage";
import HolidayDetailModal from "./assets/components/HolidayDetailModal";

function App() {
  const [country, setCountry] = useState("");
  const [year, setYear] = useState("");
  const [showHolidays, setShowHolidays] = useState(false);
  const [holidayDetail, setHolidayDetail] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {!showHolidays ? (
        <HomePage
          setCountry={setCountry}
          setYear={setYear}
          setShowHolidays={setShowHolidays}
        />
      ) : (
        <>
          <HolidayListPage
            country={country}
            year={year}
            setHolidayDetail={setHolidayDetail}
          />
          {holidayDetail && (
            <HolidayDetailModal
              holiday={holidayDetail}
              closeModal={() => setHolidayDetail(null)}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
