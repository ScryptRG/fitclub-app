import Image from "next/image";
import MemberPicture from "@/app/assets/images/member-reviews/member.jpg";
import QuoteIcon from "@/app/assets/images/member-reviews/bxs--quote-alt-right.png";
import StarIcon from "@/app/assets/images/member-reviews/ic--round-star.png";
import HalfStarIcon from "@/app/assets/images/member-reviews/ic--round-star-half.png";
import { Icon } from "@iconify/react/dist/iconify.js";

// Iniciando o componente MemberReview
export default function MemberReview() {
  // Implementação de uma array que lista todos os reviews dos clientes
  const memberReviews = [
    {
      name: "Jane Cooper",
      role: "Software Developer",
      review:
        "What truly sets this gym apart is their expert team of trainers. The trainers are knowledgeable, approachable, and genuinely invested in helping members achieve their fitness goals. They take the time to understand individual needs and create personalized workout plans, ensuring maximum results and safety.",
      picture: MemberPicture,
    },
  ];

  return (
    <section className="mt-24 bg-secondary-dark relative">
      <div className="max-w-[72rem] mx-auto py-20 px-8">
        {/* Mapeação de cada review */}
        {memberReviews.map((e, i) => (
          <div className="flex gap-5" key={i}>
            <Image
              src={QuoteIcon}
              alt="Quote review icon"
              width={100}
              className="opacity-50 self-start max-sm:absolute left-[70%] top-5"
            />
            <div className="flex flex-col gap-6">
              <h2 className="text-xl font-semibold">MEMBER REVIEW</h2>
              <p className="text-light-gray w-[80%]">{e.review}</p>
              <div className="flex">
                <Image src={StarIcon} alt="Star rating" width={30} />
                <Image src={StarIcon} alt="Star rating" width={30} />
                <Image src={StarIcon} alt="Star rating" width={30} />
                <Image src={StarIcon} alt="Star rating" width={30} />
                <Image src={HalfStarIcon} alt="Star rating" width={30} />
              </div>
              <div className="flex justify-between items-center mt-8">
                <div className="flex gap-4 items-center">
                  <Image
                    src={MemberPicture}
                    alt="Member picture"
                    width={70}
                    className="rounded-full"
                  />
                  <p>
                    <span className="font-semibold">{e.name}</span> <br />
                    {e.role}
                  </p>
                </div>
                <div className="flex gap-5">
                  <button>
                    <Icon
                      icon="fluent:arrow-left-12-filled"
                      width="2rem"
                      height="2rem"
                      className="text-primary-orange"
                    />
                  </button>
                  <button>
                    <Icon
                      icon="fluent:arrow-right-12-filled"
                      width="2rem"
                      height="2rem"
                      className="text-primary-orange"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
