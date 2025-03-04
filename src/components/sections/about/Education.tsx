const Education = () => {
  const educationItems = [
    {
      id: 'edu-1',
      degree: 'Bachelor of Science: Computer Engineering',
      institution: 'Koç University',
      location: 'Istanbul',
      period: '09/2021 – 06/2025',
      description: 'GPA: 3.74/4.00. Track Programs: Artificial Intelligence, Data Analytics, Cryptography-Security-Theory. Ranked 2012th in Nationwide University Entrance Exam among 2 million students.'
    },
    {
      id: 'edu-2',
      degree: 'Bachelor of Arts: Economics (Double Major)',
      institution: 'Koç University',
      location: 'Istanbul',
      period: '10/2022 – 06/2025',
      description: 'GPA: 3.81/4.00. Track Programs: Finance, Macroeconomic Policy and Financial Markets.'
    },
    {
      id: 'edu-3',
      degree: 'High School Diploma',
      institution: 'Besiktas Ataturk Anatolian High School',
      location: 'Istanbul',
      period: 'Graduated',
      description: 'Graduation Grade: 95.88/100'
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Education</h2>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="space-y-8">
          {educationItems.map((item) => (
            <div key={item.id} className="border-l-4 border-[#7D9D9C] pl-4 py-1">
              <h3 className="text-xl font-semibold">{item.degree}</h3>
              <p className="text-gray-700 mb-1">
                {item.institution}, {item.location}
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

export default Education; 