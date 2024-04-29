import { UseControllerProps, useController } from "react-hook-form";

type InputProps = {
  name: string;
  label: string;
  placeholder?: string;
  type?: "text" | "password" | "email" | "number" | "date" | "time";
};

type InputFieldProps<T extends object> = {} & InputProps &
  UseControllerProps<T>;

export const Input = <T extends object>(props: InputFieldProps<T>) => {
  const { field, fieldState } = useController(props);

  return (
    <div className="mb-6">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={props.name}
      >
        {props.label}
      </label>
      <input
        {...field}
        type={props.type}
        placeholder={props.placeholder}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
      />
      {fieldState.invalid && (
        <p className="text-red-500 text-xs italic">
          {fieldState.error?.message}
        </p>
      )}
    </div>
  );
};
