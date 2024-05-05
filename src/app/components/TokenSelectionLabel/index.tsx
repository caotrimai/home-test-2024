import styled from '@emotion/styled';
import Image from 'next/image';
import { ReactNode } from 'react';

const TokenSelectionLabelStyled = styled.div`
    gap: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

interface TokenSelectionLabelProps {
    label: ReactNode;
    image: string;
}

export default function TokenSelectionLabel({
    label,
    image,
}: TokenSelectionLabelProps) {
    return (
        <TokenSelectionLabelStyled className={'TokenSelectionLabelStyled'}>
            {image && (
                <Image
                    src={image}
                    alt="avatar"
                    className={'token-avatar'}
                    width={24}
                    height={24}
                />
            )}
            {label}
        </TokenSelectionLabelStyled>
    );
}
