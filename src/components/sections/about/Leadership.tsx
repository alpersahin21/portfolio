const Leadership = () => {
  const leadershipItems = [
    {
      id: 'lead-1',
      position: 'Executive Board Member of Social Affairs Committee',
      organization: 'Marketing Club of Koç University',
      period: 'Current',
      description: 'Spearhead the organization of social activities for 800+ club members, overseeing event planning, logistics and communication to create engaging and enjoyable experiences for all participants.'
    },
    {
      id: 'lead-2',
      position: 'Member of KWORKS Experience Program',
      organization: 'Koç University Entrepreneurship Research Center',
      period: 'Current',
      description: 'Immersed in the KWORKS ecosystem, gaining hands-on experience in startup acceleration programs, collaborating directly with KWORKS experts.'
    },
    {
      id: 'lead-3',
      position: 'Member of BTM Kamp Program',
      organization: 'Bilgiyi Ticarilestirme Merkezi Istanbul',
      period: '10/2023 – 03/2024',
      description: 'Participated in a program designed to support entrepreneurs in transforming innovative ideas into viable business models and becoming integral parts of the entrepreneurship ecosystem.'
    },
    {
      id: 'lead-4',
      position: 'Active Member',
      organization: 'Koç University Diving Club',
      period: '10/2021 - Present',
      description: 'Traveled to various coastal regions in Turkey, honing scuba diving skills and exploring diverse marine ecosystems under the guidance of experienced instructors. Collaborated with club members to plan dive trips, prioritize safety protocols, and foster a shared passion for underwater exploration and marine conservation.'
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Leadership & Activities</h2>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="space-y-8">
          {leadershipItems.map((item) => (
            <div key={item.id} className="border-l-4 border-[#7D9D9C] pl-4 py-1">
              <h3 className="text-xl font-semibold">{item.position}</h3>
              <p className="text-gray-700 mb-1">
                {item.organization}
              </p>
              <p className="text-gray-700 text-sm mb-2">{item.period}</p>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership; 