import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import { push } from "./services/Analytics";
import './Carousel.scss';

const jsonImages = [
    "./shoes/desktop/1L.png",
    "./shoes/desktop/2L.png",
    "./shoes/desktop/3L.png",
    "./shoes/desktop/4L.png",
    "./shoes/desktop/5L.png",
    "./shoes/desktop/6L.png"
];

class Carousel extends Component {
    constructor() {
        super();
        this.slideToIndex = this.slideToIndex.bind(this);
        this.slideToNext = this.slideToNext.bind(this);
        this.slideToPrev = this.slideToPrev.bind(this);
        this.state = {
            options: {
                items: 1,
                startPosition: 0,
                loop: true,
                onInitialized: this.fixSliderBug,
                dots: false,
            },
            carousel: null,
        }
    }

    fixSliderBug() {
        window.dispatchEvent(new Event('resize'));
    }

    componentDidMount() {

    }

    slideToIndex(event) {
        this.carousel.to(parseInt(event.target.dataset.idx), 100);
    }

    slideToNext() {
        this.carousel.next();
        push('Image Navigation', 'Right');
    }

    slideToPrev() {
        this.carousel.prev();
        push('Image Navigation', 'Left');
    }

    setCarouselAndGalleryItems(isCarusel) {
        return jsonImages.map((item, i) => {
            return isCarusel ?
                <div className="item" key={i}><img alt="shoe" src={item} /></div> :
                <div className="gallery-img" key={i} onClick={this.slideToIndex}><img data-idx={i} alt="shoe" src={item} /></div>
        });
    }

    render() {
        return (
            <div className="owl-wrap" dir="ltr">
                <OwlCarousel
                    ref={node => this.carousel = node}
                    className="owl-rtl"
                    {...this.state.options}
                >
                    {this.setCarouselAndGalleryItems(true)}
                </OwlCarousel>
                <div className="nav-btns">
                    <button className="btn prev" onClick={this.slideToPrev}></button>
                    <button className="btn next" onClick={this.slideToNext}></button>
                </div>
                <div className="gallery">
                    {this.setCarouselAndGalleryItems(false)}
                </div>
            </div>
        );
    }
}

export default Carousel;