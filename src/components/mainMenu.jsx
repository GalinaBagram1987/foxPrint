import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const navBar = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState('home');

  const sections = [
    {id: 'aboutUs', label: t('header.menuOne')},
    {id: 'services', label: t('header.menuTwo')},
    {id: 'portfolio', label: t('header.menuThree')},
    {id: 'contacts', label: t('header.menuFour')},
  ]
  // Отслеживание скролла
  // 👇 1. Обработчик СКРОЛЛА (автоопределение активной секции)
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
  }, []);

  const handleClick = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',// плавная прокрутка
      block: 'center', 
    });
  };

  return(
   
  )


};
export default navBar;
