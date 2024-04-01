export const AppointmentList = ({ appointments, handleDelete }) => {
  return (
    <div>
      <h1 className="text-center mt-5">Appointment List</h1>
      {appointments.map((appointment, index) => (
        <div key={index} className="card mb-3" style={{maxWidth:"540px", margin:"auto", padding: '20px'}} >
          <p>Patient Name: {appointment.patientName}</p>
          <p>Date: {appointment.date}</p>
          <p>Doctor Name: {appointment.selectedDoctor}</p>
          <button onClick={()=> handleDelete(index) } className="position-absolute end-0" style={{float: 'right', cursor: 'pointer'}} >X</button>
        </div>
      ))}
    </div>
  );
};
