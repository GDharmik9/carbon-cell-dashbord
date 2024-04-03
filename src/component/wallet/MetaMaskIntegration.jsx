
import React, { useState, useEffect } from 'react'
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import './MetaMaskIntegration.css'
import { grey } from '@mui/material/colors';

const DemoPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
    backgroundColor: '#171717',
    marginTop: theme.spacing(4),

}));

const MetaMaskIntegration = () => {

    const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false);
    const [walletConnected, setWalletConnected] = useState(false);

    useEffect(() => {
        const checkMetaMask = async () => {
            if (window.ethereum) {
                setIsMetaMaskInstalled(true);
                // Check if MetaMask is connected
                // You can also check for other Ethereum providers like Mist or Cipher
            } else {
                setIsMetaMaskInstalled(false);
            }
        };

        checkMetaMask();
    }, []);

    const connectWallet = async () => {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            setWalletConnected(true);
        } catch (error) {
            console.error('Error connecting to MetaMask:', error);
            setWalletConnected(false);
        }
    };

    // const disconnectWallet = () => {
    //     if (window.ethereum && window.ethereum.selectedAddress) {
    //         window.ethereum.request({ method: 'wallet_requestPermissions' });
    //         setWalletConnected(false);
    //     }
    // };

    return (
        <>

            <Card className='wallet-container'>
                <CardHeader
                    className='wallet-card-header'
                    title="Connect Wallet"
                />
                <CardContent>
                    <Typography className='card-content' variant="body1">
                        {isMetaMaskInstalled ? (
                            walletConnected ?
                                <p>Wallet connected successfully!</p>
                                :
                                <p>Wallet not connected.</p>
                        ) :
                            <p>MetaMask is not installed.</p>
                        }
                    </Typography>
                </CardContent>
                <CardActions className='card-action'>
                    {isMetaMaskInstalled ? (walletConnected ?
                       " "
                        :
                        <Button className='wallet-connect-btn' variant='contained' onClick={connectWallet}>Connect Wallet</Button>
                    ):""}
                </CardActions>
            </Card>

        </>
    )
}

export default MetaMaskIntegration