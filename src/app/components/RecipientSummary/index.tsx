import { CopyToClipboard } from 'react-copy-to-clipboard';
import styled from '@emotion/styled';
import { useTokenSending } from '@/app/providers/TokenSendingProvider';
import { useAppSelector } from '@/redux/hooks';
import { selectName, selectUsername } from '@/redux/features/user/userSlice';
import Image from 'next/image';
import { formatAmount } from '@/app/components/commons/utils';

const RecipientSummaryStyled = styled.div`
    @media (max-width: 640px) {
        width: 100%;
    }
    width: calc(50% - (var(--gap-primary) * 2));
    min-width: 320px;
    display: flex;
    flex-direction: column;
    gap: calc(var(--gap-primary) * 2);
    padding: 24px;
    color: var(--color-text-primary);
    background-color: var(--color-white);
    border-radius: var(--boder-radius-secondary);
    border: var(--border-tertiary);
`;

const Section = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 14px;
    &.divider {
        border-top: var(--border-divider);
    }
    & .label {
        color: var(--color-text-secondary);
    }
    & .value {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: var(--gap-primary);
        color: var(--color-text-primary);
        & .secondary {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: var(--gap-primary);
            font-size: 10px;
            color: var(--color-text-secondary);
        }
    }
`;

const TotalTokenAmount = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--gap-primary);
    font-weight: 600;
`;

export default function RecipientSummary() {
    const name = useAppSelector(selectName);
    const username = useAppSelector(selectUsername);
    const { recipient, amount, token } = useTokenSending();
    const DEFAULT_STRING = '-';
    const FEE_RATE = 0.0001;
    const totalPrice = Number(amount) * token.price;
    const networkFee = totalPrice * FEE_RATE;

    return (
        <RecipientSummaryStyled>
            <h2>Summary</h2>
            <Section>
                <div className="label">From</div>
                <div className="value">
                    {name}
                    <div className="secondary">{`@${username}`}</div>
                </div>
            </Section>
            <Section>
                <div className="label">To</div>
                <div className="value">
                    {recipient?.name || DEFAULT_STRING}
                    <div className="secondary">
                        @{recipient?.username || DEFAULT_STRING}
                        <CopyToClipboard
                            text={`@${recipient?.username || DEFAULT_STRING}`}
                        >
                            <Image
                                style={{ cursor: 'pointer' }}
                                src={'/images/copy.svg'}
                                className="icon"
                                alt="copy"
                                width={16}
                                height={16}
                                priority
                            />
                        </CopyToClipboard>
                    </div>
                </div>
            </Section>
            <Section>
                <div className="label">Network Fee</div>
                <div className="value">${formatAmount(networkFee)}</div>
            </Section>
            <Section>
                <div className="label">Amount</div>
                <div className="value">{`${amount} ${token.name}`}</div>
            </Section>
            <Section className="divider" />
            <Section>
                <div className="label">Total</div>
                <div className="value">
                    <TotalTokenAmount>
                        <Image
                            src={token.picture}
                            className="icon"
                            alt="copy"
                            width={16}
                            height={16}
                        />
                        {formatAmount(Number(amount))}
                    </TotalTokenAmount>
                    <div className="secondary">
                        ${`${formatAmount(totalPrice + networkFee)} USD`}
                    </div>
                </div>
            </Section>
        </RecipientSummaryStyled>
    );
}
