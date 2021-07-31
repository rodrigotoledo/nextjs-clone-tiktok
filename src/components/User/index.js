import {Container, Avatar, Info} from "./styles";

export default function User({user}){
  return (
    <Container>
      <Avatar></Avatar>
      <Info>
        <a>{user.name}</a>
        <span>{user.username}</span>
      </Info>
    </Container>
  )
}

