import styled from '@emotion/styled';
import { Select } from 'antd';
import TokenSelectionLabel from '@/app/components/TokenSelectionLabel';
import { formatAmount, getTokenAvatar } from '@/app/components/commons/utils';
import { Token } from '@/types';
import NumericInput from '@/app/components/NumericInput';
import Balance from '@/app/components/Balance';

const TokenAndAmountStyled = styled.div`
    margin: 16px 0 20px 0;
    display: flex;
    gap: var(--gap-primary);
    flex-direction: column;

    & .section-name {
        font-size: 14px;
        color: #868098;
    }
    & .main-content {
        display: flex;
        flex-direction: row;
        gap: var(--gap-primary);
    }
    & .ant-select-selection-placeholder {
        color: #ffffff;
    }
    & .ant-select-outlined .ant-select-selector {
        color: #ffffff;
        background-color: #462e67;
        border-radius: 16px;
        height: 52px;

        & + span.ant-select-arrow {
            color: #ffffff;
        }
        & .ant-select-selection-item {
            color: #ffffff;
        }
    }
`;

interface OptionProps {
    avatar: string;
    label: string;
    value: string;
}

interface TokenAndAmountProps {
    onChangeToken: (token: string) => void;
    options: OptionProps[];
    token: Token;
    tokens: Token[];
    amount: string;
    onChangeAmount: (amount: string) => void;
}

export default function TokenAndAmount({
    onChangeToken,
    options,
    token,
    tokens,
    amount,
    onChangeAmount,
}: TokenAndAmountProps) {
    const totalPrice = token.price * Number(amount) || 0;

    return (
        <TokenAndAmountStyled>
            <div className="section-name">Token & Amount</div>
            <div className="main-content">
                <Select
                    style={{ width: '142px', height: '52px' }}
                    optionFilterProp="children"
                    onChange={onChangeToken}
                    options={options}
                    value={token.id || options[0]?.value || ''}
                    labelRender={(props) => (
                        <TokenSelectionLabel
                            label={props.label}
                            image={getTokenAvatar(props.value, tokens)}
                        />
                    )}
                    optionRender={(option) => (
                        <TokenSelectionLabel
                            label={option.data.label}
                            image={option.data.avatar}
                        />
                    )}
                />
                <NumericInput
                    value={amount}
                    onChange={onChangeAmount}
                    addonAfter={`$${formatAmount(totalPrice)}`}
                />
            </div>
            <Balance />
        </TokenAndAmountStyled>
    );
}
