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
  const servicesData = [
    { id: 1, img: oneBanner, alt: 'Banner', key: 'one' },
    { id: 2, img: twoSignboard, alt: 'Signboard', key: 'two' },
    { id: 3, img: threeAvto, alt: 'Avto', key: 'three' },
    { id: 4, img: fourRetail, alt: 'Retail', key: 'four' },
    { id: 5, img: fivePavivlions, alt: 'Pavivlions', key: 'five' },
    { id: 6, img: sixNavigations, alt: 'Navigations', key: 'six' },
    { id: 7, img: sevenPosm, alt: 'Posm', key: 'seven' },
    { id: 8, img: eightFraszer, alt: 'Fraszer', key: 'eight' },
    { id: 9, img: nineLaser, alt: 'Laser', key: 'nine' },
  ];
  return (
    <section className='services'>
      {/* Первая часть (заголовок) */}
      <div className='fistPart bg-home'>
        <div className='containerTwo bg-white'>
          <p className='fw-bold fs-3 py-5 mb-0' style={{ whiteSpace: 'pre-line' }}>{t('services.title')}</p>
        </div>
      </div>
      {/* Вторая часть (услуги) */}
      <div className='secondPart backgrBlock'>
        <div className='containerTwo bg-white'>
          {/* Первый ряд */}
          <div className='row px-4'>
            {servicesData.slice(0, 3).map(service => (
              <div key={service.id} className='col-12 col-md-6 col-lg-4 pb-5'>
                <div className='card shadow'>
                  <img src={service.img} alt={service.alt} />
                  <h1 className='fw-bold fs-3 text-decoration-underline'>
                    {t(`services.${service.key}`)}
                  </h1>
                </div>
              </div>
            ))}
          </div>

          {/* Второй ряд */}
          <div className='row px-4'>
            {servicesData.slice(3, 6).map(service => (
              <div key={service.id} className='col-12 col-md-6 col-lg-4 pb-5'>
                <div className='card shadow'>
                  <img src={service.img} alt={service.alt} />
                  <h1 className='fw-bold fs-3 text-decoration-underline'>
                    {t(`services.${service.key}`)}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Третья часть */}
      <div className='thirdPart bg-home'>
        <div className='containerTwo bg-white'>
          {/* Третий ряд */}
          <div className='row px-4'>
            {servicesData.slice(6, 9).map(service => (
              <div key={service.id} className='col-12 col-md-6 col-lg-4 pb-5'>
                <div className='card shadow'>
                  <img src={service.img} alt={service.alt} />
                  <h1 className='fw-bold fs-3 text-decoration-underline'>
                    {t(`services.${service.key}`)}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Services