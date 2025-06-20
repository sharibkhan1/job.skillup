import React from 'react';
import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';

const cardData = [
  {
    titleImage: '/images/67e31272248db95ad88916e7_cfos-logo.svg',
    userImage: '/images/67e311ff0c2b4cfbe4669670_avatar-1.avif',
    points: [
      'Smooth out your payables',
      'Conserve your cash',
      'Grow your business',
    ],
  },
  {
    titleImage: '/images/67e31272248db95ad88916e7_cfos-logo.svg',
    userImage: '/images/67e311ff0c2b4cfbe4669670_avatar-1.avif',
    points: [
      'Offer flexible payments',
      'Pull cash forward',
      'Optimize financial workflows',
    ],
  },
  {
    titleImage: '/images/67e31272248db95ad88916e7_cfos-logo.svg',
    userImage: '/images/67e311ff0c2b4cfbe4669670_avatar-1.avif',
    points: [
      'Shorten DSO',
      'Unlock working capital',
      'Master cash flow conversion',
    ],
  },
  {
    titleImage: '/images/67e31272248db95ad88916e7_cfos-logo.svg',
    userImage: '/images/67e311ff0c2b4cfbe4669670_avatar-1.avif',
    points: [
      'Close deals faster',
      'Streamline renewals',
      'Differentiate your offers',
    ],
  },
];

const SolutionsContainer = () => {
  return (
    <div className="px-4 sm:px-6 md:px-12 xl:px-20 2xl:px-[18rem]">
      <div className="w-full rounded-[3rem] bg-[#052B28] text-white py-20 md:py-32 px-6 sm:px-10 lg:px-16">
<div className="flex flex-col lg:flex-row justify-between items-center text-center md:text-left mb-12 gap-y-6">
  <h2 className="text-3xl sm:text-5xl md:text-6xl font-light w-full md:w-auto">
    Find your solution
  </h2>
  <button className="bg-gradient-to-r from-[#BFFFC0] to-[#A0ECA0] text-black text-xl font-semibold rounded-md px-10 py-3 w-fit md:w-auto">
    Talk to us
  </button>
</div>


        <div className="grid grid-cols-1 md:mt-20 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-[#013D3D] space-y-6 rounded-xl px-6 py-10 flex flex-col items-center text-center gap-5"
            >
              {/* Top Icon/Image */}
              <Image
                src={card.titleImage}
                alt="role icon"
                width={100}
                height={76}
              />

              {/* User Image */}
              <Image
                src={card.userImage}
                alt="user avatar"
                width={104}
                height={64}
                className="rounded-full"
              />

              {/* Bullet Points */}
              <ul className="text-left text-sm text-white space-y-2">
                {card.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="text-white w-4 h-4 mt-1" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="inline-flex items-end gap-2 text-md font-medium text-[#9FE29E] hover:text-[#478847] group transition-colors duration-300 cursor-pointer">
  Learn more
  <ArrowRight
    className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1"
  />
</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionsContainer;
