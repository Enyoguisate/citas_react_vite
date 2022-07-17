function Headers(props) {
  const { titulo1, titulo2 } = props;
  return (
    <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">
      {titulo1}{' '}<span className="text-indigo-600">{titulo2}</span>
    </h1>
  );
}

export default Headers;
