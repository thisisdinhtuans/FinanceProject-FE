import React from 'react'
import "./Card.css"
interface Props {
    companyName:string;
    ticker: string;
    price:number
}

const Card:React.FC<Props> = ({companyName, ticker, price}: Props) :JSX.Element => {
  return <div className='card'>
    <img src="https://yt3.googleusercontent.com/WoDkWmAjQ5Dbw-ccjqFku8ThK2UYcqaOqq25PBE9eGb_S-vsqxiKU2kL2kZJVz_BcAMv3WUWsA=s900-c-k-c0x00ffffff-no-rj"
    alt="Image"
    />
    <div className="details">
        <h2>{companyName} ({ticker})</h2>
        <p>${price}</p>
    </div>
    <p className="info">lorem ipsum dolor, sit amet consextetur adipisicing elit.</p>
  </div>;
}

export default Card