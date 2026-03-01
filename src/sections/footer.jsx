import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
return (
  <div className='footer bg-black d-flex align-items-center justify-content-between'>
    <div className='container'>
      <div className='row'>
        <p className='col-lg-4 col-12 fw-bold text-white fs-5 py-2'>{t('footer.rights')}</p>
        <p className='col-lg-4 col-12 fw-bold text-white fs-5 py-2'>{t('footer.year')}</p>
        <p className='col-lg-4 col-12 fw-bold text-white fs-5 py-2'>{t('footer.city')}</p>
      </div>
    </div>
  </div>
)
}

export default Footer