import { Container, Content, LogoContainer, LogoIcon, Logo, OptionsContainer, Icon, Avatar} from './styles';

function DownloadImage(){
  return (
    <Container>
      <Content>
        <LogoContainer>
          <LogoIcon src="/images/logoIcon.svg" />
          <Logo src="/images/logo.svg" />
        </LogoContainer>
        <OptionsContainer>
          <Icon src="/images/uploadIcon.svg" />
          <Avatar>
            <img alt="avatar" src="/images/avatar.png" />
          </Avatar>
        </OptionsContainer>
      </Content>
    </Container>
    )
}

export default Header;