import {Container, Avatar, Info} from "./styles";

export default function RecommendedCard({recommended}){
  return (
    <Container>
      <Avatar src={recommended.avatar} />
      <Info>
        <a>{recommended.title}</a>
        <span>{recommended.views}</span>
      </Info>
    </Container>
  )
}

