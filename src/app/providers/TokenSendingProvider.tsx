import { ReactNode, createContext, useState, useContext } from 'react';
import { Recipient, Token } from '@/types';

const mockTokenList: Token[] = [
    {
        id: 'ETH',
        name: 'ETH',
        picture: '/images/eth.png',
        price: 2000,
    },
    {
        id: 'BNB',
        name: 'BNB',
        picture: '/images/bnb.png',
        price: 300,
    },
    {
        id: 'BTC',
        name: 'BTC',
        picture: '/images/btc.png',
        price: 50000,
    },
    {
        id: 'SOL',
        name: 'SOL',
        picture: '/images/sol.png',
        price: 150,
    },
];

const mockRecipientList: Recipient[] = [
    {
        username: 'bigbear444',
        name: 'Marvin McKinney',
        picture: '/images/users/1.png',
    },
    {
        username: 'tinypanda866',
        name: 'Leslie Alexander',
        picture: '/images/users/2.png',
    },
    {
        username: 'hawkins1001',
        name: 'Guy Hawkins',
        picture: '/images/users/3.png',
    },
    {
        username: 'sliverlion355',
        name: 'Daryl Lawson',
        picture: '/images/users/4.png',
    },
    {
        username: 'blueladybug463',
        name: 'Arlene Robertson',
        picture: '/images/users/5.png',
    },
    {
        username: 'lazymeercat616',
        name: 'Micheal Fisher',
        picture: '/images/users/6.png',
    },
];

interface TokenSendingState {
    recipient?: Recipient;
    token: Token;
    amount: string;
    setRecipient: (recipient: string) => void;
    setToken: (token: Token) => void;
    setAmount: (amount: string) => void;
    isSending: boolean;
    sendToken: () => Promise<void>;
    fetchRecipientList: () => Promise<Recipient[]>;
    fetchTokenList: () => Promise<Token[]>;
}

const initialState: TokenSendingState = {
    recipient: undefined,
    token: mockTokenList[0],
    amount: '0.0',
    isSending: false,
    setRecipient: (recipient: string) => {},
    setToken: (token: Token) => {},
    setAmount: (amount: string) => {},
    sendToken: async () => {},
    fetchRecipientList: async () => [],
    fetchTokenList: async () => [],
};

const TokenSendingContext = createContext(initialState);

export function useTokenSending() {
    return useContext(TokenSendingContext);
}

export default function TokenSendingProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [recipient, setRecipientPerson] = useState<Recipient | undefined>(
        undefined,
    );
    const [token, setToken] = useState<Token>(mockTokenList[0]);
    const [amount, setAmount] = useState('0.0');
    const [isSending, setIsSending] = useState(false);

    const fetchRecipientList = async () => {
        return mockRecipientList;
    };

    const fetchTokenList = async () => {
        return mockTokenList;
    };

    const setRecipient = (recipientUsername: string) => {
        const recipientPerson = mockRecipientList.find(
            ({ username }) => username === recipientUsername,
        );
        setRecipientPerson(recipientPerson);
    };

    const sendToken = async () => {
        console.log('Sending token...');
        console.log({
            recipient: recipient?.username,
            token: token.name,
            amount,
        });
        setIsSending(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsSending(false);
    };

    return (
        <TokenSendingContext.Provider
            value={{
                recipient,
                token,
                amount,
                setRecipient,
                setToken,
                setAmount,
                isSending,
                sendToken,
                fetchRecipientList,
                fetchTokenList,
            }}
        >
            {children}
        </TokenSendingContext.Provider>
    );
}
