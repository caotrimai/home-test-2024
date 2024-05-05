import { RawValueType } from 'rc-select/es/Select';
import { Token } from '@/types';

export const getTokenAvatar = (tokenId: RawValueType, tokenList: Token[]) => {
    const token = tokenList.find((token) => token.id === tokenId);
    return token?.picture || '';
};

export function formatAmount(num: number) {
    return num.toLocaleString('en-US', {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
    });
}
