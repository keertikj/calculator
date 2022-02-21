import styled from "styled-components";

export const Section = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;

`

export const Numbers = styled.div`
display: grid;
grid-template-columns: auto auto auto auto;
gap: 0px 20px;
justify-content: center;
height: 380px;
width: 320px;
background: black;

padding-top: 30px;

.num {
    grid-column-start: 1;
    grid-column-end: 3;
    width: 133px;
    color: #fff;
    background: #3c3a3a;
    border: none;
    display: flex;
   justify-content: left;
   align-items: left;
}

.digit {
    color: #fff;
    background: #3c3a3a;
    border: none;
}
.operator {
    background: #f39939;
    color: white;
    border: none;
}

.btn {
    background: #bbb8b8;
    border: none;
}
`

export const Button = styled.button`
display: flex;
height: 50px;
width: 50px;
border-radius: 50px;
align-items: center;
justify-content: center;
font-size: 1.5em;
cursor: pointer;


`
export const Input = styled.div`
display: flex;
justify-content: right;
width: 320px;
height: 70px;
background: black;
color: #fff;
font-size: 3.5em;



`



