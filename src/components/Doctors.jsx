import { AddModal } from "./AddModal";
import React, { useState } from "react";
import { AppointmentList } from "./AppointmentList";

const Doctors = ({ doctorData }) => {
  const [showModal, setShowModal] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState();

  const handleClick = (doctor) => {
    setSelectedDoctor(doctor.name);
    setShowModal(!showModal);
  };

  const addAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

const  handleDelete = (index) =>{
    setAppointments(
        appointments.filter((_, i) => i !== index )
    )
    };

  //console.log(doctorData)
  return (
    <div className="main-container position-relative">
      <div className="container d-flex justify-content-center align-items-center flex-wrap gap-3 ">
        {doctorData.map((doctor) => (
          <div className="doctor-card text-center" key={doctor.id}>
            <div className="img-container rounded-5">
              <img
                className="rounded-5"
                src={doctor.img}
                alt={doctor.name}
                width="200px"
                onClick={() => handleClick(doctor)}
              />
            </div>
            <h5 className="p-2">{doctor.name}</h5>
            <p>{doctor.dep}</p>
          </div>
        ))}
      </div>
      <div className="position-absolute top-50 start-50 translate-middle z-index-1">
        {" "}
        {showModal && (
          <AddModal
            doctorData={doctorData}
            showModal={showModal}
            setShowModal={setShowModal}
            addAppointment={addAppointment}
            selectedDoctor={selectedDoctor}
          />
        )}
      </div>
      <div>
        <AppointmentList appointments={appointments} handleDelete={handleDelete} />
      </div>
    </div>
  );
};

export default Doctors;
