import styled from "styled-components";


export const DashboardPage = styled.div `
    background-color: #000;
    width: 100vw;
    height: 100vh;
`;

export const SideBar = styled.div `
    background-color: #fff;
    height: 100%;
    width: 15%;

    display: props.display;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
`;

export const SideBarInative = styled.div `
    background-color: #fff;
    height: 100%;
    width: 15%;

    display: none;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
`;

export const DivClose = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 15px;
`;

export const DivButtons = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const DivLogOut = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 15px;
`;