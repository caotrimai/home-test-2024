import { Button as AntdButton } from 'antd';
import styled from '@emotion/styled';

const Button = styled(AntdButton)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 52px;
    width: 100%;
    padding: 16px 24px 16px 24px;
    border-radius: var(--boder-radius-secondary);
    background-color: ${(props) =>
        props.type === 'primary'
            ? 'var(--color-btn-primary)'
            : 'var(--color-btn-secondary)'};
    color: ${(props) =>
        props.type === 'primary' ? '#ffffff' : 'var(--color-text-primary)'};
    font-size: 18px;
    font-weight: 500;
    border: ${(props) =>
        props.type === 'primary'
            ? '1px solid var(--color-btn-primary)'
            : '1px solid var(--color-btn-secondary)'};
    box-shadow: unset;
    transition: background-color 0.3s;

    &:hover:not(:disabled) {
        border: ${(props) =>
            props.type === 'primary'
                ? '3px solid var(--color-border-primary)'
                : '3px solid var(--color-border-secondary)'};
        background-color: ${(props) =>
            props.type === 'primary'
                ? 'var(--color-btn-primary) !important'
                : 'var(--color-btn-secondary) !important'};
    }
    &:disabled {
        background-color: var(--color-btn-disabled);
        color: var(--color-text-disabled);
        border: 1px solid var(--color-btn-disabled);
    }
`;

export default Button;
