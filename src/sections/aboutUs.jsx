import { useTranslation } from 'react-i18next';

const AboutUs = () => {
	const { t } = useTranslation();
  return (
		<div className='aboutUs bg-home d-flex flex-column align-items-center'>
			<div className="containerTwo">
				<p className='fw-bold fs-3'>{t('aboutUs.title')}</p>
        <p className='fs-4'>{t('aboutUs.textParOne')}</p>
				<p className='fs-4'>{t('aboutUs.textParTwo')}</p>
				<p className='fs-4'>{t('aboutUs.textParThree')}</p>
				<p className='fs-4'>{t('aboutUs.textParFour')}</p>
			</div>
		</div>
	)
}

export default AboutUs