import { FC } from 'react';
import cls from './navigation.module.css';
import { ILink } from '../../../@types/props';

interface NavigationProps {
	links: ILink[];
}

const Navigation: FC<NavigationProps> = ({ links }) => {
	return (
		<nav>
			<ul className={cls.list}>
				{links.map(link => (
					<li key={link.id}>
						<a href={link.href} className={cls.link}>
							{link.title}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navigation;
