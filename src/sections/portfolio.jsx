import { useTranslation } from 'react-i18next';
import oneOne from '../assets/images/portfolio/oneOne.jpg';
import oneTwo from '../assets/images/portfolio/oneTwo.jpg';
import oneThree from '../assets/images/portfolio/oneThree.jpg';
import oneFour from '../assets/images/portfolio/oneFour.jpg';
import oneFive from '../assets/images/portfolio/oneFive.jpg';
import oneSix from '../assets/images/portfolio/oneSix.jpg';
import oneSeven from '../assets/images/portfolio/oneSeven.jpg';
import oneEight from '../assets/images/portfolio/oneEight.jpg';
import oneNine from '../assets/images/portfolio/oneNine.jpg';
import oneTen from '../assets/images/portfolio/oneTen.jpg';
import twoOne from '../assets/images/portfolio/twoOne.jpg';
import twoTwo from '../assets/images/portfolio/twoTwo.jpg';
import twoThree from '../assets/images/portfolio/twoThree.jpg';
import twoFour from '../assets/images/portfolio/twoFour.jpg';
import twoFive from '../assets/images/portfolio/twoFive.jpg';
import twoSix from '../assets/images/portfolio/twoSix.jpg';
import twoSeven from '../assets/images/portfolio/twoSeven.jpg';
import twoEight from '../assets/images/portfolio/twoEight.jpg';
import twoNine from '../assets/images/portfolio/twoNine.jpg';
import twoTen from '../assets/images/portfolio/twoTen.jpg';
import threeOne from '../assets/images/portfolio/threeOne.jpg';


const Portfolio = () => {
  const { t } = useTranslation();
  const carouselImages = [
    { id: 1, src: oneOne, alt: 'oneOnePortfolio', key: 'oneOne', active: true },
    { id: 2, src: oneTwo, alt: 'oneTwoPortfolio', key: 'oneTwo', active: false },
    { id: 3, src: oneThree, alt: 'oneThreePortfolio', key: 'oneThree', active: false },
    { id: 4, src: oneFour, alt: 'oneFourPortfolio', key: 'oneFour', active: false },
    { id: 5, src: oneFive, alt: 'oneFivePortfolio', key: 'oneFive', active: false },
    { id: 6, src: oneSix, alt: 'oneSixPortfolio', key: 'oneSix', active: false },
    { id: 7, src: oneSeven, alt: 'oneSevenPortfolio', key: 'oneSeven', active: false },
    { id: 8, src: oneEight, alt: 'oneEightPortfolio', key: 'oneEight', active: false },
    { id: 9, src: oneNine, alt: 'oneNinePortfolio', key: 'oneNine', active: false },
    { id: 10, src: oneTen, alt: 'oneTenPortfolio', key: 'oneTen', active: false },
    { id: 11, src: twoOne, alt: 'twoOnePortfolio', key: 'twoOne', active: false },
    { id: 12, src: twoTwo, alt: 'twoTwoPortfolio', key: 'twoTwo', active: false },
    { id: 13, src: twoThree, alt: 'twoThreePortfolio', key: 'twoThree', active: false },
    { id: 14, src: twoFour, alt: 'twoFourPortfolio', key: 'twoFour', active: false },
    { id: 15, src: twoFive, alt: 'twoFivePortfolio', key: 'twoFive', active: false },
    { id: 16, src: twoSix, alt: 'twoSixPortfolio', key: 'twoSix', active: false },
    { id: 17, src: twoSeven, alt: 'twoSevenPortfolio', key: 'twoSeven', active: false },
    { id: 18, src: twoEight, alt: 'twoEightPortfolio', key: 'twoEight', active: false },
    { id: 19, src: twoNine, alt: 'twoNinePortfolio', key: 'twoNine', active: false },
    { id: 20, src: twoTen, alt: 'twoTenPortfolio', key: 'twoTen', active: false },
    { id: 21, src: threeOne, alt: 'threeOnePortfolio', key: 'threeOne', active: false },
  ]

  return (
    <div className='portfolio bg-home d-flex align-items-center'>
			<div className="containerTwo">
				<p className='fw-bold fs-3'>{t('portfolio.title')}</p>
        <div id="portfolioCarousel" className="carousel slide" data-bs-ride="carousel">
      
      {/* Индикаторы */}
      <div className="carousel-indicators">
        {carouselImages.map((image, index) => (
          <button
            key={image.id}
            type="button"
            data-bs-target="#portfolioCarousel"
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
            aria-current={index === 0 ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Слайды */}
      <div className="carousel-inner">
        {carouselImages.map((image, index) => (
          <div
            key={image.id}
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
          >
            <img 
              src={image.src} 
              className="d-block w-100" 
              alt={image.alt}
              loading="lazy" // для оптимизации
            />
          </div>
        ))}
      </div>

      {/* Кнопки управления */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#portfolioCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Предыдущий</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#portfolioCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Следующий</span>
      </button>
    </div>
	</div>
	</div>  
  )
}

export default Portfolio