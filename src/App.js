import './App.css';
import Card from "./components/Card.tsx";

import avatar from "./img/avatar.jpg";
import avatar2 from "./img/bhar_kar.png";
import avatar3 from "./img/bolt.png";
import avatar4 from "./img/PARTY.png";
import avatar5 from "./img/quovadis_00.png";
import avatar6 from "./img/stromae_dance.png";
import avatar7 from "./img/long.png";

function App() {
    const cards1 = [
        {
            title: "ГОСТ Р ИСО 7046-2-2013",
            text: "Гайка шестигранная самостопорящаяся цельнометаллическая тип 2 ГОСТ Р 50272-92... а вообще здесь безобразно много текста, надо бы проверить, как он влезает в это дело. Мне кажется, влезает не очень красиво, но сейчас мы это поправим. Ла-ла-ла. Много, много, много текста. Очень много, ахахахахаха. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            able: true,
            standards: 10,
            link: "https://example.com/hjklhjh",
            images: [avatar]
        },
        {
            title: "ТУ 38-1011331-90",
            text: "Болт с шестигранной уменьшенной головкой с фланцем тип U с нормальным стержнем с резьбой до головки ГОСТ Р ИСО 15072-2013",
            able: false,
            standards: 20000,
            link: "https://example.com/hjklhjh",
            images: [avatar, avatar2, avatar3, avatar4, avatar5, avatar6]
        },
    ];

    const cards2 = [
        {
            title: "СТО 00220227-006-2010",
            text: "Винт с полупотайной головкой и крестообразным шлицем типа H с резьбой до головки ГОСТ Р ИСО 7047-2013",
            able: true,
            standards: 10,
            link: "https://example.com/hjklhjh",
            images: [avatar, avatar7]
        },
        {
            title: "это название было таким длинным, что не влезло в одну строчку, и пришлось его сократить",
            text: "Фланцы арматуры, соединительных частей и трубопроводов на номинальное давление до PN 250",
            able: false,
            standards: 20000,
            link: "https://example.com/hjklhjh",
            images: [avatar]
        },
    ];

    return (
        <div className="App">
            <h2>Заголовок подраздела</h2>
            <div className="container">
                {cards1.map(i => <Card title={i.title} text={i.text} able={i.able} standards={i.standards}
                                       link={i.link} images={i.images}/>)}
            </div>
            <h2>Заголовок подраздела</h2>
            <div className="container">
                {cards2.map(i => <Card title={i.title} text={i.text} able={i.able} standards={i.standards}
                                       link={i.link} images={i.images}/>)}
            </div>
        </div>
    );
}

export default App;
