import styled from '@emotion/styled';
import DropdownSelection from '@/app/components/DropdownSelection';
import PersonSelection from '@/app/components/PersonSelection';
import { Recipient as RecipientType, Token } from '@/types';
import { useTokenSending } from '@/app/providers/TokenSendingProvider';
import { useEffect, useState } from 'react';
import TokenAndAmount from '@/app/components/TokenAndAmount';
import Button from '@/app/components/Button';

const RecipientStyled = styled.div`
    width: 100%;
    min-height: 52px;

    & .label-to {
        font-size: 14px;
        color: #868098;
        margin-bottom: 8px;
    }
    & .ant-select-arrow {
        font-size: 18px;
        color: #462e67;
        right: 20px;
    }
`;

export default function Recipient() {
    const {
        recipient,
        setRecipient,
        token,
        setToken,
        amount,
        setAmount,
        sendToken,
        fetchRecipientList,
        fetchTokenList,
    } = useTokenSending();
    const [recipients, setRecipients] = useState<RecipientType[]>([]);
    const [tokens, setTokens] = useState<Token[]>([]);
    const recipientOptions = recipients.map((recipient) => ({
        value: recipient.username,
        label: recipient.name,
        avatar: recipient.picture,
    }));
    const tokenOptions = tokens.map((token) => ({
        value: token.id,
        label: token.name,
        avatar: token.picture,
    }));

    useEffect(() => {
        (async () => {
            const recipients = await fetchRecipientList();
            setRecipients(recipients);
            const tokens = await fetchTokenList();
            setTokens(tokens);
        })();
    }, []);

    const handleDropdownChange = (value: string) => {
        setRecipient(value);
    };

    const handlePersonClick = (recipient: RecipientType) => {
        setRecipient(recipient.username);
    };

    const handleChangeToken = (tokenId: string) => {
        const token = tokens.find((token) => token.id === tokenId) || tokens[0];
        setToken(token);
    };

    return (
        <RecipientStyled className="Recipient">
            <div className="label-to">To</div>
            <DropdownSelection
                options={recipientOptions}
                onChange={handleDropdownChange}
                value={recipient}
            />
            <PersonSelection
                recipients={recipients}
                onClick={handlePersonClick}
            />
            <TokenAndAmount
                tokens={tokens}
                token={token}
                onChangeToken={handleChangeToken}
                options={tokenOptions}
                amount={amount}
                onChangeAmount={setAmount}
            />
            <Button
                type="primary"
                style={{ width: '100%' }}
                onClick={sendToken}
            >
                Send
            </Button>
        </RecipientStyled>
    );
}
