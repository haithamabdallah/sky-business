// import { countries } from "../../data";
const Input = ({ input, handleChange, countries }) => {
  return input.type === "select" ? (
    <select
      defaultValue=""
      name={input.name}
      className="px-2 py-[0.6rem] mb-2 w-48 min-[500px]:w-auto border
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
      className="px-2 py-[0.6rem] mb-2 border border-gray-400 border-opacity-60 focus-visible:outline
focus-visible:border-none focus-visible:outline-1 focus-visible:outline-gray-400
placeholder:font-medium placeholder:text-xs placeholder-gray-400
placeholder-opacity-80 w-full"
      onChange={(e) => handleChange(e)}
      type={input.type}
      name={input.name}
      placeholder={input.placeholder}
      required={input.required}
    />
  );
};

export default Input;
