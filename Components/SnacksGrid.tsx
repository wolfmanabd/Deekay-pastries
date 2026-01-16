import SnackCard from "./SnackCard";

const snacks = [
  {
    id: "meat-pie",
    name: "Meat Pie",
    price: 1200,
    image: "/img/meat-pies.png",
    description:
      "Our signature meat pie is packed with well-seasoned minced beef, potatoes, and carrots, baked in a flaky golden crust. Perfect for breakfast, lunch, or events.",
  },
  {
    id: "sausage-roll",
    name: "Sausage Roll",
    price: 800,
    image: "/img/sausage-rolls.png",
    description:
      "Soft pastry wrapped around juicy sausage filling. A crowd favorite for offices, parties, and quick bites.",
  },
  {
    id: "doughnut",
    name: "Doughnut",
    price: 500,
    image: "/img/doughnuts.png",
    description:
      "Light, fluffy, and slightly sweet doughnuts fried to perfection. Best enjoyed fresh.",
  },
  {
    id: "egg-roll",
    name: "Egg Roll",
    price: 700,
    image: "/img/eggbuns.png",
    description:
      "Boiled egg wrapped in soft dough and fried till golden brown. A Nigerian classic.",
  },
  {
    id: "buns",
    name: "Buns",
    price: 400,
    image: "/img/buns.png",
    description:
      "Crunchy on the outside, soft on the inside. Sweet buns made fresh daily.",
  },
];

export default function SnacksGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid gap-12 sm:grid-cols-2 md:grid-cols-3">
        {snacks.map((snack) => (
          <SnackCard key={snack.id} {...snack} />
        ))}
      </div>
    </section>
  );
}
