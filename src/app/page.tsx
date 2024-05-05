'use client';
import styled from '@emotion/styled';
import SendTo from '@/app/components/SendTo';

const HomeStyled = styled.main`
    background-color: #e3e3e3;
    min-height: 100svh;
`;

export default function Home() {
    return (
        <HomeStyled>
            <SendTo />
        </HomeStyled>
    );
}
