import { FC } from 'react';
import cls from './footer.module.css';
import InfoBlock from './infoBlock/infoBlock';
import Socials from '../UI/socials/socials';
import { socialLinks } from '../../assets/constants';
const a = [
	{ id: 0, title: 'Партнёрская программа', href: '#' },
	{ id: 1, title: 'Вакансии', href: '#' },
];
const b = [
	{ id: 0, title: 'Расчёт стоимости', href: '#' },
	{ id: 1, title: 'Услуги', href: '#' },
	{ id: 2, title: 'Виджеты', href: '#' },
	{ id: 3, title: 'Интеграции', href: '#' },
	{ id: 4, title: 'Наши клиенты', href: '#' },
];
const c = [
	{ id: 1, title: 'Благодарственные письма', href: '#' },
	{ id: 0, title: 'Кейсы', href: '#' },
	{ id: 2, title: 'Сертификаты', href: '#' },
	{ id: 3, title: 'Блог на Youtube', href: '#' },
	{ id: 4, title: 'Вопрос / Ответ', href: '#' },
];

const Footer: FC = () => {
	return (
		<footer className={cls.container}>
			<InfoBlock title="О компании" links={a} width={200} />
			<div className={cls.menu}>
				<InfoBlock title="Меню" links={b} width={130} />
				<InfoBlock title=" " links={c} width={130} />
			</div>
			<div className={cls.right__block}>
				<div className={cls.info}>
					<h2 className={cls.title}>Контакты</h2>
					<ul className={cls.list}>
						<li>
							<p className={cls.link}>+7 555 555-55-55</p>
						</li>
						<li>
							<Socials links={socialLinks} gap={10} />
						</li>
						<li>
							<p className={cls.link}>Москва, Путевой проезд 3с1, к 902</p>
						</li>
					</ul>
				</div>
				<div className={cls.copyright}>
					<p>©WELBEX 2022. Все права защищены.</p>
					<a href="#">Политика конфиденциальности</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
