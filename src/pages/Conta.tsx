import { useContext } from "react";
import { AppContext } from "../components/AppContext";
import { useNavigate } from "react-router-dom";
import { Center, SimpleGrid } from "@chakra-ui/react";
import { Card } from "../components/Card";

export const Conta = () => {
    const { userInfo } = useContext(AppContext);
    const navigate = useNavigate();
    const actualData = new Date();

    const fixTimePresentation = (time: number): string => {
        if(time < 10){
            return '0' + time;
        }

        return `${time}`;
    }

    !Object.values(userInfo).length && navigate('/');
    
    return (
        <Center>
            <SimpleGrid columns={2} spacing={8} paddingTop={16}>
                <Card 
                    mainContent={`Bem vindo ${userInfo?.name}`} 
                    content={`${fixTimePresentation(actualData.getDay())} / 
                    ${fixTimePresentation(actualData.getMonth())} / 
                    ${actualData.getFullYear()} 
                    ${fixTimePresentation(actualData.getHours())}:
                    ${fixTimePresentation(actualData.getMinutes())}`} 
                />
                <Card 
                    mainContent='Saldo:' 
                    content={`R$ ${userInfo.balance}`}
                    />
            </SimpleGrid>    
        </Center>
    );
};