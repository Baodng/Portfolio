const skills = [
  { name: "HTML", level: "80%", color: "bg-indigo-600" },
  { name: "CSS", level: "70%", color: "bg-indigo-600" },
  { name: "JavaScript", level: "70%", color: "bg-indigo-600" },
  { name: "NodeJS", level: "50%", color: "bg-indigo-600" },
  { name: "ReactJS", level: "60%", color: "bg-indigo-600" },
  { name: "Java", level: "70%", color: "bg-indigo-600" },
];

const Card = () => {
  return (
    <div className="w-full mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-2">
            <span className="block text-sm font-semibold text-gray-700">
              {skill.name}
            </span>
            <div className="w-full h-3 bg-gray-300 rounded-full relative">
              <div
                className={`h-full rounded-full ${skill.color} transition-all duration-500`}
                style={{ width: skill.level }}
              >
                <span className="absolute right-0 -top-6 text-xs text-white bg-gray-800 px-2 py-0.5 rounded">
                  {skill.level}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
