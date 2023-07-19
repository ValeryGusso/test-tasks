import { FC } from 'react';
import cls from './main.module.css';
import Button from '../UI/button/button';
import redBall from '../../assets/img/red_ball_sm.png';
import purpleBall from '../../assets/img/purple_ball.png';
import useIsMobile from '../../hooks/isMobile';
import { descriptionItemsDesktop, descriptionItemsMobile } from '../../assets/constants';

const Main: FC = () => {
	const isMobile = useIsMobile();

	return (
		<main className={cls.container}>
			<div className={cls.info}>
				<p className={cls.info__title}>
					Зарабатывайте больше <span>с WELBEX</span>
				</p>
				<p className={cls.info__description}>Развиваем и контролируем продажи за вас</p>
			</div>
			<div className={cls.descriptopn}>
				<h2 className={cls.descriptopn__title}>
					Вместе с <span>бесплатной консультацией</span> мы дарим:
				</h2>
				<ul className={cls.descriptopn__list}>
					{(isMobile ? descriptionItemsMobile : descriptionItemsDesktop).map(item => (
						<li key={item.id} className={cls.descriptopn__list__item}>
							<h2>{item.title}</h2>
							<p>{item.descriptopn}</p>
						</li>
					))}
				</ul>
				<div className={cls.button}>
					<Button value="Получить консультацию" />
				</div>
			</div>
			<div className={cls.blur__ball} />
			<div className={cls.blur__ball__purple} />
			<div className={cls.blur__ball__yellow} />
			<div className={cls.glass} />
			<div className={cls.noize} />
			<img className={cls.red__ball} src={redBall} alt="decoration ball" />
			<img className={cls.purple__ball} src={purpleBall} alt="decoration ball" />
		</main>
	);
};

export default Main;
