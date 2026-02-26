import 'bootstrap-icons/font/bootstrap-icons.css';
import NavBar from '../components/navBar';
import { useTranslation } from 'react-i18next';
import logo from '../assets/images/redLogoFox.png';


const Header = () => {
	const { t } = useTranslation();
  return (
    <div className='container'>
      {/* Верх хэдера */}
      <div className='footerOne'>
        <div className='row d-flex align-items-center justify-content-between'>
          {/* Первая колонка */}
          <div className='col-lg-4'>
            <div className='d-flex align-items-center justify-content-center gap-2'>
              <img className='logo-img' src={logo} alt='logo' />
					    <h1 className='fs-5 mb-0 fw-bold text-start' style={{ whiteSpace: 'pre-line' }}>{t('header.companyName')}</h1>
            </div>
          </div>
          {/* Вторая колонка */}
				  <div className='col-lg-4'>
            <div className='d-flex align-items-center gap-2'>
					    <i className='bi bi-building fs-5 '></i>
					    <span className='fs-5 mb-0'>{t('header.adress')}</span>
            </div>
				  </div>
          {/* Третья колонка */}
				  <div className='col-lg-4 d-flex flex-column'>
					  <div>
						  <i className='bi bi-telephone fs-6'></i>
						  <span className='fs-6'>  {t('header.phoneOne')}</span>
					  </div>
					  <div>
						  <i className='bi bi-telephone fs-6'></i>
						  <span className='fs-6'>  {t('header.phoneTwo')}</span>
					  </div>
				  </div>
          </div>
        </div>
      {/* Низ хэдера */}
      <div className='headerTwo'>
        <div className='row'>
				  <div className='col-lg-12 bottomPart bg-black'>
					  <NavBar />
				  </div>
			  </div>
      </div>
			
    </div>
  )
};

export default Header