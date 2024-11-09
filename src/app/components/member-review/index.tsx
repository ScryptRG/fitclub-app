"use client";
import Image from "next/image";
import JohnPicture from "@/app/assets/images/member-reviews/member.jpg";
import MaryPicture from "@/app/assets/images/member-reviews/mary.png";
import RyanPicture from "@/app/assets/images/member-reviews/ryan.png";
import QuoteIcon from "@/app/assets/images/member-reviews/bxs--quote-alt-right.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";

// Iniciando o componente MemberReview
export default function MemberReview() {
  const [reviewIndex, setReviewIndex] = useState(0);

  const [instance, setInstance] = useState("first");

  // Implementação de uma array que lista todos os reviews dos clientes como nome, cargo, depoimento, avaliação, foto
  const memberReviews = [
    {
      name: "John Cooper",
      role: "Lawyer",
      review:
        "What truly sets this gym apart is their expert team of trainers. The trainers are knowledgeable, approachable, and genuinely invested in helping members achieve their fitness goals. They take the time to understand individual needs and create personalized workout plans, ensuring maximum results and safety.",
      rating: 4,
      picture: JohnPicture,
    },
    {
      name: "Mary Dan",
      role: "Designer",
      review:
        "Joining this gym has been a game-changer! The trainers here are top-notch—knowledgeable, friendly, and truly invested in helping each member succeed. They take the time to understand individual goals, creating personalized workout plans that actually work. Not only do they push you to achieve the best results, but they also make sure every exercise is done safely and effectively. The atmosphere is supportive and motivating, making it a pleasure to come back every day. If you're serious about your fitness journey, this is the place to be!",
      rating: 2,
      picture: MaryPicture,
    },
    {
      name: "Ryan Goodwin",
      role: "Software Developer",
      review:
        "I can't say enough good things about this gym! The trainers are fantastic—experts who really know their stuff and are always eager to help. They take the time to get to know you, understand your goals, and build custom workout plans that fit your needs. I've seen great progress since I joined, and I genuinely look forward to each session. The trainers' focus on proper form and safety is a huge plus, too; you can tell they care about your long-term health and success. This is hands down the best gym experience I've ever had!",
      rating: 5,
      picture: RyanPicture,
    },
  ];

  useEffect(() => {
    // Se o índice do review for 0, define a instância como "first"
    if (reviewIndex === 0) {
      setInstance("first");
    }
    // Se o índice do review for a mesmo do número de elementos do memberReviews, define a instância como "last"
    else if (reviewIndex === memberReviews.length - 1) {
      setInstance("last");
    }
    // Se o índice do review for outro, define a instância como "middle"
    else {
      setInstance("middle");
    }
  }, [reviewIndex]); // Executa o efeito toda vez que reviewIndex muda

  return (
    <section className="mt-24 bg-secondary-dark relative">
      <div className="max-w-[72rem] mx-auto py-20 px-8">
        {/* Mapeação de cada review */}
        <div className="flex gap-5">
          <Image
            src={QuoteIcon}
            alt="Quote review icon"
            width={100}
            className="opacity-50 self-start max-sm:absolute left-[70%] top-5"
          />
          <div className="flex flex-col gap-6">
            <h2 className="text-xl font-semibold">MEMBER REVIEW</h2>
            <p className="text-light-gray w-[80%]">
              {memberReviews[reviewIndex].review}
            </p>
            <div className="flex">
              {
                // Cria um array com o número de estrelas preenchidas baseado no rating do review atual
                Array(memberReviews[reviewIndex].rating)
                  .fill(0)
                  .map((_, i) => (
                    <Icon
                      icon="ic:round-star"
                      width="1.8em"
                      height="1.8em"
                      className="text-primary-orange"
                      key={i}
                    />
                  ))
              }
              {
                // Cria um array com o número de estrelas vazias para completar até 5 estrelas
                Array(5 - memberReviews[reviewIndex].rating)
                  .fill(0)
                  .map((_, i) => (
                    <Icon
                      icon="ic:round-star-outline"
                      width="1.8em"
                      height="1.8em"
                      className="text-primary-orange"
                      key={i}
                    />
                  ))
              }
            </div>
            <div className="flex justify-between items-center mt-8">
              <div className="flex gap-4 items-center">
                <Image
                  src={memberReviews[reviewIndex].picture}
                  alt="Member picture"
                  width={70}
                  className="rounded-full"
                />
                <p>
                  <span className="font-semibold">
                    {memberReviews[reviewIndex].name}
                  </span>{" "}
                  <br />
                  {memberReviews[reviewIndex].role}
                </p>
              </div>
              <div className="flex gap-5">
                <button
                  onClick={() => {
                    if (instance === "middle" || instance === "last") {
                      setReviewIndex(reviewIndex - 1);
                    }
                  }}>
                  <Icon
                    icon="fluent:arrow-left-12-filled"
                    width="2rem"
                    height="2rem"
                    className={`text-primary-orange ${
                      instance === "first" && "opacity-40 cursor-default"
                    }`}
                  />
                </button>
                <button
                  onClick={() => {
                    if (instance === "middle" || instance === "first") {
                      setReviewIndex(reviewIndex + 1);
                    }
                  }}>
                  <Icon
                    icon="fluent:arrow-right-12-filled"
                    width="2rem"
                    height="2rem"
                    className={`text-primary-orange ${
                      instance === "last" && "opacity-40 cursor-default"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
