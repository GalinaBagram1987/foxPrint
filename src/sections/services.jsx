import { useTranslation } from 'react-i18next';
import oneBanner from '../assets/images/oneBanner.png';
import twoSignboard from '../assets/images/twoSignboard.png';
import threeAvto from '../assets/images/threeAvto.png';
import fourRetail from '../assets/images/fourRetail.png';
import fivePavivlions from '../assets/images/fivePavivlions.png';
import sixNavigations from '../assets/images/sixNavigations.png';
import sevenPosm from '../assets/images/sevenPosm.png';
import eightFraszer from '../assets/images/eightFraszer.png';
import nineLaser from '../assets/images/nineLaser.png';

const Services = () => {
  const { t } = useTranslation();
  return (
    <section className='services shadow-lg px-4'>
      <div className='containerTwo'>
        <h2 className='fw-bold fs-3 pb-5'>{t('services.title')}</h2>
        <div className='row'>
          <div className='col-12 col-md-6 col-lg-4 pb-5'>
            <div className='card shadow pl-3'>
              <img src={oneBanner} alt='Banner' />
              <h1 className='fw-bold fs-3 text-decoration-underline'>{t('services.one')}</h1>
            </div>
          </div>
        <div className='col-12 col-md-6 col-lg-4 pb-5'>
          <div className='card shadow'>
            <img src={twoSignboard} alt='Signboard' />
            <h1 className='fw-bold fs-3 text-decoration-underline'>{t('services.two')}</h1>
          </div>
        </div>
        <div className='col-12 col-md-6 col-lg-4 pb-5'>
          <div className='card shadow'>
            <img src={threeAvto} alt='Avto' />
            <h1 className='fw-bold fs-3 text-decoration-underline'>{t('services.three')}</h1>
          </div>
        </div>
      </div>
      <div className='row'>
          <div className='col-12 col-md-6 col-lg-4 pb-5'>
            <div className='card shadow'>
              <img src={fourRetail} alt='Retail' />
              <h1 className='fw-bold fs-3 text-decoration-underline'>{t('services.four')}</h1>
            </div>
          </div>
        <div className='col-12 col-md-6 col-lg-4 pb-5'>
          <div className='card shadow'>
            <img src={fivePavivlions} alt='Pavivlions' />
            <h1 className='fw-bold fs-3 text-decoration-underline'>{t('services.five')}</h1>
          </div>
        </div>
        <div className='col-12 col-md-6 col-lg-4 pb-5'>
          <div className='card shadow'>
            <img src={sixNavigations} alt='Navigations' />
            <h1 className='fw-bold fs-3 text-decoration-underline'>{t('services.six')}</h1>
          </div>
        </div>
      </div>
      <div className='row'>
          <div className='col-12 col-md-6 col-lg-4 pb-5'>
            <div className='card shadow'>
              <img src={sevenPosm} alt='Posm' />
              <h1 className='fw-bold fs-3 text-decoration-underline'>{t('services.seven')}</h1>
            </div>
          </div>
        <div className='col-12 col-md-6 col-lg-4 pb-5'>
          <div className='card shadow'>
            <img src={eightFraszer} alt='Fraszer' />
            <h1 className='fw-bold fs-3 text-decoration-underline'>{t('services.eight')}</h1>
          </div>
        </div>
        <div className='col-12 col-md-6 col-lg-4 pb-5'>
          <div className='card shadow'>
            <img src={nineLaser} alt='Laser' />
            <h1 className='fw-bold fs-3 text-decoration-underline'>{t('services.nine')}</h1>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}
export default Services