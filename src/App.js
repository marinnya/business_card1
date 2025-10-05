import './index.css';
import './App.css';
import ModalWindow from './ModalWindow';
import React, { useState, useEffect } from 'react';


const App = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [expandedSkill, setExpandedSkill] = useState(null);

  const handleOpenContactModal = () => setShowContactModal(true);
  const handleCloseContactModal = () => setShowContactModal(false);

  const upButton = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const scrollUp = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollUp);
    return () => window.removeEventListener("scroll", scrollUp);
  }, []);

  const toBlock = (height) => {
    window.scrollTo({ top: height, left: 0, behavior: 'smooth' });
  };

  const toggleSkill = (index) => {
    setExpandedSkill(prev => (prev === index ? null : index));
  };

  const skills = [
    {
      title: "Figma, Photoshop",
      description: "Имею опыт проектирования интерфейсов, макетов сайтов и веб-приложений."
    },
    {
      title: "HTML, CSS, JavaScript",
      description: "Владею базовыми и продвинутыми возможностями HTML5, CSS3 и JavaScript. Опыт адаптивной вёрстки и взаимодействия с DOM."
    },
    {
      title: "React",
      description: "Опыт создания компонентов, управления состоянием с useState/useEffect, маршрутизация с React Router. Работа с REST API."
    },
    {
      title: "Django",
      description: "Разработка серверной части, работа с моделями, формами, ORM. Создание API с использованием Django REST Framework."
    },
    {
      title: "UML-диаграммы",
      description: "Построение диаграмм классов, вариантов использования и последовательностей. Использование StarUML и draw.io для проектирования архитектуры ПО."
    },
    {
      title: "SQL",
      description: "Знание языка SQL, опыт работы с БД PostgreSQL в проектах."
    },
    {
      title: "Linux (Ubuntu)",
      description: "Опыт установки и настройки Linux, работы с терминалом, написания bash-скриптов, настройки серверов и прав доступа."
    },
    {
      title: "Английский язык на уровене B2",
      description: "Владею языком на хорошем уровне - читаю и понимаю техническую документацию."
    }
  ];

  return (
    <div>
      <header>
        <a href="#" className='logo'>
          <img src='/icons/NSolutions.png' alt='NSolutions Logo' />
        </a>

        <div className="menu">
          <a onClick={upButton}>Обо мне</a>
          <a onClick={(e) => toBlock(e.target.getAttribute('height'))} height="700">Что я умею?</a>
        </div>

        <button onClick={handleOpenContactModal} className="btn">Связаться</button>

        <ModalWindow show={showContactModal} onClose={handleCloseContactModal}>
        <h2 style={{ color: "#4824ff", fontSize: "40px" }}>Контакты</h2>
        <p style={{ fontSize: "22px" }}>
          Вы можете связаться со мной в{' '}
          <a 
            href="https://t.me/marinnya" 
            target="_blank" 
            rel="noreferrer" 
            style={{ color: "#4824ff", textDecoration: "underline", cursor: "pointer" }}
          >
            Telegram
          </a>
        </p>
      </ModalWindow>

      </header>

      <div className="welcome-block">
        <div className="first-block">
          <h1>Марина <span className='title'>Неуймина</span></h1>
          <ol className='gurantees-points'>
            <li className="point">
              <h3>
                <span style={{ color: "#4824ff" }}>Студентка </span>
                4 курса ЮУрГУ по специальности "Программная инженерия"
              </h3>
            </li>
            <li className="point">
              <h3><span style={{ color: "#4824ff" }}>Репетитор </span>по информатике</h3>
            </li>
            <li className="point">
              <h3>Начинающий <span style={{ color: "#4824ff" }}>веб-разработчик</span></h3>
            </li>
          </ol>

          <h2>
            Имею опыт написания курсовой работы по теме «Разработка веб-приложения для записи на косметические услуги» на фреймворке Django и создания веб-сайта с использованием React, Node.js (Express). Сейчас пишу диплом (веб-приложение на React+Django).
          </h2>
        </div>

        <div className='main-image-box'>
          <img src='./images/2.jpg' draggable="false" alt="Main" />
        </div>
      </div>

      <div className="service-block">
        <h1>МОИ НАВЫКИ</h1>

        <div className="skills-list">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <button
                className={`skill-title ${expandedSkill === index ? 'active' : ''}`}
                onClick={() => toggleSkill(index)}
              >
                {skill.title}
              </button>
              {expandedSkill === index && (
                <div className="skill-description">{skill.description}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="footer">©2025, Марина Неуймина</div>

      <button className={scroll < 960 ? "" : "btn-up"} onClick={upButton}></button>
    </div>
  );
};

export default App;
