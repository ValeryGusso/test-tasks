import { FC } from 'react';
import cls from './button.module.css';

interface ButtonProps {
	value: string;
	onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ value, onClick }) => {
	return (
		<button onClick={onClick} className={cls.button}>
			{value}
		</button>
	);
};

export default Button;
