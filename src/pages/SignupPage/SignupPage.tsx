import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import SignupBackground from '@/assets/images/signup_background.jpg';
import TwitterIcon from '@/assets/images/twitter_logo.png';
import GoogleIcon from '@/assets/images/google_icon.png';
import {
  BgImg,
  Content,
  EmailSignUpButton,
  Footer,
  GoogleLogo,
  GoogleSignUpButton,
  Join,
  SubTitle,
  TermsOfUse,
  Title,
  ToLogIn,
  TwitterLogo,
} from './SignupPage.styled';
import { NavigateLink } from '@/components/ui/NavigateLink/NavigateLink';
import { ROUTES } from '@/constants/routes';
import { FOOTER_LINKS } from '@/constants/footerLinks';
import { signupWithGoogle } from '@/services/user/signupWithGoogle';

export const SignupPage = () => {
  const navigate = useNavigate();

  const googleSignup = async () => {
    const res = await signupWithGoogle();
    if (res) {
      navigate(ROUTES.profile.path);
    }
  };

  return (
    <div>
      <Content>
        <BgImg src={SignupBackground} alt='background' />
        <Join>
          <TwitterLogo src={TwitterIcon} alt='twitter logo' />
          <Title>Happening now</Title>
          <SubTitle>Join Twitter today</SubTitle>
          <GoogleSignUpButton onClick={googleSignup}>
            <GoogleLogo src={GoogleIcon} alt='google' />
            <span>Sign up with Google</span>
          </GoogleSignUpButton>
          <NavLink to={ROUTES.signupEmail.path}>
            <EmailSignUpButton>Sign up with email</EmailSignUpButton>
          </NavLink>
          <TermsOfUse>
            By singing up you agree to the{' '}
            <NavigateLink to={ROUTES.home.path}>Terms of Service</NavigateLink>{' '}
            and{' '}
            <NavigateLink to={ROUTES.home.path}>Privacy Policy</NavigateLink>,
            including{' '}
            <NavigateLink to={ROUTES.home.path}>Cookie Use</NavigateLink>.
          </TermsOfUse>
          <ToLogIn>
            Already have an account?{' '}
            <NavigateLink to={ROUTES.login.path}>Log in</NavigateLink>
          </ToLogIn>
        </Join>
      </Content>
      <Footer>
        {FOOTER_LINKS.map(({ text, link }) => (
          <a key={text} href={link}>
            {text}
          </a>
        ))}
      </Footer>
    </div>
  );
};
