import { useState } from "react";
import "../index.css";
import * as Constants from "../constants/constants";

const Initiateauction = () => {
  const [auctionTokken, setAuctionTokken] = useState("");
  const [biddingToken, setBiddingToken] = useState("");
  const [orderCancellation, setOrderCancellation] = useState("");
  const [auctionEndDate, setAuctionEndDate] = useState("");
  const [sellAmount, setSellAmount] = useState("");
  const [minBuyAmount, setMinBuyAmount] = useState("");
  const [orderCancel, setOrderCancel] = useState("");
  const [minThreshhold, setMinThreshhold] = useState("");

  const handleAuctionToken = (event) => {
    setAuctionTokken(event.target.value);
  };
  const handleBiddingToken = (event) => {
    setBiddingToken(event.target.value);
  };
  const handleOrderCancellation = (event) => {
    setOrderCancellation(event.target.value);
  };
  const handleAuctionEndDate = (event) => {
    setAuctionEndDate(event.target.value);
  };
  const hndleSellAmount = (event) => {
    setSellAmount(event.target.value);
  };
  const handleMinBuyAmount = (event) => {
    setMinBuyAmount(event.target.value);
  };
  const handleOrderCancel = (event) => {
    setOrderCancel(event.target.value);
  };
  const handleMinThreshhold = (event) => {
    setMinThreshhold(event.target.value);
  };

  const handleStartAuction = async () => {
    let auctionObject = {
      auctionToken: auctionTokken,
      biddingToken: biddingToken,
      ordercancellation: orderCancellation,
      auctionEndDate: auctionEndDate,
      sellAmount: sellAmount,
      minBuyAmount: minBuyAmount,
      orderCancel: orderCancel,
      minThreshHold: minThreshhold,
    };

    await Constants.myContract.methods
      .initiateAuction(auctionObject)
      .send({ from: window.ethereum.selectedAddress });
  };

  return (
    <div className="initiate-auction line-break">
      <div>
        <label htmlFor="auctionToken">Auctioning Tokken Address: </label>
        <input
          type="text"
          id="auctionToken"
          required
          onChange={handleAuctionToken}
        />
      </div>

      <div>
        <label htmlFor="biddingToken">Biddng Tokken Address: </label>
        <input
          type="text"
          id="biddingToken"
          required
          onChange={handleBiddingToken}
        />
      </div>

      <div>
        <label htmlFor="orderCancellationEndDate">
          Order Cancellation End Date:
        </label>
        <input
          type="number"
          required
          id="orderCancellationEndDate"
          onChange={handleOrderCancellation}
        />
      </div>

      <div>
        <label htmlFor="auctionEndDate">Auction End Date: </label>
        <input
          type="number"
          id="auctionEndDate"
          required
          onChange={handleAuctionEndDate}
        />
      </div>

      <div>
        <label htmlFor="auctionedSellAmount">Auctioned Sell Amount: </label>
        <input
          type="number"
          id="auctionedSellAmount"
          required
          onChange={hndleSellAmount}
        />
      </div>

      <div>
        <label htmlFor="minBuyAmount">Minimum Buy Amount: </label>
        <input
          type="number"
          required
          id="minBuyAmount"
          onChange={handleMinBuyAmount}
        />
      </div>

      <div>
        <label htmlFor="minimumBiddingAmountPerOrder">
          Minimum Bidding Amount Per Order:
        </label>
        <input
          type="number"
          required
          id="orderCancel"
          onChange={handleOrderCancel}
        />
      </div>

      <div>
        <label htmlFor="minFundingThreshold">Minimum Funding Threshold: </label>
        <input
          type="text"
          id="minFundingThreshold"
          required
          onChange={handleMinThreshhold}
        />
      </div>
      <button onClick={handleStartAuction}>Submit</button>
    </div>
  );
};
export default Initiateauction;
