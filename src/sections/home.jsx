import { useTranslation } from 'react-i18next';
import home from '../assets/images/home.png';


const Home = () => {
  const { t } = useTranslation();
  return (
    <div className='container bg-home'>
      <div className='home'>
				<div className='row d-flex align-items-center justify-content-between'>
					<div className='col-lg-6 quote'>
						<p className='fs-1'> {t('home.quote')}</p>
						<p className='fs-5'>
							<span className='fw-bold'> {t('home.authorName')}</span>
						{t('home.authorWork')}</p>
					</div>
					<img className='homeImg col-lg-6' src={home} alt='home Image' />
			 </div>
			</div>
    </div>
  )
}

export default Home