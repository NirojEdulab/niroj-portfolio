import styles from './HeroStyles.module.css';
import HeroImage from '../../assets/hero-image.png';
import sunIcon from '../../assets/sun.svg';
import moonIcon from '../../assets/moon.svg';
import linkedInDarkIcon from '../../assets/linkedin-dark.svg'
import linkedInLightIcon from '../../assets/linkedin-light.svg'
import githubDarkIcon from '../../assets/github-dark.svg'
import githubLightIcon from '../../assets/github-light.svg'
import { useTheme } from '../../common/ThemeContext';

const Hero = () => {

  const {theme, toggleTheme} = useTheme();

  const themeIcon = theme === 'dark' ? sunIcon : moonIcon;
  const linkedInIcon = theme === 'dark' ? linkedInLightIcon : linkedInDarkIcon;
  const githubIcon = theme === 'dark' ? githubLightIcon : githubDarkIcon;

  return (
    <section id='hero' className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={HeroImage} alt="Profile Picture of Niroj"/>
        <img className={styles.colorMode} src={themeIcon} alt="Color mode change icon" onClick={toggleTheme} />
      </div>
      <div className={styles.info}>
        <h1>
            Niroj Kumar Basa
        </h1>
        <h2>Full Stack Developer</h2>
        <span>
          <a href="https://www.linkedin.com/" target='_blank'>
            <img src={linkedInIcon} alt="LinkedIn Icon" width={75} height={75}/>
          </a>
          <a href="https://github.com/" target='_blank'>
            <img src={githubIcon} alt="Github Icon" width={75} height={75}/>
          </a>
        </span>
        <p className={styles.description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum debitis sed dolore beatae minus tempora amet nam illo facere blanditiis!</p>
        <button>Resume</button>
      </div>
    </section>
  )
}

export default Hero
