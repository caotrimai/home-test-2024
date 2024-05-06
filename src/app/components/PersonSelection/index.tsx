import Image from 'next/image';
import styled from '@emotion/styled';
import { Recipient } from '@/types';
import { useTokenSending } from '@/app/providers/TokenSendingProvider';

const PersonSelectionStyled = styled.div`
    min-height: 32px;
    margin-top: 8px;
    display: flex;
    flex-direction: row;
    gap: 8px;
`;

const PersonChip = styled.div`
    height: 32px;
    padding: 4px 8px 4px 4px;
    width: fit-content;
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
    border-radius: 16px;
    color: var(--color-text-primary);
    background-color: #f1f1ff;
    border: 1px solid #f1f1ff;
    font-size: 10px;
    cursor: pointer;
    & .avatar {
        border-radius: 50%;
    }
    &:hover {
        border: var(--border-secondary);
    }
    &.selected {
        border: var(--border-secondary);
    }
`;

interface PersonSelectionProps {
    recipients: Recipient[];
    onClick?: (recipient: Recipient) => void;
}

export default function PersonSelection({
    recipients,
    onClick,
}: PersonSelectionProps) {
    const { recipient: currentRecipient } = useTokenSending();
    return (
        <PersonSelectionStyled>
            {recipients.slice(0, 3).map((recipient) => (
                <PersonChip
                    key={recipient.username}
                    onClick={() => onClick && onClick(recipient)}
                    className={
                        recipient.username === currentRecipient?.username
                            ? 'selected'
                            : ''
                    }
                >
                    <Image
                        src={recipient.picture}
                        alt={recipient.name}
                        className={'avatar'}
                        width={24}
                        height={24}
                    />
                    <span>{recipient.name}</span>
                </PersonChip>
            ))}
        </PersonSelectionStyled>
    );
}
