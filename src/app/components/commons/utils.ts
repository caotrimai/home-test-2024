import { RawValueType } from 'rc-select/es/Select';
import { Token } from '@/types';

export const getTokenAvatar = (tokenId: RawValueType, tokenList: Token[]) => {
    const token = tokenList.find((token) => token.id === tokenId);
    return token?.picture || '';
};

export const formatAmount = (num: number) => {
    if (isNaN(num)) return '0.0';
    if (num % 1 === 0) {
        return num.toLocaleString('en-US', {
            minimumFractionDigits: 1,
            maximumFractionDigits: 1,
        });
    }
    return num.toLocaleString('en-US', {
        minimumFractionDigits: 1,
        maximumFractionDigits: 18,
    });
};
