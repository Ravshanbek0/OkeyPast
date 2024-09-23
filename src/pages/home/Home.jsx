import React from 'react'
import './Home.css'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoEarthSharp } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { TbNotebook } from "react-icons/tb";
import { IoBarbell } from "react-icons/io5";

function Home() {
    return (
        <div className='home'>

            <header>
                <div className="container">
                    <div className="header">
                        <div className="home_left">
                            <h1 className="header_title">Доставка товаров из Великобритании в Россию</h1>
                            <p className="header_little">Начните экономить до 80% на шопинге. Регистрируйтесь в OkeyPost, чтобы покупать со скидками в UK одежду, обувь, гаджеты известных брендов и безопасно отправлять вещи в Россию.
                            </p>
                            <button className='header-btn'> Получить адрес в UK</button>
                        </div>
                        <div className="home_right">
                            <img src="./imgs/hero.png" alt="" />
                        </div>
                    </div>
                </div>
            </header>
            <div className="container">
                <div className="section_odejda">
                    <h1 className="odejda_title">Насколько выгодно покупать?</h1>
                    <div className="odejda_box1">
                        <FaLongArrowAltLeft className='odejda-icon' />
                        <div className="odejda_objects">
                            <img src="./imgs/objects/object1.png" alt="" className="box1-img" />
                            <p className="odejda-p">Одежда</p>
                        </div>
                        <div className="odejda_objects">
                            <img src="./imgs/objects/object2.png" alt="" className="box1-img" />
                            <p className="odejda-p">Электроника</p>
                        </div>
                        <div className="odejda_objects">
                            <img src="./imgs/objects/object3.png" alt="" className="box1-img" />
                            <p className="odejda-p">Аксессуары</p>
                        </div>
                        <div className="odejda_objects">
                            <img src="./imgs/objects/object4.png" alt="" className="box1-img" />
                            <p className="odejda-p">Для детей</p>
                        </div>
                        <div className="odejda_objects">
                            <img src="./imgs/objects/object5.png" alt="" className="box1-img" />
                            <p className="odejda-p">Для спорта</p>
                        </div>
                        <div className="odejda_objects">
                            <img src="./imgs/objects/object6.png" alt="" className="box1-img" />
                            <p className="odejda-p">Косметика</p>
                        </div>
                        <FaLongArrowAltRight className='odejda-icon' />
                    </div>
                    <div className="odejda_box2">
                        <div className='odejda_logs1' >
                            <h1 className="odejda_box2_title">Columbia Barlow Pass 550 Turbodown Jacket</h1>
                            <div className="odejda2_boxDiv">
                                <img src="./imgs/rusFlag.png" alt="" />
                                <p className="odejda_box_title">Цена в России<br /> <span>7891,46₽ </span></p>
                            </div>
                        </div>
                        <div className='odejda_logs2' >
                            <img src="./imgs/kurtka.png" alt="" />
                        </div>
                        <div className='odejda_logs1' >
                            <h1 className="odejda_box2_title ">Доставка одежды из Великобритании  от <span className='engOdejdata_title'>£7.79</span> </h1>
                            <div className="odejda2_boxDiv">
                                <img src="./imgs/engFlag.png" alt="" />
                                <p className="odejda_box_title">Цена в UK<br /> <span className='engOdejdata_title'>7891,46₽ </span></p>
                            </div>
                        </div>
                    </div>
                    <div className="odejda_box3">
                        <img src="./imgs/futbolka.png" alt="" />
                        <FaLongArrowAltLeft className='odejda-icon' />
                        <p className="odejda_box_title box3_blog">Срок доставки примерно 10 дней<br /><span>Вы экономите до</span>  <span className='engOdejdata_title'>$119.56 </span></p>
                        <FaLongArrowAltRight className='odejda-icon' />
                        <img src="./imgs/shim.png" alt="" />
                    </div>
                    <div className="odejda_box4">
                        <div className="box4_blogs box4_border">
                            <img src="./imgs/icon5.png" alt="" />
                            <p className="box4_title">Экономия <br /> до 70%</p>
                        </div>
                        <div className="box4_blogs box4_border">
                            <img src="./imgs/icon6.png" alt="" />
                            <p className="box4_title">Только подлинная<br />  продукция</p>
                        </div>
                        <div className="box4_blogs box4_border">
                            <img src="./imgs/icon7.png" alt="" />
                            <p className="box4_title">Оперативная <br /> доставка</p>
                        </div>
                        <div className="box4_blogs">
                            <img src="./imgs/icon8.png" alt="" />
                            <p className="box4_title">Огромный<br />  выбор товаров</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sectoin_pobravavot">
                <div className="container">
                    <div className="sec_pobravavot_blog">
                        <img className='prob_img' src="./imgs/hero2.png" alt="" />
                        <div className="prob_box">
                            <h1>Поручите нашим мастерам шопинга оформить заказы в английских магазинах и освободите время для более важных дел.</h1>
                            <p>Такой способ покупки также подойдёт, если магазин принимает только английские карты.</p>
                            <button>Попробовать</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <h1 className='Okeypast'>OkeyPost удобная и быстрая доставка посылок из Великобритании </h1>
                <p className="okey_title">Рассчитайте стоимость доставки из Англии к вам домой. Мы получим ваши посылки на складе, при необходимости объединим несколько доставок в одну и отправим их к вам надежно упакованными.</p>
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
                            <img src="./imgs/icon9.png" alt="" />
                            <h1>Почта России</h1>
                        </div>
                        <div className="dost_right_boxes"><p>Сроки: <br /> <span>10-14 дней</span> </p></div>
                        <div className="dost_right_boxes"><p>Стоимость доставки: <br /> <span>от £27.00</span> </p></div>
                        <div className="dost_right_boxes"><p>Итого: <br /> <span>£41.99</span> </p></div>

                    </div>
                    <div className="dostavki_box">
                        <div className="dost_box_left">
                            <img src="./imgs/icon10.png" alt="" />
                            <h1>EMS ПОЧТА РОССИЯ</h1>
                        </div>
                        <div className="dost_right_boxes"><p>Сроки: <br /> <span>9-12 дней</span> </p></div>
                        <div className="dost_right_boxes"><p>Стоимость доставки: <br /> <span>от £40.00</span> </p></div>
                        <div className="dost_right_boxes"><p>Итого: <br /> <span>£54.55</span> </p></div>
                    </div>
                    <div className="dostavki_box">
                        <div className="dost_box_left">
                            <img src="./imgs/icon11.png" alt="" />
                            <h1>ПОЧТА РОССИИ МЕЛКИЕ ПАКЕТЫ</h1>
                        </div>
                        <div className="dost_right_boxes"><p>Сроки: <br /> <span>10-14 дней</span> </p></div>
                        <div className="dost_right_boxes"><p>Стоимость доставки: <br /> <span>от £13.00</span> </p></div>
                        <div className="dost_right_boxes"><p>Итого: <br /> <span>£90.50</span> </p></div>
                    </div>
                </div>
                <div className="pokupka">
                    <h1 className="pokupka_title">4 простых шага для ваших покупок в Великобритании </h1>
                    <div className="pokupka_main_blog">
                        <div className="pokup_main_boxes">
                            <img src="./imgs/pokup1.png" alt="" />
                            <h1>вы ВЫБИРАЕТЕ <br /> ТОВАР</h1>
                            <p>в английском магазине, оплачиваете и указываете адрес склада OkeyPost</p>
                        </div>
                        <div className="pokup_main_boxes">
                            <img src="./imgs/pokup2.png" alt="" />
                            <h1>ПОКУПКИ ПРИХОДЯТ <br /> НА СКЛАД</h1>
                            <p>и появляются в вашем личном кабинете на нашем сайте</p>
                        </div>
                        <div className="pokup_main_boxes">
                            <img src="./pokup3.png" alt="" />
                            <h1>ОТПРАВЛЯЕМ ИХ <br /> К ВАМ ДОМОЙ</h1>
                            <p>в надежной упаковке, по выгодной цене и очень быстро</p>
                        </div>
                        <div className="pokup_main_boxes">
                            <img src="./imgs/pokup4.png" alt="" />
                            <h1>ЗАБИРАЕТЕ <br />
                                свою ПОСЫЛКУ</h1>
                            <p>в пункте выдачи, на почте или с курьером</p>
                        </div>
                    </div>
                    <p className="pokupka_little">Не хотите разбираться самостоятельно, наши мастера шопинга с радостью <br /> купят все товары за вас.</p>
                    <button className='pokup_btn'>Быстрая покупка</button>
                </div>
            </div>
            <div className="sectoin_pobravavot">
                <div className="container">
                    <div className="sec_pobravavot_blog">
                        <img className='prob_img' src="./imgs/hero3.png" alt="" />
                        <div className="prob_box">
                            <h1>Виртуальный тур по нашему складу в реальном времени</h1>
                            <p>Вы можете всегда посмотреть на нашу слаженую работу на складе</p>
                            <button>Попробовать</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <h1 className="rossi_title">120 000 довольных клиентов в России <br /> уже сделали свой выбор</h1>
                <p className="rossi_title2">За последний год десятки тысяч наших клиентов заказали <br /> товары из Англии и оставили 19 633 отзыва</p>
                <div className="rossi_main_box">
                    <div className="rossi_boxes">
                        <img src="./imgs/group20.png" alt="" />
                        <h1>Больше не значит дороже</h1>
                        <p>С ростом веса посылки цена за каждые 0.5 кг уменьшается в прогрессии.</p>
                    </div>
                    <div className="rossi_boxes">
                        <img src="./imgs/group21.png" alt="" />
                        <h1>Больше не значит дороже</h1>
                        <p>С ростом веса посылки цена за каждые 0.5 кг уменьшается в прогрессии.</p>
                    </div>
                    <div className="rossi_boxes">
                        <img src="./imgs/group22.png" alt="" />
                        <h1>Больше не значит дороже</h1>
                        <p>С ростом веса посылки цена за каждые 0.5 кг уменьшается в прогрессии.</p>
                    </div>
                </div>
                <h1 className="bloger_title">Отзывы и цитаты блогеров:</h1>
                <div className="bloger_blog">
                    <div className="bloger_boxes">
                        <img src="./imgs/blogers/bloger1.png" alt="" />
                        <div className="bloger_lit">
                            <h1 className="bloger_title1">NIKOLAY S</h1>
                            <img src="./imgs/blogers/star.png" alt="" />
                            <p className="bloger_title2">Ваша доставка самая быстрая и дешёвая!!!</p>
                            <p className="bloger_title3"><span>Дата:</span>16 Ноября 2021</p>
                            <p className="bloger_title3"><span>Город:</span>Санкт-Петербург</p>
                        </div>

                    </div>
                    <div className="bloger_boxes">
                        <img src="./imgs/blogers/bloger2.png" alt="" />
                        <div className="bloger_lit">
                            <h1 className="bloger_title1">DMITRIY D</h1>
                            <img src="./imgs/blogers/star.png" alt="" />
                            <p className="bloger_title2">Ваша доставка самая быстрая и дешёвая!!!</p>

                            <p className="bloger_title3"><span>Дата:</span>16 Ноября 2021</p>
                            <p className="bloger_title3"><span>Город:</span>Москва</p>
                        </div>

                    </div>
                    <div className="bloger_boxes">
                        <img src="./imgs/blogers/bloger3.png" alt="" />
                        <div className="bloger_lit">
                            <h1 className="bloger_title1">VLADIMIR E</h1>
                            <img src="./imgs/blogers/star.png" alt="" />
                            <p className="bloger_title2">Ваша доставка самая быстрая и дешёвая!!!</p>

                            <p className="bloger_title3"><span>Дата:</span>16 Ноября 2021</p>
                            <p className="bloger_title3"><span>Город:</span>Санкт-Петербург</p>
                        </div>

                    </div>
                    <div className="bloger_boxes">
                        <img src="./imgs/blogers/bloger4.png" alt="" />
                        <div className="bloger_lit">
                            <h1 className="bloger_title1">Оксана</h1>
                            <img src="./imgs/blogers/star.png" alt="" />
                            <p className="bloger_title2">Ваша доставка самая быстрая и дешёвая!!!</p>

                            <p className="bloger_title3"><span>Дата:</span>16 Ноября 2021</p>
                            <p className="bloger_title3"><span>Город:</span>Санкт-Петербург</p>
                        </div>

                    </div>
                </div>
                <button className='pokup_btn'>Все отзывы</button>
                <h1 className="bloger_last_h1">Ваш личный адрес в Великобритании  для покупок</h1>
                <p className="bloger_last_p">С нами вы получаете целых два адреса в UK! У нас есть два склада для приема посылок – в Лондоне и Манчестере. Указывайте в магазине тот из них, отправка на который обойдется дешевле (или покупка будет без налогов). Чаще всего в Лондоне наши клиенты заказывают одежду и обувь, а в Манчестер идут гаджеты и всё остальное. С OkeyPost вы всегда получаете максимальную выгоду!

                    При доставке из UK в Россию все ваши товары обязательно страхуются. Прием посылок на наш склад, их обработка, удаление лишних коробок, хранение сроком до 70 дней – у нас полностью бесплатно. Мы также бесплатно проводим объединение посылок из разных магазинов в одну. Это необходимо для снижения стоимости доставки посылок из UK в Россию.

                    У нас самая выгодная доставка! От $11.99 за посылку! А если у вас есть какие-то особенные требования, вроде проверки техники или дополнительной пленки для самых хрупких товаров, – операторы нашего склада с радостью выполнят их по спецзапросу.

                    Okeypost.com – это надежно, быстро и выгодно. А в наших соцсетях вы всегда найдете информацию о лучших скидках fyukbqcrb[ магазинов. Не обязательно заходить в Черную пятницу или Prime Day, крутые акции проходят каждый день!</p>
            </div>
        </div>

    )
}

export default Home