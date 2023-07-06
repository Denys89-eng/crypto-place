import React from "react";
import {Col, Row, Statistic, Typography} from "antd";
import {useGetCryptosQuery} from "../utils/cryptoApi";
import millify from 'millify';
const Homepage = () => {
const  {data, isFetching} = useGetCryptosQuery()
    const globalStats = data?.data?.stats

    console.log(data)

    if (isFetching) return 'Loading...';

    return (
        <>
            <Typography.Title level={2} className={'heading'}>Crypto Statistics</Typography.Title>
            <Row>
                <Col span={12}><Statistic title='Total Cryptocurrencies' value={globalStats.total}/></Col>
                <Col span={12}><Statistic title='Total Exchanges' value={millify(globalStats.totalExchanges)}/></Col>
                <Col span={12}><Statistic title='Total Market Cap' value={millify(globalStats.totalMarketCap)}/></Col>
                <Col span={12}><Statistic title='Total 24h Volume' value={millify(globalStats.total24hVolume)}/></Col>
                <Col span={12}><Statistic title='Total Markets' value={millify(globalStats.totalMarkets)}/></Col>
            </Row>
        </>
    )
}

export default Homepage