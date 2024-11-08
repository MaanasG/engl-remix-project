import React from 'react'

const PoemVisualization = () => {
    const [expandedSection, setExpandedSection] = React.useState(null);
  
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

    const poemInterpretations = [
        "The officer, as though standing guard over my fate, decodes my life's entry point... blood sugar, the faint taste of a last kiss, small residues of love or loathing... shaping where I'm permitted to go, which words can cross.",
        "Details on a ledger, columns of intimacy and scrutiny... the mundanity of private moments reduced to criteria... as though secrets of the body might hint at secrets of the soul.",
        "The spaces made for homecomings are open-ended, no bars to separate those who arrive and those who wait... as if to say belonging is assumed, no boundary to cross.",
        "Each turn, each shadow, grows into a form and moves closer... hair tinting to familiar hues, gait recalling the known strides... until suddenly, the waiting becomes a glimpse of kin, a long-held shape returning to place.",
        "In counting the minutes, I catalog time by half-seen figures and distances. All the hours pooling, the ache of waiting worn smooth by routine.",
        "This sliver of eternity held in sightline, tracing the shadow as it becomes the gait, as it approaches and steps out of my imagination... my vision manifest, the picture sharpened to presence.",
        "Those thoughts that press against the mind’s edge... my future arriving in whispers that sear, murmuring hopes... seething and bleeding into the moments that follow.",
        "This record pressed into existence, my life written onto skin, into prints... each mark a small testament, as though my words might hold permanence in their own erasure.",
        "I attempt closure with finality, the insistence that this is the end of it... yet, every ending is only an ellipsis in disguise, words waiting to circle back.",
        "A dim glow that touches all things yet reveals nothing fully... the half-lit world, shadows filling in the blanks where detail fades, where light gives way to longing.",
        "The iron bars are both separator and sanctum... each visit, a ritual of restraint and expectancy... this is my threshold, holding me back and holding me steady.",
        "Words pulled close, narrowed to a pinpoint of focus... every line straining to see clearer, though always, a blur remains... the ache of seeing just short of knowing."
      ];
  
    return (
      <div className="min-h-screen bg-black text-gray-300 p-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-l from-white via-transparent to-transparent opacity-0 animate-pulse" />
        </div>
  
        <header className="text-center mb-12">
        <h1 className="text-2xl italic animate-pulse animation-flashColor">
            from past participle of{' '}
            <span className="text-white">videre</span>
            {' '}or to{' '}
            <span className="text-white">see</span>
        </h1>
        </header>
  
        <div className="space-y-6 relative z-10">
          {poemSections.map((section, index) => (
            <div key={index} className="group">
              <div 
                className="p-4 cursor-pointer rounded transition-all duration-300
                           hover:bg-gradient-to-r hover:from-transparent hover:via-gray-700 hover:to-transparent
                           group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                onClick={() => setExpandedSection(expandedSection === index ? null : index)}
              >
                <p className="text-lg">{section}</p>
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