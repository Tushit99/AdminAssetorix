import {
    Avatar,
    Badge,
    Box,
    Divider,
    Flex,
    Heading, 
    Text,
    Tooltip
} from '@chakra-ui/react';
import React,
{ useEffect, useState } from 'react';
import style from "../User.module.css";

const UserDetail = ({ e }) => {

    const [createdOn, setCreatedOn] = useState('');
    const [lastUpDatedOn, setLastUpDatedOn] = useState('');
    const [lastLogIn, setLastLogIn] = useState('');

    const [createdTime, setCreatedTime] = useState('');
    const [lastUpDatedTime, setLastUpDatedTime] = useState('');
    const [lastLogTime, setLastLogTime] = useState('');

    const [createdDay, setCreatedDay] = useState("");
    const [upDatedDay, setUpDatedDay] = useState("");
    const [lastLogDay, setLastLogDay] = useState("");


    const accountdate = (convertdate) => {
        let d1 = convertdate.split(",")[1].split(" ");
        let date = d1[1];
        let month = d1[2].substring(0, 3);

        let d2 = convertdate.split(",")[2].split(" ");
        let year = d2[1];

        return `${date} ${month} ${year}`;
    }

    const accountday = (day) => {
        let d1 = day.split(",")[0].substring(0, 3).toLowerCase();
        return d1;
    }

    const acountTime = (convertdate) => {
        let d2 = convertdate.split(",")[2].split(" ");

        let time = d2[3].split(":");
        let at = d2[4];

        let finaltime = `${time[0]}:${time[1]}`

        return `${finaltime} ${at}`;

    }

    useEffect(() => {
        setCreatedOn(accountdate(e.createdOn));
        setLastUpDatedOn(accountdate(e.lastUpdated));
        setLastLogIn(accountdate(e.lastLogin));

        setCreatedTime(acountTime(e.createdOn));
        setLastUpDatedTime(acountTime(e.lastUpdated));
        setLastLogTime(acountTime(e.lastLogin));

        setCreatedDay(accountday(e.createdOn));
        setUpDatedDay(accountday(e.lastUpdated));
        setLastLogDay(accountday(e.lastLogin));

    }, [])




    return (
        <Box textAlign={"left"} className={style.fullbox} >
            <Box display={"flex"} alignItems={"center"}>
                <Flex alignItems={"center"} justifyContent={"left"} >
                    <Avatar name={e.name} size={"lg"} src={e.avatar} />
                </Flex>
                <Heading as={"h4"} flex={1} size={"md"} textAlign={"center"}> {e.name} </Heading>
            </Box>
            <Divider margin={"6px 0 2px 0"} />
            {/* listing */}
            <Box display={"flex"} alignItems={"center"} justifyContent={"left"} >
                <Text className={style.overflow} flex={9} fontSize={"sm"}  > <b>Listing</b> </Text>
                <Text className={style.overflow} flex={2} >:</Text>
                <Text className={style.overflow} flex={36} > {e.listings} </Text>
            </Box>
            <Box display={"flex"} alignItems={"center"} justifyContent={"left"} >
                <Text className={style.overflow} flex={9} fontSize={"sm"}  > <b>mobile</b> </Text>
                <Text className={style.overflow} flex={2} >:</Text>
                <Text className={style.overflow} flex={36} > {e.mobile || "Not Provided"} </Text>
            </Box>
            <Box display={"flex"} alignItems={"center"} justifyContent={"left"} >
                <Text className={style.overflow} flex={9} fontSize={"sm"}  > <b>email</b> </Text>
                <Text className={style.overflow} flex={2}  >:</Text>
                <Text className={style.overflow} flex={36} > {e.email || "Not Provided"} </Text>
            </Box>
            <Box >
                <Box display={"flex"} flex={1}>
                    <Text flex={13} fontSize={"sm"} > <b>Created</b> </Text>
                    <Text flex={2} >:</Text>
                    <Text flex={36} fontSize={"xs"} display={"flex"} alignItems={"center"} justifyContent={"space-around"} >
                        <Badge borderRadius={0} colorScheme='blue'> {createdDay} </Badge>
                        <Badge borderRadius={0} colorScheme='green'> {createdOn} </Badge>
                        <Badge borderRadius={0} colorScheme='purple'> {createdTime} </Badge>
                    </Text>
                </Box>
                <Box display={"flex"} flex={1}>
                    <Text flex={13} fontSize={"sm"} > <b>Updated</b> </Text>
                    <Text flex={2} >:</Text>
                    <Text flex={36} fontSize={"xs"} display={"flex"} alignItems={"center"} justifyContent={"space-around"} >
                        <Badge borderRadius={0} colorScheme='blue'> {upDatedDay} </Badge>
                        <Badge borderRadius={0} colorScheme='green'> {lastUpDatedOn} </Badge>
                        <Badge borderRadius={0} colorScheme='purple'> {lastUpDatedTime} </Badge>
                    </Text>
                </Box>
                <Box display={"flex"} flex={1}>
                    <Text flex={13} fontSize={"sm"} > <b>Last Login</b> </Text>
                    <Text flex={2} >:</Text>
                    <Text flex={36} fontSize={"xs"} display={"flex"} alignItems={"center"} justifyContent={"space-around"} >
                        <Badge borderRadius={0} colorScheme='blue'> {lastLogDay} </Badge>
                        <Badge borderRadius={0} colorScheme='green'> {lastLogIn} </Badge>
                        <Badge borderRadius={0} colorScheme='purple'> {lastLogTime} </Badge>
                    </Text>
                </Box>
            </Box>


        </Box>
    )
}

export default UserDetail;


