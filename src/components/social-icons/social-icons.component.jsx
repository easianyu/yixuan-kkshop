import { Link } from 'react-router-dom';
import { GithubIcon } from './social-icons.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { SocialIconsContainer, IconLink } from './social-icons.styles';
const SocianIcons = () => {
  return (
    <SocialIconsContainer>
      <IconLink href='#'>
        {/*  target='_blank' */}
        <FontAwesomeIcon icon={faAddressCard} />
      </IconLink>
      <IconLink href='https://github.com/IceCoffee98/crwn-clothing'>
        <FontAwesomeIcon icon={faGithub} />
      </IconLink>
      <IconLink href='https://www.linkedin.com/in/easian-yu/'>
        <FontAwesomeIcon icon={faLinkedin} />
      </IconLink>
    </SocialIconsContainer>
  );
};

export default SocianIcons;
