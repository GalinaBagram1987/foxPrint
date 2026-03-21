import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';


const Footer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className='footer bg-black d-flex align-items-center justify-content-between'>
      <div className='container'>
        <div className='row'>
          <button type='button'
            className='col-lg-4 col-12 fw-bold text-white fs-5 py-2'
              onClick={() => navigate('/privacy')}>
              {t('footer.privacyButton')}
          </button>
          <p className='col-lg-4 col-12 fw-bold text-white fs-5 py-2'>{t('footer.year')}</p>
          <p className='col-lg-4 col-12 fw-bold text-white fs-5 py-2'>{t('footer.city')}</p>
        </div>
      </div>
    </div>
  )
}

export default Footer