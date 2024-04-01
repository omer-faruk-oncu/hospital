import Doctors from "../components/Doctors";

const Home = ({doctorData}) => {
        console.log(doctorData);
  return (
    <div>
      <h1 className="text-center mt-3 p-3 text-danger">My HOSPITAL</h1>
      <h2 className="text-center">Our Doctors</h2>
      <Doctors doctorData={doctorData}/>
    </div>
  );
};

export default Home;
