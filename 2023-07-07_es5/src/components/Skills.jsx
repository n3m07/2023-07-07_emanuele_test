export default function Skills(props) {
  return props.skills.map((el) => (
    <span
      key={props.key}
      className="px-[0.5rem] bg-blue-700 text-white rounded-lg border border-black text-2xl"
    >
      {el}
    </span>
  ));
}
