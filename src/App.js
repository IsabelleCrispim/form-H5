import { BsFillCalendar2PlusFill} from "react-icons/bs"; 
import Search from "./components/Search";
import AddAppointment from "./components/AddAppointment";
import appointmentList from "./data.json";
import {HiOutlineTrash} from "react-icons/hi"
function App() {
  return (
    <div className="App  container mx-auto mt-3 font-thin">
      <h1 className=" mb-2 text-5xl align-top"><BsFillCalendar2PlusFill className="inline-block text-green-400  mr-4	"/>Your Appointments</h1>
      <AddAppointment/>
      <Search/>
      <ul div = "divide-y  divide-y-400">
        {appointmentList.map(appointment =>(
            <li className="px-3 py-3 flex items-start "> 
            <button className ="p-1.5 mr-1.5 mt-1 rounded text-white bg-red-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-blue-500">
              <HiOutlineTrash />
            </button>
            <div className="flex-grow">
              <div className="flex items-center">
              <span className="flex-none font-medium text-2xl text-blue-500">{appointment.petName}</span>
              <span className="flex-grow text-right">{appointment.aptDate}</span>
            </div>
            
            <div>
              <b className="font-bold text-blue-500">Owner:</b> {appointment.ownerName}</div>
              <div className="leading-tight">{appointment.aptNotes}</div>
      </div>
            </li> 
        ))}
        
      </ul>
    </div>
  );
  
}

export default App;

