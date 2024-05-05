import styled from '@emotion/styled';
import Recipient from '../Recipient';
import TokenSendingProvider from '@/app/providers/TokenSendingProvider';
import { CloseOutlined } from '@ant-design/icons';

const SendToStyled = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--color-white);
    border-radius: 36px;
    padding: 24px;
    position: relative;

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
                    <div style={{ width: '100%' }} />
                </div>
            </SendToStyled>
        </TokenSendingProvider>
    );
}
