import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData, useParams } from "react-router-dom";
import EditorsInsight from "../EditorsInsight/EditorsInsight";
import useTitle from "../../../Hooks/useTitle";

const News = () => {
  const {id} = useParams();
  console.log(id);
  
  const news = useLoaderData();
  //   console.log(news);

  const { _id, title, image_url, details, category_id } = news;

  useTitle('News');


  return (
    <div>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>

          <Link to={`/category/${category_id}`}>
            <Button variant="danger">
              <FaArrowLeft /> All news in this category
            </Button>
          </Link>
        </Card.Body>
      </Card>
      
      <EditorsInsight></EditorsInsight>
    </div>
  );
};

export default News;
