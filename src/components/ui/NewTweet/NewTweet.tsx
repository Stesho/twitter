import React from "react";
import MediaImg from "@/assets/images/media.png";
import DefaultAvatar from "@/assets/images/default_avatar.png";
import { Button } from "@/components/ui/Button/Button";
import {
  NewTweetAvatar,
  NewTweetContent,
  NewTweetMedia,
  NewTweetMediaIcon,
  NewTweetTextArea,
  NewTweetWrapper,
} from "@/components/ui/NewTweet/NewTweet.styled";

interface NewTweetProps {
  iconUrl?: string;
}

export const NewTweet = ({ iconUrl }: NewTweetProps) => (
  <NewTweetWrapper>
    <NewTweetAvatar src={iconUrl || DefaultAvatar} alt="avatar" />
    <NewTweetContent>
      <NewTweetTextArea placeholder="What’s happening" />
      <NewTweetMedia>
        <NewTweetMediaIcon src={MediaImg} alt="media" />
        <Button disabled>Tweet</Button>
      </NewTweetMedia>
    </NewTweetContent>
  </NewTweetWrapper>
);
