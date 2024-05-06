import React from 'react';
import { Input } from 'antd';
import styled from '@emotion/styled';

interface NumericInputProps {
    style?: React.CSSProperties;
    value: string;
    onChange: (value: string) => void;
    addonAfter?: string;
}

const NumericInputStyled = styled(Input)`
    height: 52px;
    width: calc(100% - var(--gap-primary) - 142px);
    border-radius: var(--boder-radius-primary);

    &:hover,
    &:focus,
    &:focus-within {
        border-color: var(--color-border-secondary);
        box-shadow: unset;
    }

    & .ant-input-group {
        height: 100%;
        & input {
            min-width: 100%;
            text-align: right;
            height: 100%;
            border-radius: 16px 0 0 16px;
            background-color: var(--color-bg-input-primary);
            box-shadow: unset;
            border: unset;
        }
        & .ant-input-group-addon {
            height: 100%;
            padding-right: 16px;
            font-size: 10px;
            color: var(--color-text-secondary);
            background-color: var(--color-bg-input-primary);
            border-radius: 0 16px 16px 0;
            border: unset;
        }
    }
`;

export default function NumericInput(props: NumericInputProps) {
    const { value, onChange } = props;
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value: inputValue } = e.target;
        const reg = /^-?\d*(\.\d*)?$/;
        if (reg.test(inputValue) || inputValue === '' || inputValue === '-') {
            onChange(inputValue);
        }
    };

    // '.' at the end or only '-' in the input box.
    const handleBlur = () => {
        let valueTemp = value;
        if (value.charAt(value.length - 1) === '.' || value === '-') {
            valueTemp = value.slice(0, -1);
        }
        onChange(valueTemp.replace(/0*(\d+)/, '$1'));
    };

    return (
        <NumericInputStyled
            {...props}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Input a number"
            maxLength={16}
            addonAfter={props.addonAfter || ''}
        />
    );
}
