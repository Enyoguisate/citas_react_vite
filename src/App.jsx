import Formulario from "./components/Formulario";
import Header from "./components/Headers";
import ListadoPacientes from "./components/ListadoPacientes";
import { useState, useEffect } from "react";

function App() {
  const [pacientes, setPacientes] = useState([]),
    [paciente, setPaciente] = useState({}),
    titulo1 = "Seguimiento Pacientes",
    titulo2 = "Veterinaria",
    eliminarPaciente = (pacienteId) => {
      console.log('eliminando paciente :>> ', pacienteId);
      setPacientes(pacientes.filter(pacienteF => pacienteF.id !== pacienteId));
    };

    useEffect(() => {
      const hasPatients = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      if(Object.keys(hasPatients)?.length) {
        setPacientes(hasPatients)
      }
    }, []);

    useEffect(() => {
      if(Object.keys(pacientes)?.length > 0 ) {
        localStorage.setItem('pacientes', JSON.stringify(pacientes));
      }
    },[pacientes])

  return (
    <div className="container mx-auto mt-20">
      <Header titulo1={titulo1} titulo2={titulo2} />
      <div className="mt-12 md:flex">
        <Formulario
          setPacientes={setPacientes}
          pacientes={pacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes pacientes={pacientes} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente}/>
      </div>
    </div>
  );
}

export default App;
