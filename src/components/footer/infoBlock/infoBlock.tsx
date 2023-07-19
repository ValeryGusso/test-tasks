import { CSSProperties, FC } from 'react';
import cls from './infoBlock.module.css';
import { ILink } from '../../../@types/props';

interface InfoBlockProps {
	title: string;
	links: ILink[];
	width: number;
}

const InfoBlock: FC<InfoBlockProps> = ({ title, links, width }) => {
	return (
		<div className={cls.contaiter}>
			<h2 className={cls.title}>{title}</h2>
			<ul className={cls.list} style={{ '--w': width + 'px' } as CSSProperties}>
				{links.map(link => (
					<li key={link.id}>
						<a href={link.href} className={cls.link}>
							{link.title}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default InfoBlock;
