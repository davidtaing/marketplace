import { ComponentPropsWithoutRef, forwardRef, Ref } from "react";

interface TextInputProps extends ComponentPropsWithoutRef<"input"> {
  label: string;
  id: string;
  error?: string;
}

export const TextInput = forwardRef(
  (
    { id, label, error, ...props }: TextInputProps,
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <div className="text-input flex flex-col">
        <label htmlFor={id} className="w-full font-medium text-slate-800">
          {label}
        </label>
        <input
          ref={ref}
          id={id}
          className="w-full text-xl mt-2 px-4 py-2 rounded hover:text-slate-900 active:text-slate-900"
          {...props}
        />
        <label className="w-full mt-2 text-rose-600 h-4">{error}</label>
      </div>
    );
  }
);

TextInput.displayName = "TextInput";
