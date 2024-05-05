import styled from '@emotion/styled';
import { useAppSelector } from '@/redux/hooks';
import { selectBalance } from '@/redux/features/user/userSlice';
import { formatAmount } from '@/app/components/commons/utils';
import { useTokenSending } from '@/app/providers/TokenSendingProvider';

const BalanceStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    font-size: 10px;
    color: var(--color-text-secondary);
    & .balance {
        margin-left: var(--gap-primary);
        color: var(--color-text-tertiary);
        font-size: 10px;
        font-weight: 600;
    }
`;

export default function Balance() {
    const { token } = useTokenSending();
    const tokenBalances = useAppSelector(selectBalance);

    const getBalance = () => {
        const tokenBalance = tokenBalances.find(
            ({ token: tokenName }) => tokenName === token.name,
        );
        return formatAmount(tokenBalance ? tokenBalance.balance : 0);
    };

    return (
        <BalanceStyled>
            Balance:
            <span className="balance">
                {getBalance()} {token.name}
            </span>
        </BalanceStyled>
    );
}
