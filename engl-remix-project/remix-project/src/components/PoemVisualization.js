import React from 'react'

const PoemVisualization = () => {
    const [expandedSection, setExpandedSection] = React.useState(null);
    const [hoveredSection, setHoveredSection] = React.useState(null);

    const poemSections = [
      "The sight decided by officer.",
      "The officer deciding by blood sugar, last blow job received, and relative level of disdain for vermin.",
      "Domestic terminals do not have this railing at the exit.",
      "As we wait for her to exit customs, our sightline is obstructed by opaque sliding doors, the twisting hallway behind it, the small convex mirror hung in the corner in which we catch shapes growing larger, into hair color, into gait, into age, and finally, as they turn, into kin.",
      "The hours I've stood there, behind that railing.",
      "The hours I've stood to savor the seconds earlier, seconds more by which my eye may reach the disembarking and exclaimed, \"She's here,\" watched, from shadow to shape to gait, my imagined life come to life and approach, briefly, me.",
      "My imagined life crying hot in my ear.",
      "Ink on its fingerpads.",
      "This will be the last I write of it directly, I say each time.",
      "This is a light that lights everything and dimly.",
      "All my waiting at this railing.",
      "All my writing is this squint."
    ];

    const backgroundImages = [
      "https://www.policechiefmagazine.org/wp-content/uploads/portland-jetport_9_11-300x215.jpg",
      "https://lexipol.brightspotcdn.com/dims4/default/35a294e/2147483647/strip/true/crop/886x499+0+7/resize/1000x563!/quality/90/?url=https:%2F%2Fk1-prod-lexipol.s3.us-east-2.amazonaws.com%2Fbrightspot%2F6c%2Fc9%2F19c27a2bd4acf71e7ecebb6ca4ff%2Fak8us1nb5z.png",
      "https://cdn.abcotvs.com/dip/images/1441845_072516-wpvi-tsa-breach-caught-on-camera-video.jpg",
      "https://media.nbcchicago.com/2019/09/ohare-1.jpg?quality=85&strip=all&resize=1200%2C675",
      "https://cdn.pixabay.com/photo/2016/12/10/17/02/airport-1897716_1280.jpg",
      "https://images.foxtv.com/static.fox5atlanta.com/www.fox5atlanta.com/content/uploads/2023/11/932/524/P-AIRPORT-INS-DETAINEE-ESCAPES-6P_00.00.00.00.jpg?ve=1&tl=1",
      "https://media.istockphoto.com/id/1173736603/photo/young-woman-pulling-suitcase-in-airport-terminal-copy-space.jpg?s=612x612&w=0&k=20&c=j0FKT5T5bZcPHsvLlCPYPepe2tGECByOhFmVUzKSfWA=",
      "https://www.zdnet.com/a/img/resize/1cab0fadf10c1f9efaaa094b6e46ba0d20fd195b/2017/06/01/5d789686-cf2a-453b-aa46-e71d7487ff0b/customs-border-patrol-processes-holiday-travelers-e5xts6eyukdl.jpg?auto=webp&width=1280",
      "https://static01.nyt.com/images/2022/05/27/us/politics/27dc-border1/27dc-border1-videoSixteenByNine3000.jpg?year=2022&h=1686&w=3000&s=470738c6ab203951e1110126578d5b65f64a3df72b06b9825a9f8e06d64440cf&k=ZQJBKqZ0VN&tw=1",
      "https://images.wral.com/asset/news/national_world/national/2019/06/21/18465166/32043-airportattack-DMID1-5j7nd7s6f-1586x746.jpg?w=640&height=360",
      "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2023/05/1200/675/Atlanta-Airport-brawl.jpg?ve=1&tl=1",
      "https://nypost.com/wp-content/uploads/sites/2/2021/08/john-wayne-airport-security-breach-343.jpg?quality=75&strip=all"
    ];

    const newsLinks = [
      "",
      "https://www.police1.com/officer-safety/articles/cops-in-condition-white-when-youre-not-looking-for-trouble-trouble-will-find-you-qnuCZHpM5Qof3FS6/",

    ]

    const poemInterpretations = [
      "The officer’s eyes scan for the unusual, their purpose: to filter danger from normalcy, though normalcy is decided by familiarity.",
      "Blood sugar, blow jobs, disdain for vermin—our tools are subtler, though suspicion lingers heavy, colored by faces that don't match our mirrors.",
      "Domestic terminals feel less dangerous, less foreign, yet the railing isn't the reason.",
      "We watch the opaque doors open, see shapes resolve into people, scanning hair, gait, age—but kinship is invisible to policy.",
      "The hours behind this railing remind us: vigilance never sleeps, even if it falters under monotony.",
      "There’s something poetic in the seconds between shadow and shape—a human truth emerging—but we stamp it with rules.",
      "This imagined life of theirs feels threatening: their cries too loud, their presence too large, their histories too close.",
      "Ink stains linger on fingertips and passports alike—a reminder of lives we will never understand fully but must judge entirely.",
      "Each arrival is new, yet the script repeats: just one more check, one more line, one more ‘this will be the last.’",
      "The light here exposes everything, even us: our discomfort, our prejudices, our dim understanding of why we watch so closely.",
      "All their waiting feels desperate; all our watching feels necessary, though perhaps both are flawed by the same human squint.",
      "All my reports feel like this squint—a narrow gaze, declaring who belongs based on shadows, not substance."
    ];

    
      return (
        <div className="min-h-screen bg-black text-gray-300 p-8 relative overflow-hidden">
          {/* Full screen background layer */}
          <div 
            className="fixed inset-0 transition-opacity duration-500 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: hoveredSection !== null ? `url(${backgroundImages[hoveredSection]})` : 'none',
              opacity: hoveredSection !== null ? 0.15 : 0,
            }}
          />
          
          <div className="absolute inset-0">
            <div className="w-full h-full bg-gradient-to-l from-white via-transparent to-transparent opacity-0 animate-pulse" />
          </div>
    
          <header className="text-center mb-12 relative z-10">
            <h1 className="text-2xl italic animate-pulse">
              from past participle of{' '}
              <span className="text-white">videre</span>
              {' '}or to{' '}
              <span className="text-white">see</span>
            </h1>
          </header>
    
          <div className="space-y-6 relative z-10">
            {poemSections.map((section, index) => (
              <div 
                key={index} 
                className="group relative"
                onMouseEnter={() => setHoveredSection(index)}
                onMouseLeave={() => setHoveredSection(null)}
              >
                <div 
                  className="p-4 cursor-pointer rounded transition-all duration-300
                             hover:bg-gradient-to-r hover:from-transparent hover:via-gray-700 hover:to-transparent
                             group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                  onClick={() => setExpandedSection(expandedSection === index ? null : index)}
                >
                  <p className="text-lg relative z-10">{section}</p>
                </div>
                
                {expandedSection === index && (
                  <div className="mt-2 p-4 bg-gray-900 rounded transition-all duration-300">
                    <p className="text-sm italic">
                      {poemInterpretations[index]}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      );
  };
    
  export default PoemVisualization;
  
