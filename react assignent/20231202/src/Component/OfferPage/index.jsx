import React from "react";
import "./style.css";
import { Card } from "react-bootstrap";
function OfferPage(props) {
  const { offer1 } = props || {};

  return (
    <>
      <div className="card-main-cont">
        {offer1.map((image, index) => {
          return (
            <Card className="card-cont">
              <Card.Body className="body-cont">
                <img className="logo1" src={image.logoImg} />
                <Card.Text className="txt">{image.title}</Card.Text>
                <Card.Text className="card-txt1">{image.off}</Card.Text>
                <Card.Text className="card-txt">
                  {image.subTitle}
                  <img className="phone-img" src={image.saleImage} />
                </Card.Text>
                <button className="offer-btn">{image.spcOffer}</button>
                <Card.Text className="incl-offer">
                  {image.incAllOfers}
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  );
}
export default OfferPage;
