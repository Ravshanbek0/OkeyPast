import React from 'react'
import './Pokup.css'

function Pokup() {
    return (
        <div className='pokup'>
            <div className="section_back">
                <div className="container">
                    <p className="section_title">Главная  /  Как покупать</p>
                    <h1 className="section_title2">Научим покупать вВеликобритании!</h1>
                    <p className="section_title3">и экономить до 70%</p>
                    <button className='pokup_btn'>Получить адрес в UK</button>
                </div>
            </div>
            <div className="container">
                <h1 className="pokup_title">Покупать в Великобритании очень просто</h1>
                <p className="pokup_2little">Английские магазины не доставляют в Россию, но это не проблема. С OkeyPost можно покупать по лучшим ценам и экономить на доставке. Мы получим ваши посылки, надежно упакуем и отправим их к вам домой.</p>
                <div className="pokup2_main">
                    <img src="./public/imgs/pokup/po1.png" alt="" />
                    <div className="pokup2_box">
                        <div className="pokup2_box_top">
                            <h1>01</h1>
                            <p>Получаем адрес для покупок в магазинах Великобритании </p>
                        </div>
                        <p className="pokup2_p">Okeypost поможет притвориться американцем и не переплачивать. Для этого нужно зарегистрироваться в нашем сервисе. После регистрации вам станут доступны два адреса в Англии, которые вы сможете указывать при оформлении заказов в интернет-магазинах.</p>
                    </div>
                </div>
                <div className="pokup2_main">
                    <img src="./public/imgs/pokup/po2.png" alt="" />
                    <div className="pokup2_box">
                        <div className="pokup2_box_top">
                            <h1>02</h1>
                            <p>Идём за покупками в онлайн-магазины</p>
                        </div>
                        <p className="pokup2_p">Выбираем нужные товары в магазинах Англии. Расплачиваемся, как обычно, в качестве адреса доставки указываем координаты одного из складов Okeypost. Оформить покупки можно самостоятельно или с нашей помощью. Вот список того, что покупать нельзя.</p>
                    </div>
                </div>
                <div className="pokup2_main">
                    <img src="./public/imgs/pokup/po3.png" alt="" />
                    <div className="pokup2_box">
                        <div className="pokup2_box_top">
                            <h1>03</h1>
                            <p>Следим за перемещением посылки до склада </p>
                        </div>
                        <p className="pokup2_p">После оформление заказа магазин пришлет трек-номер посылки на ваш e-mail и отправит вещи на наш склад. Через 5-7 дней покупки придут к нам, мы поместим их в специальное хранилище, закрепленное за вашим аккаунтом.</p>
                    </div>
                </div>
                <div className="pokup2_main">
                    <img src="./public/imgs/pokup/po4.png" alt="" />
                    <div className="pokup2_box">
                        <div className="pokup2_box_top">
                            <h1>04</h1>
                            <p>Оплачиваем доставку и покупки отправляются домой </p>
                        </div>
                        <p className="pokup2_p">Мы сообщим, когда ваши покупки поступят на склад. Вы сможете заказать что-то еще в других магазинах и отправить все одной посылкой (так выгоднее). До 30 дней покупки будут храниться бесплатно.
Когда все товары поступили на склад, выбирайте способ доставки, мы надежно все упакуем и отправим вам, сообщив трек-номер.</p>
                    </div>
                </div>
                <div className="pokup2_main">
                    <img src="./public/imgs/pokup/po5.png" alt="" />
                    <div className="pokup2_box">
                        <div className="pokup2_box_top">
                            <h1>05</h1>
                            <p>Получаем посылку и спешим сделать новый заказ</p>
                        </div>
                        <p className="pokup2_p">Примерно через 2 недели посылка приедет к вам домой, в пункт выдачи заказов или на почту. Получаем покупки и радуемся :)</p>
                    </div>
                </div>
                <button className='pokup_btn'>Получить адрес в UK</button>
            </div>
        </div>
    )
}

export default Pokup