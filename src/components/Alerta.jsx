function Alerta({ msg }) {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[50%] from-red-400 to-red-600 bg-gradient-to-br text-center p-3 rounded-xl uppercase text-white font-bold text-sm mt-10">
        {msg}
      </div>
    </div>
  );
}

export default Alerta;
