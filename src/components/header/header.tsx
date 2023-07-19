import { FC } from 'react';
import cls from './header.module.css';
import Logo from './logo/logo';
import Navigation from './navigation/navigation';
import Socials from '../UI/socials/socials';
import { navLinksDesktop, navLinksMobile, socialLinks } from '../../assets/constants';
import redBall from '../../assets/img/red_ball.png';
import purpleBall from '../../assets/img/purple_ball.png';
import useIsMobile from '../../hooks/isMobile';

const Header: FC = () => {
	const isMobile = useIsMobile();

	return (
		<header className={cls.contaiter}>
			<div className={cls.menu}>
				<div className={cls.logo}>
					<Logo />
				</div>
				<Navigation links={isMobile ? navLinksMobile : navLinksDesktop} />
				<p className={cls.phone}>+7 555 555-55-55</p>
				<div className={cls.socials}>
					<Socials links={socialLinks} gap={30} />
				</div>
				<img className={cls.red_ball} src={redBall} alt="decoration ball" draggable={false} />
				<img className={cls.purple_ball} src={purpleBall} alt="decoration ball" draggable={false} />
			</div>
		</header>
	);
};

export default Header;
