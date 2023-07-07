export default function Contacts(props) {
  return (
    <div className="bg-blue-700 text-white flex flex-col justify-center items-center flex-wrap rounded-xl border border-black p-[1rem] gap-[0.5rem]">
      <span className="flex justify-start items-start gap-[0.5rem]">
        <b>Indirizzo-- </b> {props.address}
      </span>
      <span className="flex justify-start items-start gap-[0.5rem]">
        <b>Email--</b> {props.email}
      </span>
      <span className="flex justify-start items-start gap-[0.5rem]">
        <b>Pec--</b> {props.pec}
      </span>
      <span className="flex justify-start items-start gap-[0.5rem]">
        <b>Telefono--</b> {props.mobile}
      </span>
    </div>
  );
}
