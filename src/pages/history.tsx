import * as React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { Header } from "../components/header";
import { getMemos, MemoRecord } from "../indexeddb/memos";

const { useState, useEffect } = React;

const HeaderArea = styled.div`
  postion: fixed;
  right: 0;
  top: 0;
  left: 0;
`;

const Wrapper = styled.div`
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 3rem;
  padding: 0 1rem;
`;

export const History: React.FC = () => {
  const [memos, setMemos] = useState<MemoRecord[]>([]);
  console.log("テスト");

  useEffect(() => {
    getMemos().then(setMemos);
  }, []);

  return (
    <>
      <HeaderArea>
        <Header title="履歴">
          <Link to="/editor">エディタに戻る</Link>
        </Header>
      </HeaderArea>
      <Wrapper>TODO: 履歴表示</Wrapper>
    </>
  );
};
