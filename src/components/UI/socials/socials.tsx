import { CSSProperties, FC } from 'react';
import cls from './socials.module.css';

interface ISocial {
	id: number;
	img: string;
	href: string;
}

interface SocialsProps {
	links: ISocial[];
	gap: number;
}

const Socials: FC<SocialsProps> = ({ links, gap }) => {
	return (
		<div>
			<ul className={cls.list} style={{ '--gap': gap + 'px' } as CSSProperties}>
				{links.map(link => (
					<li key={link.id}>
						<a href={link.href} className={cls.link}>
							<img src={link.img} alt="social button" draggable={false} />
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Socials;
