import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    margin: 30px 0px;
    gap: 20px;
`
// const Hr = styled.hr`
//     border: .5px solid ${({theme})=>theme.soft};
//     margin: 15px 0px;
// `
const Avatar = styled.img`
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color: red;
`
const Details =styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: ${({theme})=>theme.text};
`
const Name = styled.span`
    font-size: 13px;
    font-weight: 500;
`
const Date = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({theme})=>theme.text};
    margin-left: 5px;
`
const Text = styled.span`
    font-size: 14px;
`

const Comment = () => {
  return (
    <Container>
      <Avatar src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg" />
      <Details>
        <Name>John Doe <Date>1 day ago</Date></Name>
        <Text> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis laudantium qui, mollitia ex ea ipsam eos quibusdam cum earum ducimus. </Text>
      </Details>
    </Container>
  )
}

export default Comment
