import 'bootstrap-icons/font/bootstrap-icons.css';
import NavBar from '../components/navBar';
import { useTranslation } from 'react-i18next';
import logo from '../assets/images/redLogoFox.png';


const Header = () => {
  const { t } = useTranslation();
  return (
    <section className='header w-100'>
      {/* Верх хэдера */}
      <div className='headerOne d-flex pt-3 pb-3'>
        <div className='container'>
        <div className='row d-flex flex-column flex-lg-row align-items-center g-2'>
          {/* Первая колонка */}
          <div className='col-12 col-lg-4 d-flex align-items-center justify-content-center justify-content-lg-start gap-2'>
              <img className='logo' src={logo} alt='logo' />
					    <h1 className='fs-5 mb-0 fw-bold text-start' style={{ whiteSpace: 'pre-line' }}>{t('header.companyName')}</h1>
            </div>
        {/* Вторая колонка */}
				   <div className='col-12 col-lg-4 d-flex align-items-center justify-content-center justify-content-lg-start gap-1 d-none d-lg-block'>
					    {/*<i className='bi bi-building fs-5 '></i>*/}
					    <p className='fs-5 mb-0'>{t('header.adress')}</p>
				  </div>
          {/* Третья колонка */}
				  <div className='col-12 col-lg-4 d-flex flex-column align-items-center align-items-lg-end'>
					  <div>
						  <i className='bi bi-telephone fs-6'></i>
						  <span className='fs-6 fw-bold'>  {t('header.phoneOne')}</span>
					  </div>
					  <div>
						  <i className='bi bi-telephone fs-6'></i>
						  <span className='fs-6 fw-bold'>  {t('header.phoneTwo')}</span>
					  </div>
				  </div>
          </div>
        </div>
        </div>
      {/* Низ хэдера */}
      <div className='headerTwo bg-black'>
        <div className='container'>
				  <div className='col-lg-12 bottomPart'>
					  <NavBar />
				  </div>
			  </div>
      </div>
			</section>
  )
};

export default Header