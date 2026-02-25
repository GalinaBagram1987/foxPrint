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
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
     <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      {sections.map((item) => (
        <li className="nav-item" key={item.id}>
          <button
            className={`nav-link btn btn-link ${
              activeSection === item.id ? 'active' : ''
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
