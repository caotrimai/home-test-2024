'use client';
import styled from '@emotion/styled';
import SendTo from '@/app/components/SendTo';

const HomeStyled = styled.main`
    background-color: var(--color-bg-page);
    min-height: 100svh;
    padding: calc(var(--gap-primary) * 2);
`;

export default function Home() {
    return (
        <HomeStyled>
            <SendTo />
        </HomeStyled>
    );
}
