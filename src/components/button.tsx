import clsx from 'clsx';
import {ReactNode, ButtonHTMLAttributes} from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
}

export default function Button({className, children, ...props}: ButtonProps) {
  return (
    <button
      className={clsx('controls gap-1 w-42 font-bold', className)}
      {...props}
    >
      {children}
    </button>
  );
}
