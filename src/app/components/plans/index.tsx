import CheckIcon from "@/app/assets/images/plans/heroicons--check-circle.png";
import Image from "next/image";

// Iniciando o componente Plans
export default function Plans() {
  
  // Implementação de uma array de objetos para armazenar as informações das planos (nome do plano, preço, benefícios).
  const plans = [
    {
      plan: "Basic Plan",
      price: 16,
      benefits: ["Smart workout plan", "At home workouts"],
    },
    {
      plan: "Weekly Plan",
      price: 25,
      benefits: ["PRO Gyms", "Smart workout plan", "At home workouts"],
    },
    {
      plan: "Monthly Plan",
      price: 45,
      benefits: [
        "ELITE Gyms & Classes",
        "PRO Gyms",
        "Smart workout plan",
        "At home workouts",
        "Personal Training",
      ],
    },
  ];

  return (
    <section>
      <h2 className="font-semibold text-4xl text-center">OUR PRICING PLAN</h2>
      <p className="text-light-gray text-center w-[60%] mx-auto my-8">
        Our pricing plan comes with various membership tiers, each tailored to
        cater to different preferences and fitness aspirations.
      </p>
      <div className="flex flex-wrap justify-center gap-6">

        {/* Mapeação das informações do plano */}
        {plans.map((e, i) => (
          <div
            className="w-[23rem] py-8 px-5 bg-secondary-dark border border-secondary-orange border-opacity-20 rounded-lg hover:bg-dark-gray hover:border-primary-orange duration-300"
            key={i}>
            <h3 className="font-semibold text-xl">{e.plan}</h3>
            <h4 className="font-bold text-3xl my-5">R$ {e.price}</h4>
            <hr />
            <ul className="my-8 leading-10 h-[12rem]">

              {/* Mapeação dos benefícios do plano */}
              {e.benefits.map((benefit, i) => (
                <li key={i}>
                  <Image
                    src={CheckIcon}
                    alt=""
                    width={20}
                    className="inline mr-2"
                  />
                  {benefit}
                </li>
              ))}
            </ul>
            <button className="text-primary-orange border border-primary-orange py-4 w-full rounded hover:bg-primary-orange hover:text-white duration-200">
              Join now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
