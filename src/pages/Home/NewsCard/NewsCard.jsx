/* eslint-disable react/prop-types */
import React from "react";
import { Button, Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import moment from "moment";
import {
  FaRegBookmark,
  FaShareAlt,
  FaRegEye,
  FaStar,
  FaRegStar,
} from "react-icons/fa";
import Rating from "react-rating";

const NewsCard = ({ news }) => {
  const { _id, title, image_url, details, author, rating, total_view } = news;
  return (
    <Card className="mb-4">
      <Card.Header>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <Image
              style={{ width: "45px", height: "45px" }}
              src={author?.img}
              roundedCircle
            />
            <div className="ps-2">
              <p className="mb-0">{author?.name}</p>
              <p className="mb-0">
                {moment(author?.published_date).format("YYYY-MM-DD")}
              </p>
            </div>
          </div>
          <div className="d-flex gap-2">
            <FaRegBookmark />
            <FaShareAlt />
          </div>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img className="py-2" variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250 ? <>{details}</> :
            <>
              {details.slice(0, 250)} ...
                <Link className="d-block pt-2" to={`/news/${_id}`}>Read More</Link>
            </>
          }
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-2">
            {/* <div className="text-warning">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div> */}

            <Rating
              placeholderRating={rating?.number}
              readonly
              emptySymbol= {<FaRegStar />}
              placeholderSymbol= {<FaStar className="text-warning" />}
              fullSymbol= {<FaStar />}
            ></Rating>
            <span>{rating?.number}</span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <FaRegEye />
            <span>{total_view}</span>
          </div>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
