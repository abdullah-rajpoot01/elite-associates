const teamMembers = [
  {
    name: "Ahmed Raza",
    title: "Founder & CEO",
    imageUrl:
      "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Hassan Ali",
    title: "Senior Property Consultant",
    imageUrl:
      "https://randomuser.me/api/portraits/men/13.jpg",
  },
  {
    name: "Muhammad Usman",
    title: "Sales & Leasing Manager",
    imageUrl:
      "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    name: "Ali Raza",
    title: "Real Estate Advisor",
    imageUrl:
      "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "Bilal Khan",
    title: "Commercial Property Specialist",
    imageUrl:
      "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Saad Ahmed",
    title: "Residential Property Consultant",
    imageUrl:
      "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    name: "Fahad Iqbal",
    title: "Investment & Market Analyst",
    imageUrl:
      "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    name: "Omar Farooq",
    title: "Client Relations Manager",
    imageUrl:
      "https://randomuser.me/api/portraits/men/9.jpg",
  },
];
const Team = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-xl text-center">
        <b className="text-center font-medium text-muted-foreground text-sm uppercase">
          We&apos;re hiring!
        </b>
        <h2 className="mt-4 font-medium text-4xl tracking-[-0.04em] sm:text-[2.75rem]">
          Meet Our Team
        </h2>
        <p className="mt-4 text-base text-muted-foreground tracking-[-0.01em] sm:text-xl">
          Our dedicated team of real estate professionals is committed to helping you buy, sell, and rent properties with confidence.
        </p>
      </div>

      <div className="mx-auto mt-20 grid w-full max-w-(--breakpoint-lg) grid-cols-2 gap-12 sm:grid-cols-3 md:grid-cols-4">
        {teamMembers.map((member) => (
          <div className="text-center group" key={member.name}>
            <img
              alt={member.name}
              className="mx-auto h-20 w-20 rounded-full bg-secondary object-cover group-hover:animate-sink group-hover:animate-iteration-count-infinite "
              height={120}
              src={member.imageUrl}
              width={120}
            />
            <h3 className="mt-5 font-medium text-lg">{member.name}</h3>
            <p className="text-muted-foreground">{member.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
