import React from 'react';

import styles from './aboutUs.module.scss'
import Employee from '../employee/Employee';


const AboutUs = () => {
	return (
    <div className={styles['aboutUs-block']}>
      <Employee/>
      <p className={styles['aboutUs']}>
        В салоне красоты ЭРА мы заботимся о том, чтобы каждый наш клиент
        чувствовал себя комфортно и был доволен своим внешним видом. Мы
        предлагаем стрижки для мужчин, женщин и детей, учитывая ваши
        предпочтения и стиль. Если вы хотите изменить цвет волос, наши мастера
        помогут подобрать идеальный оттенок и сделают окрашивание, которое
        подчеркнёт вашу индивидуальность. Также у нас вы можете сделать маникюр,
        придать выразительность взгляду с помощью наращивания ресниц или
        ламинирования бровей. Для мужчин мы предлагаем уход за бородой, чтобы
        она всегда выглядела аккуратно и ухоженно. Каждый визит в ЭРА — это не
        просто услуга, а внимательное отношение к вашим желаниям и деталям. Мы
        стремимся создать для вас атмосферу, где можно расслабиться и довериться
        профессионалам, чтобы выйти из салона с отличным настроением и
        уверенными в своём образе.
      </p>
	  
    </div>
  );
};

export default AboutUs;