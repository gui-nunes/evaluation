import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

interface InputProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label: string;
}
export function Input(props: InputProps) {
  return (
    <div className="mb-6">
      <label htmlFor={props.name} className="block mb-2 text-sm font-medium text-gray-900">
        {props.label}
      </label>
      <input
        {...props}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
    </div>
  );
}
