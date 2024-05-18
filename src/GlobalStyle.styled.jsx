import "modern-normalize";
import {createGlobalStyle} from "styled-components";
import "@fontsource/modak"; // Імпортуйте шрифт Roboto


export const GlobalStyled = createGlobalStyle`
  //my reset

a{
    display: block;
    text-decoration: none;
    color: inherit;
}

button{
    display: inline-block;
    padding: 0;
    cursor: pointer;
    color: inherit;
    font-family: inherit;
    font-weight: inherit;
    letter-spacing: inherit;
}

// fonts
${'' /* 
@font-face {
    font-family: "Modak";
    font-weight: 400;
    src: 
    url("./fonts/Modak.woff2") format("woff2") ,
    url("./fonts/Modak.woff") format("woff"),;
} 
@font-face {
    font-family:"Inter";
    font-weight: 400;
    src: url("./fonts/Inter-Regular.woff2") format("woff2"),
    url("./fonts/Inter-Regular.woff") format("woff");
}
@font-face {
    font-family:"JetBrainsMono-Regular";
    font-weight: 400;
    src: url("./fonts/JetBrainsMono-Regular.woff2") format("woff2"),
    url("./fonts/JetBrainsMono-Regular.woff") format("woff");
} */}

// reset css

html {
box-sizing: border-box;
}
html *, ::after, ::before{
box-sizing: inherit;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, font, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td {
margin: 0;
padding: 0;
border: 0;
outline: 0;
font-weight: inherit;
font-style: inherit;
font-size: 100%;
font-family: inherit;
vertical-align: baseline;
}
/* remember to define focus styles! */
:focus {
outline: 0;
}
body {
line-height: normal;
color: #000;
background-color: #FDFFFC;
font-family: Modak;
}
ol, ul {
list-style: none;
}
/* tables still need 'cellspacing="0"' in the markup */
table {
border-collapse: separate;
border-spacing: 0;
}
caption, th, td {
text-align: left;
font-weight: normal;
}
blockquote:before, blockquote:after,
q:before, q:after {
content: "";
}
blockquote, q {
quotes: "" "";
}
`;