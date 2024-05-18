import styled from "styled-components";
const FooterWrapp = styled.footer`
  padding: 10px 0;
  background-color: #011627;
`;
const NyaText = styled.a`
  color: #2ec4b6;
  text-align: end;
  font-size: 40px;
`;

export function Footer() {
  return (
    <FooterWrapp>
      <NyaText href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiPoJqp1peGAxWMRPEDHemqDOQQwqsBegQIChAG&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DqH_haN9lw_I&usg=AOvVaw3U8YkOOgM3oZplcB8EmPqu&opi=89978449">
        nya⭑
      </NyaText>
    </FooterWrapp>
  );
}
