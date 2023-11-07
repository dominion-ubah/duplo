import styled from 'styled-components';

export const CenterStyle = styled.div`
display: flex;
justify-content: center;
`;
export const StyledSearchIconHolder = styled.div`
    background: rgba(55, 125, 255, 1);
    height: 38.5px;
    width: 49px;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    position: absolute;
    top: 0px;
    right: 0px;
`;
export const StyledBox = styled.div<any, any>`
`;
export const StyledFlexBox = styled.div`
display: flex
`;
export const MessageBox = styled.div`
display: flex;
margin: 0 0 0.6em 0;
padding: 0.1em 0.6em 1em 0.6em;
border-radius: 8px;
background: rgba(245, 246, 250, 1); 
`;

export const StyledButton = styled.button<any, any>`
min-width: 250px;
padding: 0.6em 1em;
border-radius: 8px;
color: white; 
cursor: pointer;
background: rgba(56, 124, 255, 1);
`;
export const StyledCardBox = styled.div`
min-width: 250px;
padding: 0.6em 1em;
border-radius: 8px;
background: white; 
`;

export const StyledTagApplying = styled.div`
display: flex;
justify-content: center;
align-items: center
min-width: 100px;
height: 27px;
padding: 0.5em;
border-radius: 6px;
background: rgba(215, 229, 255, 1); 
color: rgba(56, 124, 255, 1);
font-size: 0.65rem;
font-weight: 600;
`;



export const StyledTextRegular = styled.p`
font-size: 0.86rem;
letter-spacing: 0.6px;
color: rgba(51, 51, 51, 1);
font-weight: 600;
line-height: 2.5em
`;
export const StyledImg = styled.img`
width: 100% !important
`;
export const StyledTextRegularLarge = styled.p`
font-size: 0.9rem;
letter-spacing: 0.6px;
color: rgba(0, 0, 0, 0.898);
font-weight: 500;
line-height: 2.5em
`;
export const StyledTextExtraLarge = styled.p`
font-size: 1.2rem;
letter-spacing: 0.6px;
color: rgba(51, 51, 51, 1);
font-weight: 700;
line-height: 1.4em
`;
export const StyledTextLarge = styled.p`
font-size: 1rem;
letter-spacing: 0.3px;
color: rgba(0, 0, 0, 0.898);
font-weight: 700;
line-height: 1.4em
`;
export const StyledTextMediumSmall = styled.p`
font-size: .75rem;
letter-spacing: 0.6px;
color: rgba(143, 143, 143, 1);
font-weight: 600;
line-height: 1.8em
`;
export const StyledTextExtraSmall = styled.p`
font-size: 0.66rem;
letter-spacing: 0.6px;
color: rgba(143, 143, 143, 1);
font-weight: 600;
line-height: 0.8em
`;

export const StyledNavItems = styled.a`
display:inline-block;
font-size: 0.86rem;
letter-spacing: 0.8px;
color: rgba(143, 143, 143, 1);
font-weight: 600;
line-height: 2.5em;
padding: 0.45em 1.5em;
transition: 20ms ease-out;
border-radius: 12px;
cursor: pointer;
width:100%;
&:hover {
    background: rgba(55, 125, 255, 1);
    color: white;
    transition: 200ms ease-in;
}
`;
export const StyledListItems = styled.li`
    // border: 1px solid red;
`;
export const StyledUList = styled.ul`
    // border: 1px solid red;
`;
export const StyledInput = styled.input`
    height: 2.5em;
    border-radius: 12px;
    background: white;
    padding: 1.5em 2em;
    width: 350px;
    font-size: 0.8em;
    font-weight: 500
`;
