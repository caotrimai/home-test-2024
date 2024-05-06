import styled from '@emotion/styled';
import Recipient from '../Recipient';
import TokenSendingProvider from '@/app/providers/TokenSendingProvider';
import { CloseOutlined } from '@ant-design/icons';
import RecipientSummary from '@/app/components/RecipientSummary';

const SendToStyled = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--color-white);
    border-radius: 36px;
    padding: 24px;
    max-width: 1024px;
    min-width: 375px; // iphone SE
    position: relative;
    transform: translateX(calc(-50% + 50vw - var(--gap-primary)));

    & .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: var(--gap-primary);
        color: var(--color-text-primary);
    }
    & h1 {
        font-size: 20px;
        font-weight: 600;
    }
    & .main {
        display: flex;
        flex-direction: row;
        gap: calc(var(--gap-primary) * 4);
        @media (max-width: 640px) {
            flex-direction: column;
        }
    }
`;

export default function SendTo() {
    return (
        <TokenSendingProvider>
            <SendToStyled className="SendTo">
                <div className="header">
                    <h1>Send to</h1>
                    <CloseOutlined />
                </div>
                <div className="main">
                    <Recipient />
                    <RecipientSummary />
                </div>
            </SendToStyled>
        </TokenSendingProvider>
    );
}
