
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/redLogoFox.png';

const PrivacyPolicy = () => {
  const { t } = useTranslation();
	const navigate = useNavigate();
  return (
   <div className='privacy d-flex pt-3 pb-3'>
		<div className='container'>
      <div className='row'>
			<div className='col-lg-6 col-md-6 col-12 d-flex flex-column flex-lg-row align-items-start g-2'>
        <img className='logo' src={logo} alt='logo' />
			</div>
      <div className='col-lg-6 col-md-6 col-12 d-flex flex-column flex-lg-row align-items-end g-2'>
				<button type='button'
            className='col-lg-3 col-12 fw-bold text-white fs-5 py-2'
						onClick={() => navigate('/')}>
              {t('privacy.backButton')}
          </button>
			</div>
		</div>
		<div className='row'>
			<div className='text col-lg-6 col-md-6 col-12 d-flex flex-lg-row align-items-center g-2'>
        <h1>{t('privacy.h1')}</h1>
				<h2>{t('privacy.h21')}</h2>
				<p>{t('privacy.p11')}</p>
				<p>{t('privacy.p12')}</p>
				<p>{t('privacy.p13')}</p>
				<h2>{t('privacy.h22')}</h2>
				<p>{t('privacy.p21')}</p>
				<p>{t('privacy.p22')}</p>
				<ul>
					<li>{t('privacy.p221')}</li>
					<li>{t('privacy.p222')}</li>
					<li>{t('privacy.p223')}</li>
					<li>{t('privacy.p224')}</li>
					<li>{t('privacy.p225')}</li>
					<li>{t('privacy.p226')}</li>
				</ul>
				<h2>{t('privacy.h23')}</h2>
				<p>{t('privacy.p31')}</p>
				<ul>
					<li>{t('privacy.p311')}</li>
					<li>{t('privacy.p312')}</li>
					<li>{t('privacy.p313')}</li>
					<li>{t('privacy.p314')}</li>
				</ul>
				<h2>{t('privacy.h24')}</h2>
				<p>{t('privacy.p41')}</p>
				<p>{t('privacy.p42')}</p>
				<p>{t('privacy.p43')}</p>
				<h2>{t('privacy.h25')}</h2>
				<p>{t('privacy.p51')}</p>
				<p>{t('privacy.p52')}</p>
				<h2>{t('privacy.h26')}</h2>
				<p>{t('privacy.p61')}</p>
				<h2>{t('privacy.h27')}</h2>
				<p>{t('privacy.p7')}</p>
			</div>
		</div>
	 </div>
	</div>
		
  )
 };

export default PrivacyPolicy;