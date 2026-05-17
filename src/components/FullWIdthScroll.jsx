import React from "react";
import {
  Animator,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut
} from "react-scroll-motion";
var FullWidthScrollAnimator = ({ animation, style, children }) => {
  var animator = null;

  switch (animation) {
    case "sticky":
      {
        animator = batch(Sticky());
      }
      break;
    case "beginning":
      {
        animator = batch(Sticky(), Fade());
      }
      break;
    case "fadeInAndOut":
      {
        animator = batch(Sticky(), Fade());
      }
      break;
    case "fadeIn":
      {
        animator = batch(StickyIn(), FadeIn(0, 2));
      }
      break;
    case "moveInAndOut":
      {
        animator = batch(Sticky(), Move());
      }
      break;
    case "topToBottom":
      {
        animator = batch(MoveIn(0, -1000), Sticky(70, 60), Fade());
      }
      break;
    case "bottomToTop":
      {
        animator = batch(MoveIn(0, 1000), Sticky(25, 50), Fade());
      }
      break;
    case "topToBottomSticky":
      {
        animator = batch(MoveIn(0, -1000), Sticky(70, 60), Fade());
      }
      break;
    case "bottomToTopSticky":
      {
        animator = batch(MoveIn(0, 1000), Sticky(25, 50), Fade());
      }
      break;
    case "stickBG":
      {
        animator = batch(Sticky(50, 50), Fade());
      }
      break;
    case "moveAndFade":
      {
        animator = batch(Fade(-50, 1), Sticky());
      }
      break;
    case "moveLeftAndFade":
      {
        animator = batch(Fade(), Sticky());
      }
      break;
    default: {
      animator = batch();
    }
  }

  if (style) {
    return (
      <Animator className={style} animation={animator}>
        {children}
      </Animator>
    );
  }

  return (
    <Animator className="w-full h-full" animation={animator}>
      {children}
    </Animator>
  );
};

export default FullWidthScrollAnimator;
