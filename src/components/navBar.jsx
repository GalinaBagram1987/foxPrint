import { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

const NavBar = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState('home');
  
  const sections = useMemo(() => [
    { id: 'aboutUs', label: t('header.menuOne') },
    { id: 'services', label: t('header.menuTwo') },
    { id: 'portfolio', label: t('header.menuThree') },
    { id: 'contacts', label: t('header.menuFour') },
  ], [t]); // запоминаем и меняем только если язык меняется

  //листаем и секция будет активной в меню
  useEffect(() => {
    const handleScroll = () => {
      for (let i = 0; i < sections.length; i += 1) {
        const section = sections[i];
        const element = document.getElementById(section.id);
        
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // сразу проверить при загрузке
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections])

  const handleClick = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',// плавная прокрутка
      block: 'center', 
    });
  };

  return(
   <nav className="navbar navbar-expand-lg navbar-dark">
    {/* Кнопка-гамбургер */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    {/* Меню */}
    <div className="collapse navbar-collapse px-10header" id="navbarNav">
      <ul className="navbar-nav d-flex align-items-center justify-content-between w-100">
      {sections.map((item) => (
        <li className="nav-item" key={item.id}>
          <button
            className={`nav-link btn btn-link fw-bolder fs-4 ${
              activeSection === item.id ? 'active-menu' : 'text-white'
              }`}
              onClick={() => handleClick(item.id)}
              >
              {item.label}
            </button>
          </li>
      ))
      }
    </ul>
  </div>
</nav>
)
};
export default NavBar;
