'use client';
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import { Image } from '@think-zambia-foundation/api';
import { HeroImage } from './HeroImage';

type PropType = {
  slides: Image[],
  options?: EmblaOptionsType,
  overlay?: boolean,
  buttonPosition?: "top" | "bottom"
  imageHeight?: number
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options, overlay, buttonPosition = "bottom" } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <div className="embla">
      {buttonPosition === "top" && (
        <div className="embla__controls">
          <div className="embla__buttons">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>
        </div>
      )}
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <HeroImage
              key={index.imageId}
              header={index.title}
              subHeader={index.description}
              src={index.src}
              height={props.imageHeight ?? 800}
              gradient={overlay}
            />
          ))}
        </div>
      </div>
      {buttonPosition === "bottom" && (
        <div className="embla__controls">
          <div className="embla__buttons">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>
        </div>
      )}
    </div>
  )
}

export default EmblaCarousel
