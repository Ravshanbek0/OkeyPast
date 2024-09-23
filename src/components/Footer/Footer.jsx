import React from 'react'
import './Footer.css'
import { FaWhatsapp } from "react-icons/fa";
import { TbPhoneCall } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";

function Footer() {
  return (
    <footer>
      <div className="main_footer">
        <div className="container">
          <div className="main_foot_box">
            <h1 className="footer_title">Остались вопросы? Спросите нас в соцсетях!</h1>
            <div className="f-box">
              <FaWhatsapp className='f-box-icon' />
              <TbPhoneCall className='f-box-icon' />
              <HiOutlineMail className='f-box-icon' />
            </div>
          </div>
        </div>
      </div>
      <div className="main2_footer">
        <div className="container">
          <div className="main_foot_boxObot">
            <div className="main2_boxses">
              <img src="./imgs/logo.png" alt="" />
              <div className="f-box footer-lastFbox">
                <FaWhatsapp className='f-box-icon iconFooter' />
                <TbPhoneCall className='f-box-icon iconFooter2' />
                <HiOutlineMail className='f-box-icon iconFooter3' />
              </div>
            </div>
            <div className="main2_boxses">
              <p>
                <span>О компании</span>
                Услуги <br />
                Цены  <br />
                Отзывы <br />
                Контакты <br />
                Вакансии <br />
                Соглашение о персональных данных <br />
                Условия использования
              </p>
            </div>
            <div className="main2_boxses">
              <p>
                <span>Полезное</span>
                Как работает наш сервис <br />
                Как покупать с оператором <br />
                Ответы на частые вопросы <br />
                Популярные магазины <br />
                Черный список магазинов <br />
                Актуальные распродажи
              </p>
            </div>
            <div className="main2_boxses">
              <p>
                <span>Спецпроекты</span>
                50% на первую доставку<br />
                Скидки для постоянных клиентов<br />
                Реферальная программа<br />
                Кэшбек Mr. Rebates и Rakuten<br />
                Stop Fraud
              </p>
            </div>
          </div>
          <div className="footer-last-box">
            <hr className='hr_teg' />
            <p>© 2021 Okeypost . Все права защищены.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer