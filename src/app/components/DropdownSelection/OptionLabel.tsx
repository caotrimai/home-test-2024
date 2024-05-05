import styled from '@emotion/styled';

const OptionLabelStyled = styled.div`
    margin-left: 10px;
    font-size: 14px;
    color: #462e67;
    & .hashtag {
        font-size: 12px;
        color: #868098;
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
