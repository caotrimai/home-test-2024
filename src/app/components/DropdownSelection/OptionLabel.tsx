import styled from '@emotion/styled';

const OptionLabelStyled = styled.div`
    margin-left: 10px;
    font-size: 14px;
    color: var(--color-text-primary);
    & .hashtag {
        font-size: 12px;
        color: var(--color-text-secondary);
    }
`;

interface OptionLabelProps {
    label: string;
    tag: string;
}

export default function OptionLabel({ label, tag }: OptionLabelProps) {
    return (
        <OptionLabelStyled>
            <div>{label}</div>
            <div className="hashtag">{`@${tag}`}</div>
        </OptionLabelStyled>
    );
}
