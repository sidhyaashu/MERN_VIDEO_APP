import styled from 'styled-components'
import Comment from './Comment'




const Container = styled.div`

`
const NewComment = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`
const Avatar = styled.img`
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color: red;
`

const Input = styled.input`
    padding: 5px 10px;
    width: 70%;
    outline: none;
    border: none;
    border-radius: 3px;
    border-bottom: 1px solid ${({theme})=>theme.soft};
    background-color: transparent;
    color: ${({theme})=>theme.text};
`

const Hr = styled.hr`
    border: .5px solid ${({theme})=>theme.soft};
    margin: 15px 0px;
`



const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg" />
        <Input placeholder='Enter some comments...'/>
      </NewComment>
      <Hr/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
    </Container>
  )
}

export default Comments
