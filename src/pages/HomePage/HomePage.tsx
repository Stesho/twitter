import React from 'react';
import { PageWrapper } from '@/components/PageWrapper/PageWrapper';
import {NewTweet} from "@/components/ui/NewTweet/NewTweet";

export const HomePage = () => (
    <PageWrapper>
      <NewTweet onTweet={() => {}} />
    </PageWrapper>
  );
