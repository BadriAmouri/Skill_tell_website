import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Swiper_Cards = () => (
  <div className="relative">
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView="auto"
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 90,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{ clickable: true }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="swiper_container"
    >
      <SwiperSlide>
        <div className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
          <div
            className="h-48 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://via.placeholder.com/400')", // Replace with your image URL
            }}
          >
            <div className="bg-gradient-to-t from-black to-transparent h-full flex items-end p-4">
              <h3 className="text-white text-2xl font-bold">What is Skill&Tell</h3>
            </div>
          </div>
          <div className="p-5">
            <p className="text-gray-700 text-base">
              This is a simple description for the card. It provides a brief overview of the content. You can add more details or customize it as needed.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
          <div
            className="h-48 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://via.placeholder.com/400')", // Replace with your image URL
            }}
          >
            <div className="bg-gradient-to-t from-black to-transparent h-full flex items-end p-4">
              <h3 className="text-white text-2xl font-bold">What is the vision of Skill&Tell</h3>
            </div>
          </div>
          <div className="p-5">
            <p className="text-gray-700 text-base">
              This is a simple description for the card. It provides a brief overview of the content. You can add more details or customize it as needed.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
          <div
            className="h-48 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://via.placeholder.com/400')", // Replace with your image URL
            }}
          >
            <div className="bg-gradient-to-t from-black to-transparent h-full flex items-end p-4">
              <h3 className="text-white text-2xl font-bold">Our achievements</h3>
            </div>
          </div>
          <div className="p-5">
            <p className="text-gray-700 text-base">
              This is a simple description for the card. It provides a brief overview of the content. You can add more details or customize it as needed.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
        <div className="swiper-button-prev text-purple-500 hover:text-purple-700" />
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
        <div className="swiper-button-next text-purple-500 hover:text-purple-700" />
      </div>
    </Swiper>
  </div>
);

export default Swiper_Cards;
