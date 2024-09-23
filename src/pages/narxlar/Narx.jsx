import React from 'react'
import './Narx.css'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoEarthSharp } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { TbNotebook } from "react-icons/tb";
import { IoBarbell } from "react-icons/io5";

function Narx() {
    return (
        <div className='narx'>
            <div className="section_back narx_back">
                <div className="container">
                    <p className="section_title">Главная  /  Цены</p>
                    <h1 className="section_title2 narx-title2">Услуги доставки из Великобритании</h1>
                </div>
            </div>
            <div className="container">
                <div className="narx-top">
                    <div className="narx-top-box">
                        <img src="./imgs/narx/Ресурс 1 2.png" alt="" />
                        <h2 className="narx-box-title">Ваш личный адрес для покупок</h2>
                        <p className="narx-box-p">на нашем современном автоматизированном складе в безналоговом Делавэре</p>
                        <button className="narx-box-btn">Бесплатно</button>
                    </div>
                    <div className="narx-top-box">
                        <img src="./imgs/narx/Ресурс 1 3.png" alt="" />
                        <h2 className="narx-box-title">Объединение нескольких посылок в одну</h2>
                        <p className="narx-box-p">ведь часто отправлять несколько посылок в одной коробке гораздо выгоднее, чем по одной</p>
                        <button className="narx-box-btn">от £10.00</button>
                    </div>
                    <div className="narx-top-box">
                        <img src="./imgs/narx/Ресурс 1 4.png" alt="" />
                        <h2 className="narx-box-title">Усиленная упаковка по запросу</h2>
                        <p className="narx-box-p">Мы дополнительно упакуем вашу посылку в пленку, коробку с двойными стенками.</p>
                        <button className="narx-box-btn">от £0.25</button>
                    </div>
                    <div className="narx-top-box">
                        <img src="./imgs/narx/Ресурс 1 5.png" alt="" />
                        <h2 className="narx-box-title">Хранение входящих посылок 30 дней</h2>
                        <p className="narx-box-p">чем больше срок хранения посылок на складе – тем больше вы сможете собрать</p>
                        <button className="narx-box-btn">Бесплатно</button>
                    </div>
                </div>
                <h1 className='Okeypast'>Онлайн-калькулятор
                    стоимости доставки товара </h1>
                <p className="okey_title">Задайте необходимые параметры посылки, и калькулятор рассчитает приблизительную стоимость доставки вашей посылки из Англии.</p>
                <div className="raschitat">
                    <div className="ras">
                        <div className="ras_boxes">
                            <p>Страна:</p>
                            <IoEarthSharp className='select_icon' />
                            <select name="" id="">
                                <option value=""> Россия</option>
                            </select>
                        </div>
                        <div className="ras_boxes">
                            <p>Город:</p>
                            <TbNotebook className='select_icon' />

                            <input type="text" className="ras_input" placeholder='Москва' />

                        </div>
                        <div className="ras_boxes">
                            <p>Индекс:</p>
                            <IoDocumentTextOutline className='select_icon' />

                            <input type="text" className="ras_input" placeholder='Введите индекс' />

                        </div>
                        <div className="ras_boxes">
                            <p>Вес посылки:</p>
                            <IoBarbell className='select_icon' />

                            <input type="text" className="ras_input" placeholder='0,5' />

                        </div>
                        <div className="ras_boxes">
                            <p>Дополнительные услуги:</p>
                            <IoDocumentTextOutline className='select_icon' />
                            <select name="" id="">
                                <option value=""> Выберите услуги</option>
                            </select>
                        </div>
                    </div>
                    <button>Рассчитать</button>
                </div>
                <div className="dostavki">
                    <h1 className="dos_title">Варианты доставки:</h1>
                    <div className="dostavki_box">
                        <div className="dost_box_left">
                            <img src="/imgs/icon9.png" alt="" />
                            <h1>Почта России</h1>
                        </div>
                        <div className="dost_right_boxes"><p>Сроки: <br /> <span>10-14 дней</span> </p></div>
                        <div className="dost_right_boxes"><p>Стоимость доставки: <br /> <span>от £27.00</span> </p></div>
                        <div className="dost_right_boxes"><p>Итого: <br /> <span>£41.99</span> </p></div>

                    </div>
                    <div className="dostavki_box">
                        <div className="dost_box_left">
                            <img src="/imgs/icon10.png" alt="" />
                            <h1>EMS ПОЧТА РОССИЯ</h1>
                        </div>
                        <div className="dost_right_boxes"><p>Сроки: <br /> <span>9-12 дней</span> </p></div>
                        <div className="dost_right_boxes"><p>Стоимость доставки: <br /> <span>от £40.00</span> </p></div>
                        <div className="dost_right_boxes"><p>Итого: <br /> <span>£54.55</span> </p></div>
                    </div>
                    <div className="dostavki_box">
                        <div className="dost_box_left">
                            <img src="/imgs/icon11.png" alt="" />
                            <h1>ПОЧТА РОССИИ МЕЛКИЕ ПАКЕТЫ</h1>
                        </div>
                        <div className="dost_right_boxes"><p>Сроки: <br /> <span>10-14 дней</span> </p></div>
                        <div className="dost_right_boxes"><p>Стоимость доставки: <br /> <span>от £13.00</span> </p></div>
                        <div className="dost_right_boxes"><p>Итого: <br /> <span>£90.50</span> </p></div>
                    </div>
                </div>
                <div className="skladka">
                    <h1 className="skladka-title">Услуги склада</h1>
                    <div className="skladka-top-box">
                        <div className="skladka-narx">
                            <p className="skladka-seni-title">Консолидация </p>
                            <p className="skladka-narx2">£1.00/1 трек</p>
                        </div>
                        <div className="skladka-narx">
                            <p className="skladka-seni-title">Заполнение декларации </p>
                            <p className="skladka-narx2">£1.00</p>
                        </div>
                        <div className="skladka-narx">
                            <p className="skladka-seni-title">Дополнительная упаковка </p>
                            <p className="skladka-narx2">£5.00</p>
                        </div>
                        <div className="skladka-narx">
                            <p className="skladka-seni-title">Упаковка xрупкиx предметов </p>
                            <p className="skladka-narx2">£10.00</p>
                        </div>
                        <div className="skladka-narx">
                            <p className="skladka-seni-title">Заполнение декларации </p>
                            <p className="skladka-narx2">£1.00</p>
                        </div>
                        <div className="skladka-narx">
                            <p className="skladka-seni-title">Разделение заказа </p>
                            <p className="skladka-narx2">£2.00</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Narx