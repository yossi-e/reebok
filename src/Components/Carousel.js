import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import { push } from "./services/Analytics";

import image1 from "../static/img/shoes/desktop/1L.png";
import image2 from "../static/img/shoes/desktop/2L.png";
import image3 from "../static/img/shoes/desktop/3L.png";
import image4 from "../static/img/shoes/desktop/4L.png";
import image5 from "../static/img/shoes/desktop/5L.png";
import image6 from "../static/img/shoes/desktop/6L.png";

import './Carousel.scss';

class Carousel extends Component {
    constructor() {
        super();
        this.goToSlider= this.goToSlider.bind(this);
        this.slideToNext= this.slideToNext.bind(this);
        this.slideToPrev = this.slideToPrev.bind(this);
        this.state = {
            options:{
                items:1,
                startPosition:0,
                loop:true,
                onInitialized:this.someFunc,
                dots:false,
                //nav:true,
            },
            items:[
                <div className="item" key={1}><img alt="shoe" src={image1}/></div>,
                <div className="item" key={2}><img alt="shoe" src={image2}/></div>,
                <div className="item" key={3}><img alt="shoe" src={image3}/></div>,
                <div className="item" key={4}><img alt="shoe" src={image4}/></div>,
                <div className="item" key={5}><img alt="shoe" src={image5}/></div>,
                <div className="item" key={6}><img alt="shoe" src={image6}/></div>,
            ],
            carousel:null,
        }
    }

    someFunc(){
        window.dispatchEvent(new Event('resize'));
    }

    componentDidMount(){
        
    }

    goToSlider(idx){
        this.carousel.to(idx,100);
    }

    slideToNext(){
        this.carousel.next();
        push('Image Navigation','Right');
    }

    slideToPrev(){
        this.carousel.prev();
        push('Image Navigation','Left');
    }



    render() {
        return (
            <div className="owl-wrap" dir="ltr">
                <OwlCarousel
                    ref={node=>this.carousel = node}
                    className="owl-rtl"
                    {...this.state.options}
                >
                    {this.state.items}
                </OwlCarousel>
                <div className="nav-btns">
				    <button className="btn prev" onClick={() => this.slideToPrev()}></button>
				    <button className="btn next" onClick={() => this.slideToNext()}></button>
                </div>
                <div className="gallery">
                    <div className="gallery-img" onClick={()=>  this.goToSlider(0)}><img alt="shoe" src={image1}/></div>
                    <div className="gallery-img" onClick={()=>  this.goToSlider(1)}><img alt="shoe" src={image2}/></div>
                    <div className="gallery-img" onClick={()=>  this.goToSlider(2)}><img alt="shoe" src={image3}/></div>
                    <div className="gallery-img" onClick={()=>  this.goToSlider(3)}><img alt="shoe" src={image4}/></div>
                    <div className="gallery-img" onClick={()=>  this.goToSlider(4)}><img alt="shoe" src={image5}/></div>
                    <div className="gallery-img" onClick={()=>  this.goToSlider(5)}><img alt="shoe" src={image6}/></div>
                </div>
            </div>
        );
    }
}

export default Carousel;