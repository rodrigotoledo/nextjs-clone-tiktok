import { Container, IconsContainer, Icon, BoxContainer, ButtonContainer, BoxHeader, ItemContainer, Item, ArrowIcon, DownloadsContainer} from './styles';
import User from '../User';
import Button from '../Button';
import RecommendedCard from '../RecommendedCard';


function Suggestions({suggestions}){
  return (
    <Container>
      <IconsContainer>
          <Icon src="/images/facebookIcon.svg" />
          <Icon src="/images/pinterestIcon.svg" />
          <Icon src="/images/twitterIcon.svg" />
      </IconsContainer>
      <BoxContainer>
        <BoxHeader><span>Contas Sugeridas</span></BoxHeader>
        <ItemContainer>
          {suggestions.people.map((person, index) => (
            <Item key={index}>
              <User  user={person}></User>
              <ButtonContainer>
                <Button fontSize={14} outlined>
                  Seguir
                </Button>
              </ButtonContainer>
            </Item>
          ))}
        </ItemContainer>
      </BoxContainer>
      <BoxContainer>
        <BoxHeader><span>Descobrir</span></BoxHeader>
        <ItemContainer>
          {suggestions.recommendations.map((recommended, index) => (
            <Item key={index}>
              <RecommendedCard recommended={recommended} />
              <ArrowIcon />
            </Item>
          ))}
        </ItemContainer>
      </BoxContainer>
      <DownloadsContainer>
        <img src="/images/appstore.png" />
        <img src="/images/playstore.png" />
        <img src="/images/amazon.png" />
      </DownloadsContainer>
    </Container>
  )
};
export default Suggestions;