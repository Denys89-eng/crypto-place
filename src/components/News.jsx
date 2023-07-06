import React from "react";
import {useGetCryptoNewsQuery} from "../utils/cryptoNewsApi";
import {Avatar, Card, Col, Row, Typography} from "antd";
import '../styles/News.css'
import moment from "moment";


const demoImage = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png'
const News = ({simplified}) => {
    const {data: cryptoNews} = useGetCryptoNewsQuery({newsCategory: 'Cryptocurrency', count: simplified ? 10 : 100})

    if (!cryptoNews?.value) return 'Loading...'
    console.log(cryptoNews)
    return (
        <Row gutter={[24, 24]}>
            {cryptoNews.value.map((news, i) => (
                <Col xs={24} sm={12} lg={8} key={i}>
                    <Card hoverable className='news-card'>
                        <a href={news.url} target='_blank'>
                            <div className="news-image-container">
                                <Typography.Title className='news-title' level={4}>{news.name}</Typography.Title>
                                <img className='demo-image' src={news?.image?.thumbnail?.contentUrl || demoImage}
                                     alt=""/>
                            </div>
                            <p>
                                {
                                    news.description > 100 ? `${news.description.substring(0, 100)} ... `
                                        : news.description
                                }
                            </p>
                            <div className='provider-container'>
                                <div>
                                    <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage}/>
                                    <Typography.Text className='provider-name'></Typography.Text>
                                </div>
                                <Typography.Text>{moment(news.datePublished).startOf('ss').fromNow()}</Typography.Text>
                            </div>
                        </a>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default News