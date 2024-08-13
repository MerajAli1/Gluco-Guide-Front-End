import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
export default function MyApp() {
  const [value, onChange] = useState(new Date());
  
  useEffect(() => {
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = value.toLocaleDateString('en-US', options);
    console.log(formattedDate);
  }, [value]);
  return (
    <>
    <div className="d-flex justify-content-center align-items-center">
      <Calendar className="fs-5 w-50" onChange={onChange} value={value} />
    </div>
    </>
  );
}
