import styled from '@emotion/styled';
import { Select } from 'antd';
import QrButton from '@/app/components/QrButton';
import SelectOption from '@/app/components/DropdownSelection/SelectOption';

const DropdownSelectionStyled = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;

    & .ant-select-selector {
        padding: 16px;
        border-radius: 16px;
        font-size: 14px;
        background-color: #fbfafb;
        :hover {
            border-color: var(--color-border-secondary) !important;
        }
    }

    & .ant-select-selection-item {
        color: #462e67;
        font-size: 14px;
    }
`;

export interface OptionProps {
    avatar: string;
    label: string;
    value: string;
}

interface DropdownSelectionProps {
    onChange: (value: string) => void;
    options: OptionProps[];
    value?: string;
}

export default function DropdownSelection({
    onChange,
    options,
    value,
}: DropdownSelectionProps) {
    // Filter `option.label` match the user type `input`
    const filterOption = (
        input: string,
        option?: { label: string; value: string },
    ) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

    return (
        <DropdownSelectionStyled>
            <Select
                style={{ width: 'calc(100% - 52px - 8px)', height: '52px' }}
                placeholder="Paste, scan or select recipient"
                optionFilterProp="children"
                onChange={onChange}
                filterOption={filterOption}
                options={options}
                value={value}
                optionRender={(option) => <SelectOption option={option} />}
            />
            <QrButton />
        </DropdownSelectionStyled>
    );
}
