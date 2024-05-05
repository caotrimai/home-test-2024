import styled from '@emotion/styled';
import Image from 'next/image';
import { FlattenOptionData } from 'rc-select/es/interface';
import { BaseOptionType } from 'rc-select/es/Select';
import OptionLabel from '@/app/components/DropdownSelection/OptionLabel';

const SelectOptionStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    & .avatar {
        width: 32px;
        height: 32px;
        border-radius: 50%;
    }
`;

interface SelectOptionProps {
    option: FlattenOptionData<BaseOptionType>;
}

export default function SelectOption({ option }: SelectOptionProps) {
    return (
        <SelectOptionStyled>
            <Image
                src={option.data.avatar}
                alt="avatar"
                className={'avatar'}
                width={32}
                height={32}
            />
            <OptionLabel label={option.data.label} tag={option.data.value} />
        </SelectOptionStyled>
    );
}
