import * as React from 'react';

function ImageCarousel() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };



    return (
        <div>
           


            {/* <AliceCarousel mouseTracking items={images} /> */}


            {/* <h2> Responsive </h2>
            <Slider {...settings}>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
                <div>
                    <h3>7</h3>
                </div>
                <div>
                    <h3>8</h3>
                </div>
            </Slider> */}


            {/* <Stack spacing={2}>
                <Pagination count={10} />
                <Pagination count={10} color="primary" />
            </Stack> */}

        </div>
    );
}

export default ImageCarousel;