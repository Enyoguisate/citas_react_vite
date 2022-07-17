import { useState, useEffect } from "react";
import Error from './Error';

const Formulario = ({setPacientes, pacientes, paciente, setPaciente}) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if(Object.keys(paciente).length > 0) {
        setNombre(paciente.nombre);
        setPropietario(paciente.propietario);
        setEmail(paciente.email);
        setFecha(paciente.fecha);
        setSintomas(paciente.sintomas);
      }
  }, [paciente])

  const handleOnSubmit = (e) => {
    setError(false);
    e.preventDefault();
    // Validacion del formulario
    if ([nombre, propietario, email, fecha, sintomas].includes('')) {
      setError(true);
      return;
    }
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
      id: generarId()
    };

    setError(false);
    if (paciente.id) {
      const tempPacientes = pacientes.filter((tPaciente) => tPaciente.id !== paciente.id);
      objetoPaciente.id = paciente.id;
      setPacientes([...tempPacientes, objetoPaciente]);
      setPaciente({})
    } else {
      setPacientes([...pacientes, objetoPaciente]);
    }
    resetForm();
  }

  const resetForm = () => {
    setNombre('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintomas('');
  }

  const generarId = () => Math.random().toString(36).substring(2)+Date.now().toString();

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade pacientes y{" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form onSubmit={ handleOnSubmit } className="bg-white shadow-md rounded-lg py-10 px-5">
        { 
          error && <Error>Todos los campos son obligatorios</Error>
        }
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre mascota
          </label>
          <input
            id="name"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholderbg-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="nameowner"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre del Propietario
          </label>
          <input
            id="nameowner"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholderbg-gray-400 rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Correo electrónico"
            className="border-2 w-full p-2 mt-2 placeholderbg-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="date"
            className="block text-gray-700 uppercase font-bold"
          >
            Fecha alta
          </label>
          <input
            id="date"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholderbg-gray-400 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintoms"
            className="block text-gray-700 uppercase font-bold"
          >
            Sintomas
          </label>
          <textarea
            id="sintoms"
            className="border-2 w-full p-2 mt-2 placeholderbg-gray-400 rounded-md"
            placeholder="Describa los sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <input
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
            value={paciente.id ? 'Editar paciente' : 'Agregar paciente'}
          />
        </div>
      </form>
    </div>
  );
};

export default Formulario;
