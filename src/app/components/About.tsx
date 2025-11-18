export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          My Story
        </h2>
        
        <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
          <p className="text-lg leading-relaxed">
            I’m Elvira Sabirova, a content creator with over 10 years of experience, helping people and products look natural and confident on camera.
            I film in Valencia and edit for clients worldwide.
          </p>
          
          <p className="text-lg leading-relaxed">
            Key facts about me:
          </p>
          
          <div className="bg-primary-50 p-6 rounded-lg border-l-4 border-primary-400">
            <p className="font-semibold text-primary-300">
              <li>10+ years of experience in content creation</li>
              <li>Worked with global brands</li>
              <li>Organic blog with 80,000 followers</li>
              <li>Experience with clients from Spain, the U.S. and Ukraine</li>
              <li>Fast and dynamic editing</li>
              <li>Fluent in four languages: RU / UA / EN / ES</li>
              <li>Skilled at helping people feel comfortable on camera</li>
              <li>Work across all niches and adapt my style to the client’s brand</li>
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
          <span className="bg-[#ec4899] text-white px-4 py-2 rounded-full text-sm font-medium">
            🎥 Filming: Valencia
          </span>
          <span className="bg-[#ec4899] text-white px-4 py-2 rounded-full text-sm font-medium">
            ✂️ Editing: Worldwide
          </span>
          <span className="bg-[#ec4899] text-white px-4 py-2 rounded-full text-sm font-medium">
            🌍 Languages: RU/UA/EN/ES
          </span>
        </div>          
        </div>
      </div>
    </section>
  )
}