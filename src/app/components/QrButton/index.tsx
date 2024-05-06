import styled from '@emotion/styled';
import Image from 'next/image';
import { MouseEventHandler } from 'react';

const QrButtonStyled = styled.div`
    width: 52px;
    height: 52px;
    background-color: var(--color-bg-input-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    cursor: pointer;
    &:hover {
        border: var(--border-secondary);
    }
`;

interface QrButtonProps {
    onClick?: MouseEventHandler<any> | undefined;
}

export default function QrButton({ onClick }: QrButtonProps) {
    return (
        <QrButtonStyled onClick={onClick}>
            <Image
                src="/qr-icon.png"
                alt="QR Scanner"
                width={24}
                height={24}
                priority
            />
        </QrButtonStyled>
    );
}
