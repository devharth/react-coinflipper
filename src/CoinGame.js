import React, { Component } from 'react';
import { choice } from './Helpers';
import Coin from './Coin';

export default class CoinGame extends Component {
    static defaultProps = {
        coins: [
            { side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg" },
            { side: "tails", imgSrc: "https://tinyurl.com/react-coin-tail-jpg" },
        ]
    }

    state = {
        currCoin: null,
        flips: 0,
        nHeads: 0,
        nTails: 0
    }

    flipCoin = () => {
        const newCoin = choice(this.props.coins);
        this.setState(st => ({
            currCoin: newCoin,
            flips: st.flips + 1,
            nHeads: st.nHeads + (newCoin.side === "heads" ? 1 : 0),
            nTails: st.nTails + (newCoin.side === "tails" ? 1 : 0)
        }))
    }

    handleClick = () => {
        this.flipCoin();
    }

    render() {
        return (
            <div>
                <h1>Let's flip a coin!</h1>
                {this.state.currCoin && <Coin info={this.state.currCoin} />}
                <div>
                    <button onClick={this.handleClick}>{this.state.flips > 0 ? "Flip again..." : "Start !"}</button>
                </div>
                <div>
                    <p>Out of {this.state.flips}, there have been {this.state.nHeads} heads and {this.state.nTails } tails.</p>
                </div>
            </div>
            
        )
    }
}
