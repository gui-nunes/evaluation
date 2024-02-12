import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode;
}
export function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:ring-blue-500 focus:ring-offset-blue-200">
      {props.children}
    </button>
  );
}
