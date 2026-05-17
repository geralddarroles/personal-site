import React from "react";

// This component renders an image from a source, it can be used for different sections of the app.

const getImageUrl = (imageName) => {
  switch (imageName) {
    case "kid": {
      return require("../../assets/images/stock-image/stock-image-1.jpg");
    }
    case "laptop": {
      return require("../../assets/images/stock-image/stock-image-2.jpg");
    }
    case "laptop-2": {
      return require("../../assets/images/stock-image/stock-image-2.jpg");
    }
    case "volunteer": {
      return require("../../assets/volunteer.jpg");
    }
    case "create": {
      return require("../../assets/illustration-create.png");
    }
    case "mobile": {
      return require("../../assets/illustration-mobile.png");
    }
    case "clutter": {
      return require("../../assets/illustration-clutter.png");
    }
    case "review": {
      return require("../../assets/illustration-review.png");
    }
    case "check": {
      return require("../../assets/illustration-check.png");
    }
    case "preview": {
      return require("../../assets/demo-screen.png");
    }
    case "network": {
      return require("../../assets/network.png");
    }
    case "staff-1": {
      return require("../../assets/staff1.jpeg");
    }
    case "staff-2": {
      return require("../../assets/staff2.jpg");
    }
    case "add-ques": {
      return require("../../assets/tutorial-images/add-ques.jpg");
    }
    case "create-form": {
      return require("../../assets/tutorial-images/create-form.jpg");
    }
    case "details-send": {
      return require("../../assets/tutorial-images/details-send.jpg");
    }
    case "edit-form": {
      return require("../../assets/tutorial-images/edit-form.jpg");
    }
    case "select-form": {
      return require("../../assets/tutorial-images/select-form.jpg");
    }
    case "send-new": {
      return require("../../assets/tutorial-images/send-new.jpg");
    }
    case "other-features": {
      return require("../../assets/tutorial-images/other-features.jpg");
    }
    case "review-results": {
      return require("../../assets/tutorial-images/review-results.jpg");
    }
    case "placeholder": {
      return require("../../assets/images/stock-image/placeholder.jpg");
    }
    case "thinking": {
      return require("../../assets/images/stock-image/thinking.jpeg");
    }
    case "proposal": {
      return require("../../assets/images/stock-image/proposal.jpeg");
    }
    case "zombie-chase": {
      return require("../../assets/images/stock-image/zombie-chase.jpeg");
    }
    case "car-on-fire": {
      return require("../../assets/images/stock-image/car-on-fire.jpg");
    }
    case "beaten-man": {
      return require("../../assets/images/stock-image/beaten-man.jpeg");
    }
    case "mentor": {
      return require("../../assets/images/stock-image/mentors.jpeg");
    }
    case "girls": {
      return require("../../assets/images/stock-image/girls.jpeg");
    }
    case "nursing": {
      return require("../../assets/images/stock-image/nursing.jpeg");
    }
    case "dead-lift": {
      return require("../../assets/images/stock-image/dead-lift.jpeg");
    }
    case "predict": {
      return require("../../assets/images/stock-image/predict.jpeg");
    }
    case "score": {
      return require("../../assets/images/stock-image/score.jpeg");
    }
    case "vm": {
      return require("../../assets/images/stock-image/volunteer-admin.jpeg");
    }
    case "professional": {
      return require("../../assets/images/stock-image/professional.jpeg");
    }
    case "gerald-no-bg": {
      return require("../../assets/geraldNoBg.PNG");
    }
    case "snack-counter": {
      return require("../../assets/snackCounter.png");
    }
    case "preview2": {
      return require("../../assets/preview2.png");
    }
    case "epicdance": {
      return require("../../assets/epicdance.GIF");
    }
    case "pocketwallet": {
      return require("../../assets/pocketwallet.png");
    }
    case "office": {
      return require("../../assets/office.jpeg");
    }
    case "education": {
      return require("../../assets/education.jpeg");
    }
    case "programming": {
      return require("../../assets/programming.jpg");
    }
    case "draw": {
      return require("../../assets/images/ImageIcons/draw.png");
    }
    case "epic-1": {
      return require("../../assets/landscape-epic-1.jpg");
    }
    case "promo1": {
      return require("../../assets/promo1.png");
    }
    case "promo2": {
      return require("../../assets/promo2.png");
    }
    case "promo3": {
      return require("../../assets/promo3.png");
    }
    case "promoConnect1": {
      return require("../../assets/PromoConnect1.jpg");
    }
    case "promoConnect2": {
      return require("../../assets/PromoConnect2.jpg");
    }
    case "promoConnect3": {
      return require("../../assets/PromoConnect3.jpg");
    }
    case "promoConnect4": {
      return require("../../assets/PromoConnect4.jpg");
    }
    case "promoConnect5": {
      return require("../../assets/PromoConnect5.jpg");
    }
    case "icon": {
      return require("../../assets/icon.png");
    }
    case "landscape-epic": {
      return require("../../assets/LandscapeEpicDance.jpg");
    }
    case "press1": {
      return require("../../assets/pressimage1.PNG");
    }
    case "press2": {
      return require("../../assets/pressimage2.PNG");
    }
    case "press3": {
      return require("../../assets/pressimage3.PNG");
    }
    case "press4": {
      return require("../../assets/pressimage4.PNG");
    }
    case "press5": {
      return require("../../assets/pressimage5.PNG");
    }
    case "press6": {
      return require("../../assets/pressimage6.jpeg");
    }
    case "goodself-logo": {
      return require("../../assets/goodself_logo.jpeg");
    }
    case "goodself-page": {
      return require("../../assets/goodself__page.jpeg");
    }
    default:
      return null;
  }
};

const Image = ({ image, style, alt, inlineStyle }) => {
  if (!image) {
    return null;
  }

  const imageUrl = getImageUrl(image);

  return <img src={imageUrl} style={inlineStyle} className={style} alt={alt} />;
};

export default Image;
