import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

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
      modules={[EffectCoverflow, Pagination]}
      className="swiper_container"
    >
      {/* Card 1: What is Skill&Tell */}
      <SwiperSlide>
        <div className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
          <div
            className="h-48 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://cdn.builder.io/api/v1/image/assets/TEMP/980f340ee24e3c811a2d8dd673529827e14fd1528104ee4c168bd92035e13586?placeholderIfAbsent=true&apiKey=0e4114b9236c4c31975105344d580752')",
            }}
          >
            <div className="bg-gradient-to-t from-black to-transparent h-full flex items-end p-4">
              <h3 className="text-white text-2xl font-bold">What is Skill&Tell</h3>
            </div>
          </div>
          <div className="p-5">
            <p className="text-gray-700 text-base">
              Skill&Tell is a club at ENSIA, founded in 2021 by students who wanted to make a difference. We help you improve your technical skills while also building essential soft skills like communication, teamwork, and leadership.
            </p>
          </div>
        </div>
      </SwiperSlide>

      {/* Card 2: Vision of Skill&Tell */}
      <SwiperSlide>
        <div className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
          <div
            className="h-48 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://cdn.builder.io/api/v1/image/assets/TEMP/b2c4e53c86fe6cc7219f8750aed219c5f077a6b85295cbcfcf6538b43e037456?placeholderIfAbsent=true&apiKey=0e4114b9236c4c31975105344d580752')",
            }}
          >
            <div className="bg-gradient-to-t from-black to-transparent h-full flex items-end p-4">
              <h3 className="text-white text-2xl font-bold">Our Vision</h3>
            </div>
          </div>
          <div className="p-5">
            <p className="text-gray-700 text-base">
              At Skill&Tell, our vision is to build a strong community of students who share knowledge and skills, helping each other grow both personally and professionally.
            </p>
          </div>
        </div>
      </SwiperSlide>

      {/* Card 3: Achievements */}
      
    </Swiper>
  </div>
);

export default Swiper_Cards;
