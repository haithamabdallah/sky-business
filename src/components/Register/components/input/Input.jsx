// import { countries } from "../../data";
const Input = ({ input, handleChange, countries, setFocus }) => {
  return input.type === "select" ? (
    <select
      defaultValue=""
      name={input.name}
      className="px-2 py-[0.6rem] mb-2 w-full border
      border-gray-400 border-opacity-60"
      onChange={(e) => handleChange(e)}
      required={input.required}
    >
      <option value="" disabled>
        Select Your Country
      </option>
      {Object.entries(countries).map(([id, name]) => (
        <option key={id} value={id}>
          {name}
        </option>
      ))}
    </select>
  ) : (
    <input
      className="outline-none border-b border-black py-[0.25rem] px-[0.3125rem]
        h-[2.1rem] text-[14px] font-semibold"
      onFocus={() => setFocus(true)}
      onBlur={(e) => {
        if (!e.target.value) setFocus(false);
      }}
      onChange={(e) => handleChange(e)}
      type={input.type}
      name={input.name}
      required={input.required}
    />
  );
};

export default Input;
