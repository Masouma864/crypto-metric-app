import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import {fetchAssets} from '../redux/Coins/coinsSlice'
import './Coins.css';

const Coins = () => {

  <Container>
    <Row>
      <Col className="greeting">
        <span>Hello, Rich Man!</span>
        <span>Moneyster</span>
      </Col>
    </Row>
    <Row>
      <Col xs={6} className="coll">
        <p>BTC</p>
        <p>Bitcoin</p>
        <p>Price: 19127.205</p>
      </Col>
      <Col xs={6} className="coll">
        <p>BTC</p>
        <p>Bitcoin</p>
        <p>Price: 19127.205</p>
      </Col>
      <Col xs={6} className="coll">
        <p>BTC</p>
        <p>Bitcoin</p>
        <p>Price: 19127.205</p>
      </Col>
      <Col xs={6} className="coll">
        <p>BTC</p>
        <p>Bitcoin</p>
        <p>Price: 19127.205</p>
      </Col>
    </Row>
  </Container>

};
export default Coins;
