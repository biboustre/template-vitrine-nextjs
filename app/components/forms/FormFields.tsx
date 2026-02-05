import React from "react";

type FormLabelFieldProps = {
  children: React.ReactNode;
  required?: boolean;
  htmlFor?: string;
  className?: string;
};

export default function FormLabelField({
  children,
  required,
  htmlFor,
  className,
}: FormLabelFieldProps) {
  return (
    <label htmlFor={htmlFor} className={`${className} mb-2 inline-block`}>
      {required && <span className="text-slate-500 mr-1">*</span>}
      {children}
    </label>
  );
}

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

export function InputField({ label, id, ...props }: InputFieldProps) {
  return (
    <div>
      <FormLabelField htmlFor={id} required={props.required}>
        {label}
      </FormLabelField>
      <input
        id={id}
        {...props}
        className={
          "w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary " +
          (props.className || "")
        }
      />
    </div>
  );
}

interface TextareaFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
}

export function TextareaField({ label, id, ...props }: TextareaFieldProps) {
  return (
    <div>
      <FormLabelField htmlFor={id} required={props.required}>
        {label}
      </FormLabelField>
      <textarea
        id={id}
        {...props}
        className={
          "w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary " +
          (props.className || "")
        }
      />
    </div>
  );
}
