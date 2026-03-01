import { useTranslation } from 'react-i18next';

const Contacts = () => {
  const { t } = useTranslation();
  return (
    <div className='contacts py-5'>
      <div className='container'>
        <p className='fw-bold fs-3'>{t('contacts.title')}</p>
        <div className='row'>
          <div className='right col-lg-6 col-12'>
            <p className='fw-bold fs-3 text-decoration-underline'>{t('contacts.managerOneName')}</p>
            <p className='fw-bold fs-3 text-decoration-underline'>{t('contacts.managerOneTel')}</p>
            <p className='fw-bold fs-3 text-decoration-underline'>{t('contacts.managerOneEmail')}</p>
          </div>
          <div className='left col-lg-6 col-12'>
            <p className='fw-bold fs-3 text-decoration-underline'>{t('contacts.managerTwoName')}</p>
            <p className='fw-bold fs-3 text-decoration-underline'>{t('contacts.managerTwoTel')}</p>
            <p className='fw-bold fs-3 text-decoration-underline'>{t('contacts.managerTwoEmail')}</p>
          </div>
          <p className='col-12 fw-bold fs-3 text-decoration-underline'>{t('contacts.adress')}</p>
        </div>
      </div>
    </div>
  )

}

export default Contacts