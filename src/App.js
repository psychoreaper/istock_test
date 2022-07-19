import './App.css';
import Card from "./components/Card";

function App() {
    const cards1 = [
        {
            title: "ГОСТ Р ИСО 7046-2-2013",
            text: "Гайка шестигранная самостопорящаяся цельнометаллическая тип 2 ГОСТ Р 50272-92",
            able: true,
            standards: 10,
            link: "https://example.com/hjklhjh"
        },
        {
            title: "ТУ 38-1011331-90",
            text: "Болт с шестигранной уменьшенной головкой с фланцем тип U с нормальным стержнем с резьбой до головки ГОСТ Р ИСО 15072-2013",
            able: false,
            standards: 20000,
            link: "https://example.com/hjklhjh"
        },
    ];

    const cards2 = [
        {
            title: "СТО 00220227-006-2010",
            text: "Винт с полупотайной головкой и крестообразным шлицем типа H с резьбой до головки ГОСТ Р ИСО 7047-2013",
            able: true,
            standards: 10,
            link: "https://example.com/hjklhjh"
        },
        {
            title: "это название было таким длинным, что не влезло в одну строчку, и пришлось его сократить",
            text: "Фланцы арматуры, соединительных частей и трубопроводов на номинальное давление до PN 250",
            able: false,
            standards: 20000,
            link: "https://example.com/hjklhjh"
        },
    ];

    return (
        <div className="App">
            <h2>Заголовок подраздела</h2>
            <div className="container">
                {cards1.map(i => <Card title={i.title} text={i.text} able={i.able} standards={i.standards}
                                       link={i.link}/>)}
            </div>
            <h2>Заголовок подраздела</h2>
            <div className="container">
                {cards2.map(i => <Card title={i.title} text={i.text} able={i.able} standards={i.standards}
                                       link={i.link}/>)}
            </div>
        </div>
    );
}

export default App;
