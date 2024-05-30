
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    src: 'https://lh3.googleusercontent.com/p/AF1QipNLIWDqzPD9nwRrMT6dD9okkcqRCHNsFUny547c=s680-w680-h510',
    altText: 'Slide 1',
    caption: 'Slide 1',
    key: 1,
  },
  {
    src: 'https://lh3.googleusercontent.com/p/AF1QipMQpXirpdOFARofQH7WvdjA19HGjgD0K6RhuZhq=s680-w680-h510',
    altText: 'Slide 2',
    caption: 'Slide 2',
    key: 2,
  },
  {
    src: 'https://lh3.googleusercontent.com/p/AF1QipOG2DgO17eHMe0FUwsv5dOSOcPj2PwTZJ2Zn6B4=s680-w680-h510',
    altText: 'Slide 3',
    caption: 'Slide 3',
    key: 3,
  },
];

function CarruselPrueba(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} style={{ width: "50%", height: "30rem", objectFit: "cover" }} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default CarruselPrueba;
