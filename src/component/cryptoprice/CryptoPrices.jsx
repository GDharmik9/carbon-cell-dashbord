import React, { useState, useEffect } from 'react'
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import Tooltip from '@mui/material/Tooltip';
import './CryptoPrices.css'

const CryptoPrices = () => {
    const [cryptoData, setCryptoData] = useState(null);

    useEffect(() => {
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => response.json())
            .then(data => {
                // Process data if necessary
                setCryptoData(data);
            })
            .catch(error => console.error('Error fetching cryptocurrency data:', error));
    }, []);

    return (
        <>
            <div className='card-container'>
                {cryptoData && (cryptoData.bpi) ? Object.keys(cryptoData.bpi).map((key, index) => {
                    return (
                        <Card key={index} className='crypto-card'>
                            <CardHeader
                                className='crypto-card-header'
                                avatar={
                                    <Avatar
                                        sx={{ bgcolor: "#59b240", fontSize: "0.9rem" }}
                                        aria-label="recipe">
                                        {cryptoData.bpi[key].code}
                                    </Avatar>
                                }
                                title={cryptoData.bpi[key].description}
                                subheader={cryptoData.time.updated}
                            />
                            <CardContent>
                                <Typography className='card-content' variant="body1">
                                    1 {cryptoData.chartName} =

                                </Typography>
                                <Typography variant="h6" gutterBottom>

                                    <span dangerouslySetInnerHTML={{ __html: cryptoData.bpi[key].symbol }}></span>
                                    &nbsp;
                                    {cryptoData.bpi[key].rate}

                                </Typography>

                            </CardContent>
                            <CardActions className='card-action' sx={{ justifyContent: "space-between" }}>
                                <IconButton aria-label="infomation">
                                    <Tooltip title={cryptoData.disclaimer} disableInteractive>
                                        <InfoTwoToneIcon sx={{ color: "#59b240" }} />
                                    </Tooltip>
                                </IconButton>
                                <Button variant="contained"
                                    sx={{
                                        textTransform: "capitalize",
                                        backgroundColor: "#59b240",
                                        "&:hover": { backgroundColor: "#4d9e3a" }
                                    }}
                                >Trade</Button>
                            </CardActions>
                        </Card>
                    );
                }) : <p>Loading...</p>
                }
            </div>
        </>
    )
}

export default CryptoPrices