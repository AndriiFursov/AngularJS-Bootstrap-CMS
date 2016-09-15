/*
 * Constructor for new hotel
 *
*/

angular.module('trAg.hotel').factory('TrAgNewHotelService', [function() {
    return function () {
        this.photos = [];
        this.description = "";
        this.reconstructions = [];
        this.distances = [
//            {
//                title: "До аэропорта 85 км",
//            },
//            {
//                title: "До центра г. Льорет-де-Мар 450 м",
//            }
        ];
        this.groups = [
            {
                groupTitle: "In the room",
                col1: [
                    {
                        id: "gr1.c1.1",
                        title: "Центральное кондиционирование",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c1.2",
                        title: "Кондиционер",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c1.3",
                        title: "Вентилятор",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c1.4",
                        title: "Отопление",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c1.5",
                        title: "Телефон",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c1.6",
                        title: "Спутниковое телевидение",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c1.7",
                        title: "Кабельное телевидение",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c1.8",
                        title: "LCD-телевизор",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c1.9",
                        title: "Телевизор",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c1.10",
                        title: "DVD-плеер",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c1.11",
                        title: "Скоростной интернет",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c1.12",
                        title: "Интернет",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c1.13",
                        title: "Wi-Fi",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c1.14",
                        title: "Проводной доступ в Интернет",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c1.15",
                        title: "Мини-бар",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c1.16",
                        title: "Полный мини-бар",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c1.17",
                        title: "Бутылка бесплатной воды при заезде",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c1.18",
                        title: "Мини-холодильник",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c1.19",
                        title: "Холодильник",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c1.20",
                        title: "Электрический чайник и набор чая/кофе",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c1.21",
                        title: "Набор для чая/кофе",
                        type: "checkbox",
                        active: false
                    }
                ],
                col2: [
                    {
                        id: "gr1.c2.1",
                        title: "Ванная",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c2.2",
                        title: "Душ",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c2.3",
                        title: "Фен",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c2.4",
                        title: "Туалетные принадлежности",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c2.5",
                        title: "Туалетно-косметические принадлежности",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c2.6",
                        title: "Полотенца",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c2.7",
                        title: "Халаты, тапочки",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c2.8",
                        title: "Белоснежное бельё",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c2.9",
                        title: "Постельное белье премиум-класса",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c2.10",
                        title: "Современная мебель",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c2.11",
                        title: "Деревянная мебель",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c2.12",
                        title: "Рабочий стол",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c2.13",
                        title: "Гостиный уголок",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c2.14",
                        title: "Сейф",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c2.15",
                        title: "Мини-сейф",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c2.16",
                        title: "Будильник",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c2.17",
                        title: "Утюг и гладильная доска",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c2.18",
                        title: "Сушильный шкаф",
                        type: "checkbox",
                        active: false
                    }
                ],
                col3: [
                    {
                        id: "gr1.c3.1",
                        title: "Ковровое покрытие/ламинат",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c3.2",
                        title: "Ковровое покрытие",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c3.3",
                        title: "На полу ламинат",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c3.4",
                        title: "Пол - паркет",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c3.5",
                        title: "Керамическое покрытие",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c3.6",
                        title: "Кафельный пол",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c3.7",
                        title: "Балкон",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c3.8",
                        title: "Терасса",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c3.9",
                        title: "Панорамные окна",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c3.10",
                        title: "Балкон, терраса или окно",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c3.11",
                        title: "Доставка еды и напитков в номер",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c3.12",
                        title: "Ежедневная уборка номера",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c3.13",
                        title: "Уборка номера",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c3.14",
                        title: "Обслуживание в номерах 10:30-23:00",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c3.15",
                        title: "Обслуживание номеров",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c3.16",
                        title: "Room service",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c3.17",
                        title: "Курение во всех номерах запрещено",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c3.18",
                        title: "Карточная система замков",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c3.19",
                        title: "Пожарная сигнализация",
                        type: "checkbox",
                        active: false
                    }
                ],
                colExtra: []
            },{
                groupTitle: "Available",
                col1: [
                    {
                        id: "gr2.c1.1",
                        title: "Люкс для новобрачных",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr2.c1.2",
                        title: "Семейные номера",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr2.c1.3",
                        title: "Номера для некурящих",
                        type: "checkbox",
                        active: false
                    }
                ],
                col2: [
                    {
                        id: "gr2.c2.1",
                        title: "Гипоаллергенный номер",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr2.c2.2",
                        title: "Звукоизолированные номера",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr2.c2.3",
                        title: "Номера для гостей с огранич. физич. возможн.",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr2.c2.4",
                        title: "Общий лаундж/гостиная с телевизором",
                        type: "checkbox",
                        active: false
                    }
                ],
                col3: [],
                colExtra: []
            },{
                groupTitle: "Food & Drink",
                col1: [
                    {
                        id: "gr3.c1.1",
                        title: "Ресторанов",
                        type: "number",
                        active: ""
                    },
                    {
                        id: "gr3.c1.2",
                        title: "Главный ресторан",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr3.c1.3",
                        title: "Ресторан",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr3.c1.4",
                        title: "Рестораны",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr3.c1.5",
                        title: "Специальные диетические меню",
                        type: "checkbox",
                        active: false
                    }
                ],
                col2: [
                    {
                        id: "gr3.c2.1",
                        title: "Баров",
                        type: "number",
                        active: ""
                    },
                    {
                        id: "gr3.c2.2",
                        title: "Бар",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr3.c2.3",
                        title: "Бары",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr3.c2.4",
                        title: "Лобби-бар",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr3.c2.5",
                        title: "Снек-бар",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr3.c2.6",
                        title: "Бар у бассейна",
                        type: "checkbox",
                        active: false
                    }
                ],
                col3: [],
                colExtra: []
            },{
                groupTitle: "Territory",
                col1: [
                    {
                        id: "gr4.c1.1",
                        title: "Сад",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr4.c1.2",
                        title: "Тропический сад",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr4.c1.3",
                        title: "Зелёная зона",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr4.c1.4",
                        title: "Терасса",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr4.c1.5",
                        title: "Терасса с шезлонгами",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr4.c1.6",
                        title: "Барбекю",
                        type: "checkbox",
                        active: false
                    }
                ],
                col2: [
                    {
                        id: "gr4.c2.1",
                        title: "Частный пляж",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr4.c2.2",
                        title: "Песчаный пляж",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr4.c2.3",
                        title: "Пляж",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr4.c2.4",
                        title: "Платформа",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr4.c2.5",
                        title: "Понтон",
                        type: "checkbox",
                        active: false
                    }
                ],
                col3: [
                    {
                        id: "gr4.c3.1",
                        title: "Пляжное оборудование (Шезлонги, Зонтики, Матрасы, Пляжные полотенца)",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr4.c3.2",
                        title: "Зонтики и шезлонги можно взять напрокат бесплатно",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr4.c3.3",
                        title: "Автобус до пляжа",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr4.c3.4",
                        title: "До пляжа ходит бесплатный трансфер",
                        type: "checkbox",
                        active: false
                    }
                ],
                colExtra: []
            },{
                groupTitle: "Pools",
                col1: [
                    {
                        id: "gr5.c1.1",
                        title: "Открытых бассейнов",
                        type: "number",
                        active: ""
                    },
                    {
                        id: "gr5.c1.2",
                        title: "Закрытых бассейнов",
                        type: "number",
                        active: ""
                    },
                    {
                        id: "gr5.c1.3",
                        title: "Детских бассейнов",
                        type: "number",
                        active: ""
                    }
                ],
                col2: [
                    {
                        id: "gr5.c2.1",
                        title: "Бассейн",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr5.c2.2",
                        title: "Открытый бассейн",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr5.c2.3",
                        title: "Открытый подогреваемый бассейн",
                        type: "checkbox",
                        active: false
                    }
                ],
                col3: [
                    {
                        id: "gr5.c3.1",
                        title: "Закрытый бассейн",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr5.c3.2",
                        title: "Водные горки",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr5.c3.3",
                        title: "Бассейн эксклюзивных номеров",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr5.c3.4",
                        title: "Аквапарк",
                        type: "checkbox",
                        active: false
                    }
                ],
                colExtra: []
            },{
                groupTitle: "For children",
                col1: [
                    {
                        id: "gr6.c1.1",
                        title: "Детская анимация",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr6.c1.2",
                        title: "Игровая комната",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr6.c1.3",
                        title: "Детские горки",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr6.c1.4",
                        title: "Детская игровая площадка",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr6.c1.5",
                        title: "Детский уголок",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr6.c1.6",
                        title: "Детский мини клуб",
                        type: "checkbox",
                        active: false
                    }
                ],
                col2: [
                    {
                        id: "gr6.c2.1",
                        title: "Детский бассейн",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr6.c2.2",
                        title: "Детский бассейн с горками",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr6.c2.3",
                        title: "Детское отделение в бассейне для взрослых",
                        type: "checkbox",
                        active: false
                    }
                ],
                col3: [
                    {
                        id: "gr6.c3.1",
                        title: "Няня",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr6.c3.2",
                        title: "Услуги по уходу за детьми",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr6.c3.3",
                        title: "Детские стулья в ресторане",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr6.c3.4",
                        title: "Детское меню в ресторане",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr6.c3.5",
                        title: "Детские кроватки",
                        type: "checkbox",
                        active: false
                    }
                ],
                colExtra: []
            },{
                groupTitle: "Services",
                col1: [
                    {
                        id: "gr7.c1.1",
                        title: "Конференц-залов",
                        type: "number",
                        active: ""
                    },
                    {
                        id: "gr7.c1.2",
                        title: "Конференц-зал",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c1.3",
                        title: "Банкетный зал",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c1.4",
                        title: "Бизнес центр",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c1.5",
                        title: "Факс/Ксерокопирование",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c1.6",
                        title: "V.I.P. Услуги",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c1.7",
                        title: "Обмен валюты",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c1.8",
                        title: "Банкомат на территории отеля",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c1.9",
                        title: "Интернет-кафе",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c1.10",
                        title: "Интернет-уголок",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c1.11",
                        title: "Wi-Fi",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c1.12",
                        title: "Wi-Fi в общественных зонах",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c1.13",
                        title: "Трансфер (за дополнительную плату)",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c1.14",
                        title: "Трансфер от/до аэропорта",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c1.15",
                        title: "Автостоянка",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c1.16",
                        title: "Парковка",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c1.17",
                        title: "Прокат автомобилей",
                        type: "checkbox",
                        active: false
                    }
                ],
                col2: [
                    {
                        id: "gr7.c2.1",
                        title: "Магазины на территории",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c2.2",
                        title: "Мини-маркет на территории",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c2.3",
                        title: "Сувенирный магазин",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c2.4",
                        title: "Торговый автомат (напитки)",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c2.5",
                        title: "Услуги по продаже билетов",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c2.6",
                        title: "Экскурсионное бюро",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c2.7",
                        title: "Круглосуточная стойка регистрации",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c2.8",
                        title: "Ускоренная регистрация заезда/отъезда",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c2.9",
                        title: "Сейф",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c2.10",
                        title: "Камера хранения",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c2.11",
                        title: "Камера хранения багажа",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c2.12",
                        title: "Запирающиеся шкафчики",
                        type: "checkbox",
                        active: false
                    }
                ],
                col3: [
                    {
                        id: "gr7.c3.1",
                        title: "Доктор",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c3.2",
                        title: "Услуги консьержа",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c3.3",
                        title: "Доставка прессы",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c3.4",
                        title: "Доставка продуктов",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c3.5",
                        title: "Доставка еды и напитков в номер",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c3.6",
                        title: "Упакованные ланчи",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c3.7",
                        title: "Завтрак в номер",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c3.8",
                        title: "Услуги по глажению одежды",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c3.9",
                        title: "Прачечная",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c3.10",
                        title: "Химчистка",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c3.11",
                        title: "Пресс для брюк",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c3.12",
                        title: "Чистка обуви",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c3.13",
                        title: "Лифт",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c3.14",
                        title: "Лифты",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c3.15",
                        title: "Места для курения",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c3.16",
                        title: "Удобства для гостей с огранич. физич. возможн.",
                        type: "checkbox",
                        active: false
                    }
                ],
                colExtra: []
            },{
                groupTitle: "Health & Beauty",
                col1: [
                    {
                        id: "gr8.c1.1",
                        title: "Гидромассажная ванна",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr8.c1.2",
                        title: "Джакузи",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr8.c1.3",
                        title: "Сауна",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr8.c1.4",
                        title: "Парная",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr8.c1.5",
                        title: "Турецкая баня",
                        type: "checkbox",
                        active: false
                    }
                ],
                col2: [
                    {
                        id: "gr8.c2.1",
                        title: "Массаж",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr8.c2.2",
                        title: "Массажный центр",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr8.c2.3",
                        title: "Оздоровительный центр",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr8.c2.4",
                        title: "SPA-центр",
                        type: "checkbox",
                        active: false
                    }
                ],
                col3: [
                    {
                        id: "gr8.c3.1",
                        title: "Парикмахерская",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr8.c3.2",
                        title: "Салон красоты",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr8.c3.3",
                        title: "Парикмахерская/Салон красоты",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr8.c3.4",
                        title: "Солярий",
                        type: "checkbox",
                        active: false
                    }
                ],
                colExtra: []
            },{
                groupTitle: "Entertainment",
                col1: [
                    {
                        id: "gr9.c1.1",
                        title: "Анимация",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr9.c1.2",
                        title: "Анимационный персонал",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr9.c1.3",
                        title: "Караоке",
                        type: "checkbox",
                        active: false
                    }
                ],
                col2: [
                    {
                        id: "gr9.c2.1",
                        title: "Дневные развлекательные программы",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr9.c2.2",
                        title: "Вечерняя программа",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr9.c2.3",
                        title: "Ночной клуб/Диджей",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr9.c2.4",
                        title: "Дискотека",
                        type: "checkbox",
                        active: false
                    }
                ],
                col3: [
                    {
                        id: "gr9.c3.1",
                        title: "Библиотека",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr9.c3.2",
                        title: "Кинотеатр",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr9.c3.3",
                        title: "Амфитеатр",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr9.c3.4",
                        title: "Пикник на завтрак при раннем отъезде",
                        type: "checkbox",
                        active: false
                    }
                ],
                colExtra: []
            },{
                groupTitle: "Sport",
                col1: [
                    {
                        id: "gr10.c1.1",
                        title: "Теннисных кортов",
                        type: "number",
                        active: ""
                    },
                    {
                        id: "gr10.c1.2",
                        title: "Фитнес-центр",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c1.3",
                        title: "Тренажерный зал",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c1.4",
                        title: "Верховая езда",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c1.5",
                        title: "Велоспорт",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c1.6",
                        title: "Прокат велосипедов",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c1.7",
                        title: "Пешеходные прогулки",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c1.8",
                        title: "Поле для гольфа",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c1.9",
                        title: "Мини-гольф",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c1.10",
                        title: "Мини-футбол",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c1.11",
                        title: "Баскетбольная площадка",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c1.12",
                        title: "Сквош",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c1.13",
                        title: "Теннисный корт",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c1.14",
                        title: "Корт для волейбола",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c1.15",
                        title: "Волейбол",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c1.16",
                        title: "Боулинг",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c1.17",
                        title: "Бильярд",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c1.18",
                        title: "Настольный теннис",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c1.19",
                        title: "Дартс",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c1.20",
                        title: "Спортинвенитарь",
                        type: "checkbox",
                        active: false
                    }
                ],
                col2: [
                    {
                        id: "gr10.c2.1",
                        title: "Водные виды спорта",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c2.2",
                        title: "Оборудование для занятия водными видами спорта",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c2.3",
                        title: "Школа подводного плавания",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c2.4",
                        title: "Дайвинг-центр",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c2.5",
                        title: "Прокат снаряжения для дайвинга",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c2.6",
                        title: "Дайвинг",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c2.7",
                        title: "Ныряние с маской и трубкой",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c2.8",
                        title: "Водный мотоцикл",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c2.9",
                        title: "Каноэ",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c2.10",
                        title: "Катамаран",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c2.11",
                        title: "Водный велосипед",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c2.12",
                        title: "Серфинг",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c2.13",
                        title: "Парусные лодки",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c2.14",
                        title: "Виндсерфинг",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c2.15",
                        title: "Парасейлинг",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c2.16",
                        title: "Бананасейлинг",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c2.17",
                        title: "Водные лыжи",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c2.18",
                        title: "Рыбная ловля",
                        type: "checkbox",
                        active: false
                    }
                ],
                col3: [
                    {
                        id: "gr10.c3.1",
                        title: "Бесплатный трансфер до горных спусков",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c3.2",
                        title: "Бесплатный трансфер на лыжные спуски",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c3.3",
                        title: "Бесплатное хранилище для лыж",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c3.4",
                        title: "Камера хранения горнолыжного/сноуборд снаряжения",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c3.5",
                        title: "Катание на лыжах",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c3.6",
                        title: "Лыжная школа",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c3.7",
                        title: "Лыжный инструктор",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c3.8",
                        title: "Прокат лыжного снаряжения",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c3.9",
                        title: "Продажа горнолыжного абонемента",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c3.10",
                        title: "Доступ на лыжах к отелю",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c3.11",
                        title: "Катание на снегоходах",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c3.12",
                        title: "Экстремальное вождение на льду",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c3.13",
                        title: "Катание на собачьих упряжках",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c3.14",
                        title: "Скибайк",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c3.15",
                        title: "Подлёдное погружение",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c3.16",
                        title: "Альпинизм",
                        type: "checkbox",
                        active: false
                    }
                ],
                colExtra: []
            }
        ];
    };
}]);