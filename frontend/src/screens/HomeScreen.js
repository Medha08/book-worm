import React from 'react';
import { Row, Col } from 'react-bootstrap';
// import products from '../fixtures/products';
// import axios from 'axios';
import Product from '../components/Product';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Message from '../components/Message';
import Loader from '../components/Loader';

const HomeScreen = () => {
  // const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    // const fetchProducts = async () => {
    //   const { data } = await axios.get('api/products');
    //   setProducts(data);
    // };
    // fetchProducts();
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h1>Latest products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
              <Product product={product}></Product>
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
