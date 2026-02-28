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
    <section>
      <div className='containerTwo'>
        <h2 className='fw-bold fs-3'>{t('services.title')}</h2>
        <div className='row'>
          <div className='col-12 col-md-6 col-lg-4'>
            <div className='card'>
              <img src={oneBanner} alt='Banner' />
              <h1></h1>
            </div>
          </div>
        <div className='col-12 col-md-6 col-lg-4'>
          <div className='card'>
            <img src={twoSignboard} alt='Signboard' />
            <h1></h1>
          </div>
        </div>
        <div className='col-12 col-md-6 col-lg-4'>
          <div className='card'>
            <img src={threeAvto} alt='Avto' />
            <h1></h1>
          </div>
        </div>
      </div>
      <div className='row'>
          <div className='col-12 col-md-6 col-lg-4'>
            <div className='card'>
              <img src={fourRetail} alt='Retail' />
              <h1></h1>
            </div>
          </div>
        <div className='col-12 col-md-6 col-lg-4'>
          <div className='card'>
            <img> </img>
            <h1></h1>
          </div>
        </div>
        <div className='col-12 col-md-6 col-lg-4'>
          <div className='card'>
            <img> </img>
            <h1></h1>
          </div>
        </div>
      </div>
      <div className='row'>
          <div className='col-12 col-md-6 col-lg-4'>
            <div className='card'>
              <img> </img>
              <h1></h1>
            </div>
          </div>
        <div className='col-12 col-md-6 col-lg-4'>
          <div className='card'>
            <img> </img>
            <h1></h1>
          </div>
        </div>
        <div className='col-12 col-md-6 col-lg-4'>
          <div className='card'>
            <img> </img>
            <h1></h1>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}