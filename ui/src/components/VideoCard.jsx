import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { format } from "timeago.js";
import axios from "axios"
import { useEffect, useState } from "react";

const Container = styled.div`
  width: ${(props) => (props.type === "sm" ? "320px" : "390px")};
  cursor: pointer;
  margin-bottom: ${(props) => (props.type === "sm" ? "8px" : "13px ")};
  border: 1px solid white;
  border-radius: 3px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.text};
  display: ${(props) => props.type === "sm" && "flex"};
`;

const Image = styled.img`
  /* width: ${(props) => (props.type === "sm" ? "60%" : "100%")}; */
  width: 100%;
  flex: 1;
  object-fit: cover;
  height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
  background-color: #999;
`;

const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
  padding: 0px 7px 7px 7px;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const VideoCard = ({ type, video }) => {
  const [channel, setChannel] = useState({});
  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`http://localhost:8800/api/users/find/${video.userId}`);
      setChannel(res.data);
    };
    fetchVideos();
  }, [video.userId]);
  return (
    <NavLink style={{ textDecoration: "none" }} to="video/test">
      <Container type={type}>
        <Image type={type} src={video?.imgUrl} />
        <Details type={type}>
          <ChannelImage type={type} src={channel?.img} />
          <Texts>
            <Title>{video?.title}</Title>
            <ChannelName>{channel?.name}</ChannelName>
            <Info>
              {video?.views} views <small>{format(video?.createdAt)}</small>{" "}
            </Info>
          </Texts>
        </Details>
      </Container>
    </NavLink>
  );
};

export default VideoCard;
