import { FC } from 'react';
import logo from '../../../assets/img/logo_1.svg';
import logoText from '../../../assets/img/logo_2.svg';
import cls from './logo.module.css';

const Logo: FC = () => {
	return (
		<div className={cls.container}>
			<div className={cls.logo}>
				<img src={logo} alt="logo" />
				<img src={logoText} alt="logo" />
			</div>
			<p className={cls.text}>крупный интегратор CRM в Росcии и ещё 8 странах</p>
		</div>
	);
};

export default Logo;
